export const gnomabandistasMeta = {
  id: 'gnomabandistas',
  system: 'dnd',
  theme: 'dnd',
  duration: 15,
  menuScene: 'escena_ciudad.png',
};

export const GNOMABANDISTAS_NODES = {

  // ── ACTO 1 ─────────────────────────────────────────────

  inicio: {
    id: 'inicio',
    type: 'narration',
    scene: 'escena_ciudad.png',
    npcs: [],
    text: (character) => `Las campanas de Valdris llevan horas repicando, y su eco rebota entre las calles empedradas con una urgencia que no augura nada bueno. Llegas a la ciudad en el peor momento posible: cuando los rumores ya corren más rápido que la verdad, cuando la gente habla en voz baja y mira sobre el hombro. Alguien robó la cámara del tesoro del monarca durante la noche. Sin rastro de entrada forzada, sin testigos, sin explicación lógica. Solo la ausencia.

Antes de que puedas orientarte entre el gentío nervioso, una mano se posa en tu hombro con la familiaridad de quien sabe exactamente quién es cada cara en esta ciudad. Un guardia de expresión seria te mira de arriba abajo y asiente despacio, como si estuviera confirmando algo que ya esperaba. "Tú. Llevas pinta de saber resolver problemas." No es una pregunta. "La Capitana necesita hablar contigo ahora mismo." Tampoco es exactamente una invitación.`,
    next: 'reunion_capitana',
  },

  reunion_capitana: {
    id: 'reunion_capitana',
    type: 'choice',
    scene: 'escena_trono.png',
    npcs: ['capitana.png'],
    text: (character) => {
      const intros = {
        human: 'La Capitana Aldara te recibe sin rodeos. "Me alegra que hayas llegado. Necesito alguien de fuera de la guardia, alguien en quien pueda confiar precisamente porque no le debo nada a nadie aquí."',
        elf: 'La Capitana Aldara te estudia un momento antes de hablar. "Un elfo. Bien. Vuestra gente observa donde otros no miran. Espero que esa reputación esté justificada."',
        dwarf: 'La Capitana Aldara asiente con respeto cuando entras. "Un enano. Terco como una roca, dicen. Hoy eso es exactamente lo que necesito. Alguien que no se rinda."',
        halfling: 'La Capitana Aldara parpadea ligeramente sorprendida al verte, pero se recompone enseguida. "Que tu tamaño no te engañe ni a ti ni a mí. Si estás aquí es porque eres bueno. Demuéstramelo."',
        dragonborn: 'La Capitana Aldara no disimula del todo su incomodidad, pero mantiene el tipo. "Seré directa: no era mi primera opción. Pero los tiempos son desesperados. Necesito discreción y capacidad. Tú tienes ambas, según me dicen."',
      };

      return `${intros[character.race]}

"Anoche vaciaron la cámara del tesoro del monarca." Aldara habla sin rodeos, con la voz de alguien que lleva despierta desde que encontraron el desastre. "Tres cerraduras intactas. Sin rastro de violencia. El guardia de turno jura que no vio nada." Hace una pausa. "O miente, o pasó algo que no tiene explicación razonable. De momento, prefiero la primera opción."

Se acerca a la ventana y baja la voz. "El monarca regresa en tres días. Si esto se hace público antes de que lo resolvamos, habrá consecuencias que ninguno de los dos queremos ver. Necesito que investigues por fuera de la guardia oficial, alguien que pueda moverse sin que todo el mundo sepa para quién trabaja." Te mira directamente. "¿Puedes hacer eso?"`;
    },
    choices: [
      {
        text: '"Empezaré por la cámara del tesoro."',
        next: 'camara_tesoro',
      },
      {
        text: '"Quiero hablar con el guardia de turno."',
        next: 'interrogar_guardia',
      },
      {
        text: '"Primero escucharé qué dice la gente en el mercado."',
        next: 'mercado_rumores',
      },
    ],
  },

  // ── ACTO 2 — RAMA A: CÁMARA ────────────────────────────

  camara_tesoro: {
    id: 'camara_tesoro',
    type: 'roll',
    scene: 'escena_camara.png',
    npcs: [],
    text: () => `La cámara del tesoro huele a piedra húmeda y a ausencia. Tres cerraduras distintas, ninguna forzada, ninguna rayada. El guardia que te acompaña hasta la puerta no entra: se queda en el umbral con los brazos cruzados y la expresión de alguien que preferiría estar en cualquier otro sitio.

El suelo de piedra no muestra marcas de arrastre. Las paredes no tienen daños. Todo parece estar en su sitio, lo cual es precisamente el problema: quien lo hizo entró y salió sin dejar huella visible. O eso quiere que creas.`,
    roll: {
      attribute: 'intelligence',
      label: 'Tirada de Inteligencia',
      modifier: () => 0,
      outcomes: [
        { min: 12, next: 'camara_exito' },
        { min: 0, next: 'camara_fallo' },
      ],
    },
  },

  camara_exito: {
    id: 'camara_exito',
    type: 'narration',
    scene: 'escena_camara.png',
    npcs: [],
    text: () => `Te tomas tu tiempo. Empiezas por las cerraduras. La primera y la segunda no muestran nada inusual. Pero en el borde inferior de la tercera, casi invisible desde la altura normal, hay una serie de rasguños minúsculos, perfectamente regulares, como si alguien hubiera trabajado con una herramienta muy fina durante mucho tiempo. Demasiado fina para una mano adulta de tamaño normal.

Te agachas. En el polvo del suelo, cerca de la ventana más pequeña, aparecen huellas. Diminutas. Y junto a ellas, casi enterrada entre los granos de polvo, una ganzúa rota del tamaño de tu dedo meñique. Alguien muy pequeño y muy habilidoso estuvo aquí. Y sabía exactamente lo que hacía.`,
    onEnter: ({ addClue }) => addClue('ganzua_gnomica'),
    next: 'convergencia_puerto',
  },

  camara_fallo: {
    id: 'camara_fallo',
    type: 'narration',
    scene: 'escena_camara.png',
    npcs: [],
    text: () => `Inspeccionas cada rincón de la sala con cuidado. Las cerraduras no revelan nada evidente. El suelo tampoco. Pasas los dedos por los marcos de las ventanas, examinas las paredes, buscas marcas que no deberían estar ahí. Nada.

O no hay nada que encontrar, o estás buscando en los sitios equivocados. La sensación persiste de que algo no cuadra, que hay una pieza que falta en este cuadro demasiado limpio, pero no logras identificarla. Tal vez alguien más vio algo. Tal vez las respuestas estén fuera de esta sala.`,
    onEnter: ({ addClue }) => addClue('sensacion_ladron_pequeno'),
    next: 'convergencia_puerto',
  },

  // ── ACTO 2 — RAMA B: GUARDIA ───────────────────────────

  interrogar_guardia: {
    id: 'interrogar_guardia',
    type: 'roll',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `El cuartel huele a sudor y a aceite de antorcha. Berton lleva el uniforme mal abrochado, tiene ojeras de quien no ha dormido y la mandíbula apretada de quien lleva horas preparándose para una conversación que no quiere tener. Te recibe de pie, con los brazos cruzados, en el centro de la sala.

"Ya hablé con la Capitana esta mañana", dice antes de que abras la boca. "No tengo nada nuevo que añadir."`,
    roll: {
      attribute: 'charisma',
      label: 'Tirada de Carisma',
      modifier: (character) => {
        if (character.race === 'dragonborn') return 2;
        if (character.race === 'halfling') return -1;
        return 0;
      },
      outcomes: [
        { min: 14, next: 'guardia_exito' },
        { min: 10, next: 'guardia_fallo' },
        { min: 0, next: 'guardia_tension' },
      ],
    },
  },

  guardia_exito: {
    onEnter: ({ addClue, setFlag }) => {
      addClue('gnomo_sombrero_nohomo');
      setFlag('knows_nohomo');
    },

    id: 'guardia_exito',
    type: 'narration',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Hay un momento en que algo se rompe en la expresión de Berton. No es un derrumbe repentino: es más bien como ver a alguien soltar un peso que llevaba demasiado tiempo cargando.

"Está bien." Mira hacia la puerta del pasillo, luego a ti. Baja la voz hasta casi no ser audible. "Me pagaron. Un gnomo, no más alto que esto." Señala con la mano a la altura de su cadera. "Sombrero ridículo, demasiado grande para su cabeza. Me dio una bolsa con suficientes monedas como para no hacer preguntas y me dijo que en una hora no habría pasado nada." Traga saliva con dificultad. "No sé cómo se llama. Pero lo he visto antes por el puerto. Pregunta por alguien que llaman El NoHomo. Por ahí tirarás del hilo."

Se gira hacia la ventana. La conversación ha terminado.`,
    onEnter: ({ addClue }) => addClue('gnomo_sombrero_nohomo'),
    next: 'convergencia_puerto',
  },

  guardia_fallo: {
    id: 'guardia_fallo',
    type: 'narration',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Berton no cede un milímetro. "Ya dije todo lo que sé esta mañana. No vi nada, no oí nada." Su voz es plana, ensayada. La de alguien que lleva repitiendo la misma historia durante horas y ya la ha convertido en un reflejo.

Cuando se gira para indicarte que la conversación ha terminado, tu mirada cae involuntariamente a sus pies. Botas nuevas. Cuero fino, bien cosidas, el tipo que no se compra con el sueldo de un guardia de segunda categoría. Las lleva con la incomodidad de quien no está acostumbrado a calzado bueno.

No es una prueba. Pero es algo.`,
    onEnter: ({ addClue }) => addClue('guardia_sobornado'),
    next: 'convergencia_puerto',
  },

  guardia_tension: {
    id: 'guardia_tension',
    type: 'combat',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Berton se pone rígido. Hay un instante de cálculo en sus ojos, un momento en que evalúa sus opciones, y entonces abre la boca y grita hacia el pasillo:

"¡Eh! ¡Aquí! ¡Necesito ayuda!"

Los pasos llegan rápido. Demasiado rápido para ser una coincidencia: estaban cerca, esperando. Dos guardias irrumpen en la sala con las manos ya en las empuñaduras. No tienen cara de venir a mediar.`,
    combat: {
      label: 'Combate — Dos guardias corruptos',
      attribute: 'strength',
      modifier: () => 0,
      outcomes: [
        { min: 10, next: 'guardia_combate_victoria' },
        { min: 0, next: 'camino_acusacion' },
      ],
    },
  },

  guardia_combate_victoria: {
    id: 'guardia_combate_victoria',
    type: 'narration',
    scene: 'escena_cuartel.png',
    npcs: [],
    text: () => `El silencio que queda después es inmediato e incómodo. Los dos guardias en el suelo, Berton gritando algo desde el fondo del pasillo mientras tú ya estás en la calle, moviéndote entre la gente con la cabeza gacha.

Las manos te tiemblan ligeramente. No de miedo, sino de adrenalina que no ha encontrado todavía dónde irse. No conseguiste lo que necesitabas de Berton, pero lo que sí conseguiste tiene su propio valor: ese hombre tiene algo que esconder, y los dos guardias que llamó en su ayuda no parecían interesados en hacer preguntas. La corrupción llega más arriba de lo que la Capitana sospechaba.

El puerto. Siempre el puerto.`,
    onEnter: ({ addClue }) => addClue('corrupcion_interna'),
    next: 'convergencia_puerto',
  },

  // ── ACTO 2 — RAMA C: MERCADO ───────────────────────────

  mercado_rumores: {
    id: 'mercado_rumores',
    type: 'narration',
    scene: 'escena_mercado.png',
    npcs: [],
    text: (character) => {
      const racePart = {
        human: 'La gente habla contigo con relativa normalidad. Entre el ruido recoges fragmentos: "dicen que fue magia", "nadie pasa esas cerraduras sin ayuda de dentro", "he visto gente rara cerca del puerto últimamente."',
        dwarf: 'La gente habla contigo con relativa normalidad. Entre el ruido recoges fragmentos: "dicen que fue magia", "nadie pasa esas cerraduras sin ayuda de dentro", "he visto gente rara cerca del puerto últimamente."',
        elf: 'Tu presencia genera cierta distancia, pero un anciano herborista te toma por uno de los suyos en discreción. Te susurra: "Los que lo hicieron no son de aquí. Son pequeños y rápidos. Los vi pasar hace dos noches cargados con sacos."',
        halfling: 'Nadie te toma en serio al principio, lo cual resulta útil. Una niña te señala sin filtros: "Los hombrecitos raros del puerto, ¿los conoces? Se juntan de noche cerca del agua y nunca miran a nadie a los ojos. Yo los evito."',
        dragonborn: 'La gente se aparta a tu paso. Pero el miedo también hace hablar: un vendedor nervioso suelta más de lo que pretendía. "¡No sé nada! Solo que el nuevo intermediario del puerto, ese al que llaman El NoHomo, empezó a operar justo la semana pasada y ya tiene a medio muelle en el bolsillo."',
      };

      const roguePart = character.class === 'rogue'
        ? '\n\nUn viejo contacto del gremio de ladrones te encuentra antes de que preguntes. "Te debo una. Los que hicieron el golpe del tesoro no son del gremio, son freelance. Se hacen llamar los Gnomabandistas. Su jefe es un tipo llamado DaBiZ. Los encontrarás siguiendo una especie de G en espiral marcada con arañazos, cerca de las alcantarillas del puerto."'
        : '';

      return `El mercado hierve de rumores esta mañana. La gente habla en corrillos, los comerciantes bajan la voz cuando pasan los guardias.\n\n${racePart[character.race]}${roguePart}`;
    },
    onEnter: ({ addClue, setFlag, character }) => {
      if (character.race === 'dragonborn') {
        addClue('nohomo_puerto');
        setFlag('knows_nohomo');
      }
      if (character.race === 'elf') addClue('ladrones_pequenos');
      if (character.class === 'rogue') {
        addClue('gnomabandistas_simbolo');
        setFlag('knows_dabiz_name');
        setFlag('knows_nohomo');
        setFlag('knows_symbol');
      }
    },
    next: 'convergencia_puerto',
  },

  // ── ACTO 3 — PUERTO ────────────────────────────────────

  convergencia_puerto: {
    id: 'convergencia_puerto',
    type: 'choice',
    scene: 'escena_puerto.png',
    npcs: [],
    text: (character, flags) => {
      let llegada = '';

      if (flags?.gnomo_sombrero_nohomo || flags?.knows_nohomo) {
        llegada = 'Tienes un nombre: El NoHomo. Y ese nombre, según lo que averiguaste, se mueve por el puerto como pez en el agua. No es mucho, pero es un hilo del que tirar. ';
      } else if (flags?.corrupcion_interna || flags?.guardia_sobornado) {
        llegada = 'Berton no habló, pero sus botas nuevas hablan por él. Alguien está pagando para que ciertas personas miren hacia otro lado, y ese dinero viene de algún sitio. Todo apunta al puerto. ';
      } else if (flags?.gnomabandistas_simbolo) {
        llegada = 'Llevas el nombre resonando en la cabeza: los Gnomabandistas. Y la marca que te dijeron que buscaras debería estar en algún lugar del puerto, según tu contacto. ';
      } else if (flags?.ladrones_pequenos || flags?.nohomo_puerto) {
        llegada = 'Los rumores del mercado eran fragmentos sueltos, pero todos señalaban hacia el mismo sitio. Gente pequeña moviéndose de noche, un intermediario nuevo con demasiada influencia. Alguien está operando desde los muelles. ';
      } else if (flags?.ganzua_gnomica) {
        llegada = 'Las huellas que encontraste en la cámara del tesoro eran diminutas, y esa ganzúa rota no la fabrica ningún artesano de Valdris que conozcas. Alguien de fuera, alguien muy pequeño, que sabe lo que hace. Los forasteros con ese perfil suelen pasar por el puerto. ';
      } else if (flags?.sensacion_ladron_pequeno) {
        llegada = 'No encontraste pruebas concretas en la cámara, pero la sensación sigue ahí: quien lo hizo era pequeño, ágil, y conocía bien el lugar. No es un ladrón de la ciudad. El puerto es el siguiente paso lógico. ';
      } else {
        llegada = 'Los caminos se cruzan aquí. Todo lo que has visto y oído esta mañana apunta en la misma dirección. ';
      }

      return `${llegada}El olor a sal y a madera mojada te recibe cuando bajas hacia los muelles. El puerto de Valdris a esta hora es un laberinto de actividad calculada: pescadores que recogen redes con demasiada prisa, estibadores que mueven bultos sin mirar a nadie, tabernas donde las conversaciones se cortan en cuanto se abre la puerta. Aquí es donde se mueve el dinero que no quiere dejar rastro, donde los forasteros pasan sin que nadie anote sus nombres. Si hay algo que encontrar, está entre estos muelles.`;
    },
    choices: [
      {
        text: '"Me muevo en silencio y observo."',
        next: 'puerto_sigilo',
      },
      {
        text: '"Pregunto abiertamente por El NoHomo."',
        condition: (character, flags) =>
          flags?.knows_nohomo || flags?.knows_dabiz_name ||
          character.class === 'rogue',
        next: 'puerto_preguntar',
      },
      {
        text: '"Conozco cómo funciona este mundillo. Sé dónde mirar."',
        condition: (character) => character.class === 'rogue',
        next: 'puerto_picaro',
      },
      {
        text: '"Pregunto por actividad sospechosa en el puerto."',
        condition: (character, flags) =>
          !flags?.knows_nohomo && !flags?.knows_dabiz_name &&
          character.class !== 'rogue',
        next: 'puerto_preguntar',
      },
    ],
  },

  // ── ACTO 3 — PUERTO ────────────────────────────────────

  puerto_sigilo: {
    id: 'puerto_sigilo',
    type: 'roll',
    scene: 'escena_puerto.png',
    npcs: [],
    text: () => `Te separas del tráfico de la calle principal y te metes entre los almacenes. La luz es escasa, filtrada entre construcciones que parecen haber crecido las unas sobre las otras sin ningún plan. Hay movimiento inusual cerca del tercer muelle: bultos que se mueven sin que nadie los anuncie, figuras que circulan demasiado despacio para ser trabajadores con prisa.

Te quedas quieto. Observas.`,
    roll: {
      attribute: 'dexterity',
      label: 'Tirada de Destreza',
      modifier: () => 0,
      outcomes: [
        { min: 11, next: 'puerto_sigilo_exito' },
        { min: 0, next: 'puerto_combate' },
      ],
    },
  },

  puerto_sigilo_exito: {
    id: 'puerto_sigilo_exito',
    type: 'narration',
    scene: 'escena_simbolo_piedra.png',
    npcs: [],
    text: () => `Desde tu posición ves a dos figuras encapuchadas de baja estatura descargando algo desde una carreta sin marcar hacia una rejilla de alcantarillado. Trabajan en silencio y con una eficiencia que indica práctica. Cuando terminan, uno de ellos se detiene un momento junto a la pared del almacén más cercano y hace un gesto breve con la mano antes de desaparecer por la rejilla.

Te acercas cuando el camino está despejado. En la pared, a la altura de la rodilla, casi invisible entre la humedad y la mugre, hay una marca arañada en la piedra: una G en espiral, tosca pero deliberada. No es un garabato. Es una señal.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('simbolo_espiral');
      setFlag('knows_symbol');
    },
    next: 'alcantarillas_entrada',
  },

  puerto_combate: {
    id: 'puerto_combate',
    type: 'combat',
    scene: 'escena_puerto.png',
    npcs: [],
    text: () => `No llegas a procesar del todo la situación antes de que empeore. Un hombre que prácticamente bloquea la luz entre dos almacenes se gira hacia ti con la calma de quien no tiene ninguna prisa porque sabe exactamente cómo termina esto.

"¿Buscas algo, forastero?" La pregunta no espera respuesta. Detrás de él, dos más se materializan de entre las sombras. No llevan uniforme de guardia. Llevan la expresión de personas a quienes alguien paga para que los problemas desaparezcan.`,
    combat: {
      label: 'Combate — Tres matones de los Gnomabandistas',
      attribute: 'strength',
      modifier: () => 0,
      outcomes: [
        { min: 11, next: 'puerto_combate_victoria' },
        { min: 0, next: 'puerto_capturado' },
      ],
    },
  },

  puerto_combate_victoria: {
    id: 'puerto_combate_victoria',
    type: 'narration',
    scene: 'escena_simbolo_papel.png',
    npcs: [],
    text: () => `El último de los tres cae y el silencio vuelve al callejón. Te duele algo que no sabías que podía dolerte, y la adrenalina empieza a transformarse en ese cansancio específico que solo viene de haber peleado de verdad.

Pero antes de alejarte, uno de ellos ha dejado caer algo al suelo: un trozo de papel doblado, con manchas de aceite en los bordes. Lo despliegas. Es un mapa rudimentario del puerto, trazado a mano, con una sola marca: una G en espiral señalando un punto en las alcantarillas. Quien te mandó a estos tres sabía que ibas a preguntar. Eso significa que vas por el buen camino.`,
    onEnter: ({ addClue, setFlag, setIsInjured }) => {
      addClue('simbolo_espiral');
      setFlag('knows_symbol');
      setIsInjured(true);
    },
    next: 'alcantarillas_entrada',
  },

  puerto_capturado: {
    id: 'puerto_capturado',
    type: 'narration',
    scene: 'escena_puerto.png',
    npcs: [],
    text: () => `El golpe llega de donde no lo veías venir. Un instante de oscuridad repentina, y luego nada.

Cuando recuperas la consciencia, estás en el suelo de un almacén que huele a sal rancia y a madera podrida. Las manos atadas detrás de la espalda, un dolor en la cabeza que pulsa con cada latido. El lugar está vacío. Sea lo que sea lo que querían de ti, o ya lo tienen, o decidieron que no merecía el esfuerzo.

Tardas demasiado tiempo en soltarte. Cuando por fin lo logras y consigues salir al exterior, el sol ya está en otra posición. Has perdido horas. Y sin embargo, al apoyarte en la pared para recuperar el aliento, ves exactamente lo que necesitabas: una G en espiral arañada en la piedra, señalando hacia abajo. Al menos eso no te lo han quitado.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('simbolo_espiral');
      setFlag('knows_symbol');
    },
    next: 'alcantarillas_entrada',
  },

  puerto_preguntar: {
    id: 'puerto_preguntar',
    type: 'roll',
    scene: 'escena_puerto.png',
    npcs: [],
    text: () => `Hay una taberna en la entrada del tercer muelle que tiene toda la pinta de ser el tipo de sitio donde la gente va cuando no quiere que la vean en ningún otro lado. Empujas la puerta. El ruido de conversaciones se corta a medias y varios pares de ojos se giran hacia ti antes de volver a lo suyo con estudiada indiferencia.

Te plantas ante la barra y preguntas lo suficientemente alto como para que quien necesite oírlo pueda hacerlo.`,
    roll: {
      attribute: 'charisma',
      label: 'Tirada de Carisma',
      modifier: () => 0,
      outcomes: [
        { min: 11, next: 'puerto_preguntar_exito' },
        { min: 0, next: 'puerto_preguntar_fallo' },
      ],
    },
  },

  puerto_preguntar_exito: {
    id: 'puerto_preguntar_exito',
    type: 'narration',
    scene: 'escena_simbolo_piedra.png',
    npcs: [],
    text: () => `El tabernero lleva un buen rato limpiando el mismo vaso. No te mira directamente. Pero tampoco se aleja.

Cuando finalmente habla, lo hace sin subir la vista. "No sé de qué me hablas." Una pausa larga. La tela sigue frotando el cristal. "Pero si estuvieras buscando algo en este puerto, yo miraría esa pared del fondo antes de irme."

Hay una marca en la piedra, junto a la puerta trasera. Una G en espiral. "Sigue las que encuentres," dice el tabernero, ya girándose hacia el otro extremo de la barra. "Y no me nombres."`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('simbolo_espiral');
      setFlag('knows_symbol');
    },
    next: 'alcantarillas_entrada',
  },

  puerto_preguntar_fallo: {
    id: 'puerto_preguntar_fallo',
    type: 'narration',
    scene: 'escena_simbolo_papel.png',
    npcs: [],
    text: () => `El bar no te da nada. Las conversaciones no se interrumpen del todo pero bajan de tono, y las respuestas que recibes van desde el silencio hasta un encogimiento de hombros que claramente significa que no piensan decirte nada.

Salir con las manos vacías siempre es una posibilidad en este trabajo.

Pero al cruzar el umbral de vuelta a la calle, alguien te roza el brazo sin detenerse. Cuando bajas la vista, hay un papel arrugado en tu mano. Solo tiene dibujado un garabato: una G en espiral. Sin firma, sin explicación. Alguien dentro quería ayudarte sin que nadie lo viera hacerlo.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('simbolo_espiral');
      setFlag('knows_symbol');
    },
    next: 'alcantarillas_entrada',
  },

  puerto_picaro: {
    id: 'puerto_picaro',
    type: 'narration',
    scene: 'escena_simbolo_piedra.png',
    npcs: [],
    text: () => `Conoces este tipo de lugares mejor de lo que te gustaría admitir. El puerto de Valdris no es muy diferente de otros puertos: los mismos patrones de movimiento, las mismas señales si sabes qué buscar, las mismas caras de quien vigila sin parecer que vigila.

En veinte minutos tienes el mapa mental hecho. Los puntos de observación, los callejones que llevan a sitios que no quieren que veas, y la misma marca repetida en tres lugares distintos: una G en espiral arañada en la piedra, discreta como un secreto, evidente como un camino para quien sabe mirarlo. Las alcantarillas. Por supuesto.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('simbolo_espiral');
      addClue('mapa_ruta_subterranea');
      setFlag('knows_symbol');
    },
    next: 'alcantarillas_entrada',
  },

  // ── ACTO 4 — ALCANTARILLAS ─────────────────────────────

  alcantarillas_entrada: {
    id: 'alcantarillas_entrada',
    type: 'choice',
    scene: 'escena_alcantarillas.png',
    npcs: [],
    text: () => `La rejilla no está cerrada con llave, lo cual en sí mismo es información. Las alcantarillas de Valdris son viejas y el olor lo demuestra, pero el camino que sigues no parece abandonado: la mugre del suelo tiene huellas recientes, y la marca en espiral aparece en las paredes cada cierto trecho, arañada a distintas alturas como si la hubieran dejado personas de distintos tamaños.

El sonido de voces llega antes de que veas ninguna luz. Alguien discute en algún punto adelante, con la confianza de quien se siente seguro en su terreno.`,
    choices: [
      {
        text: '"Avanzo en silencio."',
        next: 'escondite_sigilo',
      },
      {
        text: '"Vuelvo a avisar a la Capitana primero."',
        next: 'escondite_capitan',
      },
      {
        text: '"Entro directamente."',
        next: 'escondite_directo',
      },
    ],
  },

  escondite_sigilo: {
    id: 'escondite_sigilo',
    type: 'roll',
    scene: 'escena_alcantarillas.png',
    npcs: [],
    text: (character) => `Te mueves pegado a la pared, pisando donde no hay agua, evitando las zonas donde la piedra suena diferente bajo el peso. Las voces se hacen más claras conforme avanzas.${character.isInjured ? '\n\nEl golpe que recibiste antes todavía te pasa factura. Cada movimiento brusco recuerda que no estás al cien por cien.' : ''}`,
    roll: {
      attribute: 'dexterity',
      label: 'Tirada de Destreza',
      modifier: (character) => character.isInjured ? -2 : 0,
      outcomes: [
        { min: 11, next: 'escondite_sigilo_exito' },
        { min: 0, next: 'escondite_combate_gnomos' },
      ],
    },
  },

  escondite_sigilo_exito: {
    id: 'escondite_sigilo_exito',
    type: 'choice',
    scene: 'escena_escondite.png',
    npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
    text: (character) => {
      const base = `La sala a la que llegas es amplia para estar debajo de una ciudad, improvisada en la manera en que solo lo son los espacios que alguien decidió usar porque nadie más los reclamaba. Cajas apiladas hasta casi el techo, un mapa de Valdris extendido sobre una mesa con marcas que no reconoces, velas que llevan horas encendidas.

Y en el centro, tres figuras que discuten con el volumen de quien no espera visitas: un gnomo corpulento con suficientes engranajes y artilugios colgando del cinturón como para abrir una tienda, un Tiefling de cuernos cortos y expresión permanentemente ofendida, y un gnomo en sotana remendada que murmura algo en voz baja entre frase y frase de los otros dos, como si llevara una conversación paralela con alguien que los demás no pueden ver. Del resto del grupo, ningún rastro.`;
      return base;
    },
    choices: [
      {
        text: '"Escucho lo que dicen antes de actuar."',
        next: 'escondite_escuchar',
      },
      {
        text: '"Me lanzo sobre ellos por sorpresa."',
        next: 'escondite_combate_gnomos',
      },
      {
        text: '"Aprovecho para registrar la sala antes de que me vean."',
        condition: (character) =>
          (character.race === 'halfling' || character.class === 'rogue') &&
          character.attributes.find((a) => a.id === 'dexterity')?.value >= 12,
        next: 'libro_cuentas',
      },
    ],
  },

  escondite_escuchar: {
    id: 'escondite_escuchar',
    type: 'narration',
    scene: 'escena_escondite.png',
    npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
    text: () => `Te quedas quieto y escuchas.

El gnomo de los engranajes gesticula mientras habla, amenazando con hacer caer media docena de artilugios al suelo con cada movimiento. "¡Digo que deberíamos haber cogido también los candelabros! Eran de plata maciza, yo lo vi—"

"Molibdeno." La voz del Tiefling tiene la temperatura del hierro en invierno. "Cierra. La. Boca."

"El Señor DaBiZ volverá pronto," dice el de la sotana, sin levantar la vista de lo que sea que está leyendo. "Tened fe, Tecnecio. Y tú, Molibdeno, deja de inventariar lo que no cogimos."

Molibdeno. Tecnecio. Y el de la sotana, que sería Genomo a juzgar por las referencias cruzadas que acabas de hacer mentalmente. Tres de ellos, y un cuarto en camino. DaBiZ. Están esperando a alguien.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('nombres_banda');
      setFlag('knows_dabiz_name');
    },
    next: 'encuentro_dabiz',
  },

  escondite_combate_gnomos: {
    id: 'escondite_combate_gnomos',
    type: 'combat',
    scene: 'escena_escondite.png',
    npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
    text: () => `No hay forma limpia de hacerlo, así que no la buscas. Entras, o te descubren: el resultado es el mismo, caos inmediato.

Molibdeno lanza lo primero que tiene a mano, que resulta ser un artilugio que explota hacia el lado equivocado y llena la sala de humo y olor a sulfuro quemado. Tecnecio levanta la mano y el aire crepita antes de que un rayo te roza la oreja izquierda y deja una marca negra en la pared. Genomo cierra los ojos, junta las manos, y empieza a murmurar algo que podría ser una bendición pero que, a juzgar por los resultados, no está funcionando especialmente bien.`,
    combat: {
      label: 'Combate — Molibdeno, Tecnecio y Genomo',
      attribute: 'strength',
      modifier: (character) => character.isInjured ? -2 : 0,
      outcomes: [
        { min: 11, next: 'encuentro_dabiz' },
        { min: 0, next: 'camino_acusacion' },
      ],
    },
  },

  escondite_capitan: {
    id: 'escondite_capitan',
    type: 'combat',
    scene: 'escena_escondite.png',
    npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
    text: () => `La Capitana Aldara no pierde el tiempo en dramaturgia. Llega con seis guardias que claramente eligió con cuidado, los hace colocarse en posición sin decir una sola palabra innecesaria, y luego te mira a ti. "Bien hecho al avisarme. Ahora entramos juntos y hacemos esto de forma ordenada."

La idea de hacerlo de forma ordenada dura exactamente hasta que Molibdeno ve las antorchas y entra en pánico, Tecnecio decide que un hechizo es siempre mejor respuesta que la rendición, y Genomo empieza a rezar en voz alta con una convicción que en otras circunstancias sería casi admirable. La sala tarda varios minutos confusos en calmarse, pero el resultado es el esperado.`,
    combat: {
      label: 'Combate — Con refuerzos (+3)',
      attribute: 'strength',
      modifier: () => 3,
      outcomes: [
        { min: 8, next: 'encuentro_dabiz_capitan' },
        { min: 0, next: 'camino_acusacion' },
      ],
    },
  },

  escondite_directo: {
    id: 'escondite_directo',
    type: 'combat',
    scene: 'escena_escondite.png',
    npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
    text: () => `A veces la solución más directa es simplemente la más honesta. Encuentras lo que sirve de puerta, tomas impulso, y entras.

Los tres que hay dentro tardan exactamente un segundo en procesar lo que está pasando. Tú usas ese segundo.`,
    combat: {
      label: 'Combate — Molibdeno, Tecnecio y Genomo',
      attribute: 'strength',
      modifier: () => 0,
      outcomes: [
        { min: 11, next: 'encuentro_dabiz' },
        { min: 0, next: 'camino_acusacion' },
      ],
    },
  },

  libro_cuentas: {
    id: 'libro_cuentas',
    type: 'narration',
    scene: 'escena_escondite.png',
    npcs: [],
    text: () => `Mientras los tres están ocupados discutiendo entre ellos, tus manos trabajan solas. Recorres las cajas metódicamente, levantando esquinas, revisando fondos, buscando el tipo de escondite que solo usa alguien que no confía del todo en sus propios socios.

Bajo un tablón suelto en el suelo, envuelta en tela encerada para protegerla de la humedad, hay una libreta encuadernada en cuero verde. La abres. Nombres, fechas, cantidades. Columnas ordenadas con una caligrafía pequeña y precisa. Reconoces algunos nombres: funcionarios del palacio, un juez, tres mercaderes con puestos permanentes en el mercado central. Y al final de la última página, subrayado dos veces, el nombre de alguien con acceso directo al monarca.

Esto no es el registro de un golpe. Es el archivo operativo de alguien que lleva años construyendo algo mucho más grande.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('libro_cuentas_dabiz');
      setFlag('has_ledger');
    },
    next: 'encuentro_dabiz',
  },

  // ── ACTO 5 — DABIZ ─────────────────────────────────────

  encuentro_dabiz: {
    id: 'encuentro_dabiz',
    type: 'choice',
    scene: 'escena_escondite.png',
    npcs: ['dabiz.png', 'yeromi.png'],
    text: (character, flags) => {
      const knowsName = flags?.knows_dabiz_name || flags?.knows_nohomo;
      const hasLedger = flags?.has_ledger;

      const intro = `Lo oyes antes de verlo. Una voz tranquila, casi aburrida. "Sabía que llegarías aquí tarde o temprano."\n\nDe entre las sombras aparece un gnomo que no se parece a ninguno que hayas visto antes. Ancho de hombros, de complexión imposiblemente robusta para su tamaño, con el cuello de un toro y los puños de alguien que ha ganado muchas peleas y ha disfrutado de todas ellas. Recorriéndole el pómulo izquierdo, un tatuaje tribal de tinta oscura que le da un aire entre feroz y aristocrático. A su lado, una gnoma con ojos de depredador y dos dagas al cinto que ya lleva en la mano.`;

      const greeting = knowsName
        ? `\n\n"DaBiZ El-NoHomo en persona. Más bajito de lo que esperaba."`
        : `\n\nEl gnomo sonríe al ver tu expresión. "¿Buscabas al NoHomo? Pues ya me has encontrado."`;

      const ledgerLine = hasLedger
        ? `\n\n"Veo que has encontrado mi contabilidad. Qué inconveniente." La sonrisa no desaparece. "Eso cambia las cosas."`
        : '';

      return `${intro}${greeting}${ledgerLine}\n\n"¿Sabes cuánta gente ha intentado detenerme?" La sonrisa no desaparece. "Interesante que hayas llegado tan lejos."`;
    },
    choices: [
      {
        text: '"Entrégate. La Capitana ya tiene pruebas de todo."',
        condition: (character, flags) => flags?.has_ledger,
        next: 'final_secreto',
      },
      {
        text: '"Esto se acaba aquí."',
        next: 'combate_final',
      },
    ],
  },

  encuentro_dabiz_capitan: {
    id: 'encuentro_dabiz_capitan',
    type: 'combat',
    scene: 'escena_escondite.png',
    npcs: ['dabiz.png', 'yeromi.png'],
    text: () => `La Capitana Aldara entra a tu espalda y el cálculo en los ojos de DaBiZ es inmediato e inequívoco. Mira los refuerzos, evalúa las salidas, considera a su compañera de un vistazo. Ella niega casi imperceptiblemente con la cabeza.

"Interesante." DaBiZ se ajusta el borde del sombrero con dos dedos, un gesto que parece más de cortesía que de nerviosismo. "Debo reconocer que la jugada de avisar a la guardia no la esperaba." Una pausa. "Aun así, no pienso rendirme sin que esto cueste algo."`,
    combat: {
      label: 'Combate Final — DaBiZ y su banda (con refuerzos)',
      attribute: 'strength',
      modifier: (character, flags, clues, isInjured) => {
        let mod = 2;
        if (isInjured) mod -= 2;
        return mod;
      },
      outcomes: [
        { min: 14, next: 'final_bueno' },
        { min: 10, next: 'final_neutral' },
        { min: 0, next: 'final_malo_1' },
      ],
    },
  },

  combate_final: {
    id: 'combate_final',
    type: 'combat',
    scene: 'escena_escondite.png',
    npcs: ['dabiz.png', 'yeromi.png'],
    text: () => `Su compañera se mueve primero, y lo hace con una velocidad que no cuadra con el tamaño. Las dagas aparecen en sus manos como si siempre hubieran estado ahí, y el espacio entre vosotros desaparece antes de que hayas terminado de procesar el movimiento.

Al fondo de la sala, DaBiZ ha empezado a murmurar. Las palabras son en un idioma que no reconoces, pero el efecto es visible: el aire a su alrededor adquiere una densidad distinta, y el tatuaje tribal de su pómulo izquierdo emite un resplandor tenue con cada sílaba. No hay tiempo de esperar a ver en qué termina eso.`,
    combat: {
      label: 'Combate Final — DaBiZ El-NoHomo',
      attribute: 'strength',
      modifier: (character, flags, clues, isInjured) => {
        let mod = 0;
        if (clues?.length >= 4) mod += 2;
        else if (clues?.length >= 2) mod += 1;
        if (clues?.includes('libro_cuentas_dabiz')) mod += 1;
        if (isInjured) mod -= 2;
        return mod;
      },
      outcomes: [
        { min: 14, next: 'final_bueno' },
        { min: 10, next: 'final_neutral' },
        { min: 0, next: 'final_malo_1' },
      ],
    },
  },

  // ── CAMINO DE ACUSACIÓN ─────────────────────────────────

  camino_acusacion: {
    id: 'camino_acusacion',
    type: 'narration',
    scene: 'escena_calles.png',
    npcs: [],
    text: () => `No llegas a recuperarte del todo antes de que empeore.

La guardia de la ciudad llega en número, y no lo hace sola: un guardia corrupto está entre ellos, con la postura de alguien que ha tomado una decisión y ha decidido no volver atrás. Levanta el brazo y te señala con un dedo que no tiembla lo suficiente para ser inocente.

"Ese. Lo vi salir de la cámara del tesoro anoche." Su voz es firme, ensayada, perfecta. La de alguien que lleva horas preparando este momento. "Es el ladrón."

El problema con ser forastero en una ciudad que no te conoce es que nadie puede decir con certeza que eso no es verdad.`,
    next: 'persecucion',
  },

  persecucion: {
    id: 'persecucion',
    type: 'combat',
    scene: 'escena_calles.png',
    npcs: [],
    text: () => `En cuestión de minutos tu nombre está en boca de todos los que tienen razones para querer que alguien sea culpable. Los guardias corruptos han hecho bien su trabajo: eres nuevo en la ciudad, no tienes nadie que responda por ti, y la historia que han construido es lo suficientemente sólida como para sostenerse el tiempo necesario.

Las calles se estrechan a tu alrededor. Cada esquina puede tener alguien esperando. Tienes que salir de aquí ahora.`,
    combat: {
      label: 'Huida — Guardias de Valdris',
      attribute: 'strength',
      modifier: () => 0,
      outcomes: [
        { min: 14, next: 'final_malo_2_escape' },
        { min: 8, next: 'final_malo_2_arrestado' },
        { min: 0, next: 'final_malo_2_muerte' },
      ],
    },
  },

  // ── FINALES ─────────────────────────────────────────────

  final_bueno: {
    id: 'final_bueno',
    type: 'narration',
    scene: 'escena_plaza.png',
    npcs: [],
    text: () => `La plaza de Valdris amaneció diferente ese día. DaBiZ El-NoHomo esposado, con el sombrero ridículo confiscado y una expresión que no es del todo de derrota sino de alguien catalogando mentalmente qué salió mal para no repetirlo. Yeromi a su lado, con la mirada al frente y sin dar la satisfacción de ninguna reacción visible. El tesoro del monarca, recuperado y contabilizado hasta el último objeto.

La Capitana Aldara habló ante la guardia reunida y pronunció tu nombre con la misma precisión con la que hace todas las cosas. No fue un discurso largo. Aldara no hace discursos largos. Pero fue suficiente.

Mientras los llevaban, DaBiZ giró la cabeza hacia ti. La expresión de su cara no era lo que esperabas: no era rabia ni humillación. Era algo que se parecía peligrosamente a la consideración de alguien evaluando a un rival. "Hasta la próxima, forastero," dijo, lo suficientemente en voz baja como para que solo tú lo oyeras. Y algo en su tono te dijo que no era una amenaza vacía.`,
    next: null,
  },

  final_neutral: {
    id: 'final_neutral',
    type: 'narration',
    scene: 'escena_puerto.png',
    npcs: [],
    text: () => `El tesoro está de vuelta en las arcas del monarca, eso es lo que importa según la Capitana Aldara, y en términos prácticos tiene razón. Pero hay algo que no encaja bien en la manera en que terminó esto.

En el último segundo, cuando el perímetro ya estaba cerrado y no había salida visible, DaBiZ y Yeromi encontraron una. Un pasaje que ninguno de vosotros había identificado, estrecho, perfectamente calculado. Desaparecieron en el sistema de alcantarillas de Valdris como si el agua los hubiera absorbido.

Aldara firmó el pago acordado sin decir mucho. "Hiciste lo que te pedí", fue todo. Tu nombre no llegará a los registros oficiales. En los bajos fondos de la ciudad, sin embargo, ya corre una historia sobre un forastero que estuvo a punto. Las historias sobre los que casi lo consiguen también tienen su valor, aunque cueste reconocerlo.`,
    next: null,
  },

  final_malo_1: {
    id: 'final_malo_1',
    type: 'narration',
    scene: 'escena_alcantarillas.png',
    npcs: [],
    text: () => `DaBiZ no necesitó levantar la voz. Solo levantó la mano.

El aire se volvió espeso de una manera que no tenía explicación física, como si de repente hubiera demasiado peso en él, y tus rodillas decidieron por su cuenta que el suelo era un buen sitio donde estar. "No eres mala persona," dijo DaBiZ, mirándote desde arriba con algo parecido a la pena genuina. "Llegaste bastante lejos, la verdad. Otro día, quizás."

Cuando volviste a ser capaz de moverte, el escondite estaba vacío. Limpio, casi. Como si nunca hubiera pasado nada.

La Capitana Aldara te escuchó hasta el final sin interrumpirte. Luego miró durante un momento largo hacia la ventana. "Descansa", fue lo único que dijo. El dinero que pasó de su mano a la tuya era menos de lo acordado, y los dos sabíais por qué. Nadie habló del fracaso en voz alta. Pero en Valdris, el silencio también comunica.`,
    next: null,
  },

  final_malo_2_escape: {
    id: 'final_malo_2_escape',
    type: 'narration',
    scene: 'escena_calles.png',
    npcs: [],
    text: () => `Conseguiste salir. Eso es lo que te dices mientras las murallas de Valdris se hacen pequeñas a tu espalda, mientras el camino bajo tus pies es el único plan que tienes.

En el tablón de edictos de la puerta norte, alcanzaste a leer tu descripción antes de pasar. Alguien que te conoce bastante bien escribió ese texto: los detalles son precisos, la recompensa es lo suficientemente generosa como para que valga la pena, y la acusación es tan específica que va a ser difícil de rebatir sin pruebas que ya no tienes.

Valdris quedó atrás. El verdadero culpable sigue dentro de sus murallas, probablemente ya trabajando en el siguiente golpe. Y tú en la carretera, sin nada excepto la certeza de que sabes cómo termina esta historia aunque no puedas contarla.`,
    next: null,
  },

  final_malo_2_arrestado: {
    id: 'final_malo_2_arrestado',
    type: 'narration',
    scene: 'escena_celda.png',
    npcs: [],
    text: () => `Las rejas de la celda son viejas y están oxidadas en las juntas, lo cual es lo primero en lo que te fijas porque tu cerebro necesita concentrarse en algo que no sea la situación en su totalidad.

Nadie escucha tu historia. No porque no tengas una: la tienes, completa, con lógica y detalles que cualquier investigador competente podría verificar. El problema es que los investigadores competentes tienen razones para no querer verificarla. Los testigos que podrían respaldarte están en la nómina de las personas equivocadas. Y tú eres forastero, lo cual significa que en Valdris no eres nadie hasta que alguien decide quién quiere que seas.

El verdadero culpable nunca es encontrado. El tesoro, nunca recuperado. Y tú con todo el tiempo del mundo para pensar en el momento exacto en que las cosas se torcieron, y en si hubieras podido hacer algo diferente.`,
    next: null,
  },

  final_malo_2_muerte: {
    id: 'final_malo_2_muerte',
    type: 'narration',
    scene: 'escena_calles.png',
    npcs: [],
    text: () => `Hay demasiados. Eso es lo último que procesas con claridad antes de que el número deje de ser manejable y el resultado deje de estar en duda.

El pensamiento final que te cruza por la mente tiene el sabor específico de la ironía: llegaste a Valdris a resolver un crimen y vas a acabar convertido en uno. El verdadero culpable sigue libre. El tesoro sigue perdido. Y la ciudad seguirá adelante mañana como si nada, porque las ciudades siempre lo hacen.`,
    next: null,
  },

  final_secreto: {
    id: 'final_secreto',
    type: 'narration',
    scene: 'escena_trono.png',
    npcs: ['capitana.png'],
    text: () => `La Capitana Aldara tardó más de lo habitual en reaccionar cuando pusiste el libro encuadernado en verde sobre su mesa. Lo leyó despacio, pasando las páginas con cuidado, y el silencio en la sala fue cambiando de textura a medida que avanzaba.

Cuando levantó la vista, tenías delante a alguien que acababa de enterarse de algo que cambia fundamentalmente cómo entiende el lugar donde lleva años trabajando. "Esto va mucho más arriba de lo que pensaba", dijo, y en su voz había algo que no habías oído antes: no exactamente miedo, pero algo adyacente a él.

DaBiZ fue arrestado sin resistencia. Sabía lo que significaba el libro en manos de la Capitana, y sabía que pelear en ese momento no cambiaba nada que no estuviera ya decidido. Uno a uno, en los días y semanas siguientes, los nombres del registro fueron teniendo consecuencias. Algunos cayeron rápido. Otros tuvieron tiempo de esconderse.

Tu nombre no aparece en ningún informe oficial. Es demasiado peligroso que aparezca. Pero la bolsa que Aldara puso en tus manos pesaba considerablemente más de lo acordado, y la frase con la que te despidió fue lo suficientemente clara: "Nunca estuviste aquí."

Saliste a la calle de Valdris, que seguía siendo la misma ciudad pero que ya sabías que no lo era del todo, y eso tenía que ser suficiente.`,
    next: null,
  },

};