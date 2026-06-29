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
    text: (character) => `Las campanas de Valdris llevan horas repicando sin parar. Llegas a la ciudad justo cuando los rumores ya corren por las calles como ratas: alguien robó la cámara del tesoro del monarca durante la noche. Nadie sabe cómo. Nadie sabe quién.

Antes de que puedas orientarte, una mano se posa en tu hombro. Un guardia de expresión seria te mira de arriba abajo y asiente, como si confirmara algo que ya esperaba. "Tú. Llevas pinta de saber resolver problemas. La Capitana necesita hablar contigo." No es exactamente una invitación.`,
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

"Anoche robaron la cámara del tesoro del monarca. Sin rastro de entrada forzada. Sin testigos. Solo el guardia de turno, que jura no haber visto nada." Aldara baja la voz. "Necesito que esto se resuelva antes de que el monarca vuelva de su viaje en tres días. Si esto se hace público antes... habrá caos."`;
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
    text: () => `La cámara del tesoro está sellada con tres cerraduras distintas, ninguna forzada. El suelo de piedra no muestra marcas de arrastre. Todo parece intacto salvo por... la ausencia. Alguien entró y salió sin dejar huella visible.`,
    roll: {
      attribute: 'intelligence',
      label: 'Tirada de Inteligencia',
      modifier: () => 0,
      outcomes: [
        { min: 12, next: 'camara_exito' },
        { min: 0,  next: 'camara_fallo' },
      ],
    },
  },

  camara_exito: {
    id: 'camara_exito',
    type: 'narration',
    scene: 'escena_camara.png',
    npcs: [],
    text: () => `Tus ojos recorren cada rincón hasta que lo ves: en el borde inferior de la tercera cerradura, casi invisible, hay rasguños minúsculos. Demasiado pequeños para una mano humana. Y en el polvo del suelo, cerca de la ventana, una serie de huellas diminutas... y una ganzúa rota del tamaño de tu dedo meñique. Alguien muy pequeño estuvo aquí.`,
    onEnter: ({ addClue }) => addClue('ganzua_gnomica'),
    next: 'convergencia_puerto',
  },

  camara_fallo: {
    id: 'camara_fallo',
    type: 'narration',
    scene: 'escena_camara.png',
    npcs: [],
    text: () => `Inspeccionas la sala durante un buen rato pero no encuentras nada concluyente. Algo no encaja, lo notas en el ambiente, pero no logras identificar el qué. Quizás haya más respuestas fuera.`,
    onEnter: ({ addClue }) => addClue('sensacion_ladron_pequeno'),
    next: 'convergencia_puerto',
  },

  // ── ACTO 2 — RAMA B: GUARDIA ───────────────────────────

  interrogar_guardia: {
    id: 'interrogar_guardia',
    type: 'roll',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Berton es un hombre de mediana edad con cara de no haber dormido. Te recibe con los brazos cruzados y la mandíbula apretada.`,
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
        { min: 0,  next: 'guardia_tension' },
      ],
    },
  },

  guardia_exito: {
    id: 'guardia_exito',
    type: 'narration',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Berton se desmorona. "Está bien. Está bien." Mira hacia la puerta y baja la voz. "Me pagaron para mirar hacia otro lado. Un gnomo con un sombrero ridículo, demasiado grande para su cabeza. Me dio una bolsa de monedas y me dijo que en una hora no habría pasado nada." Traga saliva. "No sé cómo se llama. Pero lo he visto antes cerca del puerto. Pregunta por alguien llamado... El NoHomo."`,
    onEnter: ({ addClue }) => addClue('gnomo_sombrero_nohomo'),
    next: 'convergencia_puerto',
  },

  guardia_fallo: {
    id: 'guardia_fallo',
    type: 'narration',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Berton no cede. "Ya dije todo lo que sé. No vi nada." Pero cuando se gira para irse, te fijas en sus pies: botas nuevas de cuero fino. El sueldo de un guardia no da para eso.`,
    onEnter: ({ addClue }) => addClue('guardia_sobornado'),
    next: 'convergencia_puerto',
  },

  guardia_tension: {
    id: 'guardia_tension',
    type: 'combat',
    scene: 'escena_cuartel.png',
    npcs: ['guardia_berton.png'],
    text: () => `Berton se pone rígido. "¿Quién te has creído que eres para venir aquí a acusarme?" Grita hacia el pasillo. "¡Eh! ¡Aquí, necesito ayuda!"

Dos guardias irrumpen en la sala. La situación se pone fea.`,
    combat: {
      label: 'Combate — Dos guardias corruptos',
      attribute: 'strength',
      modifier: () => 0,
      outcomes: [
        { min: 10, next: 'guardia_combate_victoria' },
        { min: 0,  next: 'camino_acusacion' },
      ],
    },
  },

  guardia_combate_victoria: {
    id: 'guardia_combate_victoria',
    type: 'narration',
    scene: 'escena_cuartel.png',
    npcs: [],
    text: () => `Consigues reducirlos y salir por piernas antes de que lleguen más. Berton te grita algo desde dentro, pero ya estás lejos. Sin pista clara, pero con la certeza de que ese guardia tiene algo que esconder.`,
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
      if (character.race === 'dragonborn') addClue('nohomo_puerto');
      if (character.race === 'elf') addClue('ladrones_pequenos');
      if (character.class === 'rogue') {
        addClue('gnomabandistas_simbolo');
        setFlag('knows_dabiz_name');
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
    text: () => `Todos los caminos apuntan al puerto. El olor a sal y a pescado podrido te recibe mientras el sol empieza a bajar. Entre los muelles y los almacenes, hay demasiados rincones donde esconderse.`,
    choices: [
      {
        text: '"Me muevo en silencio y observo."',
        next: 'puerto_sigilo',
      },
      {
        text: '"Pregunto abiertamente por El NoHomo."',
        next: 'puerto_preguntar',
      },
      {
        text: '"Conozco cómo funciona este mundillo. Sé dónde mirar."',
        condition: (character) => character.class === 'rogue',
        next: 'puerto_picaro',
      },
    ],
  },

  // ── ACTO 3 — PUERTO ────────────────────────────────────

puerto_sigilo: {
  id: 'puerto_sigilo',
  type: 'roll',
  scene: 'escena_puerto.png',
  npcs: [],
  text: () => `Te fundes con las sombras entre los almacenes. Hay movimiento inusual cerca del tercer muelle.`,
  roll: {
    attribute: 'dexterity',
    label: 'Tirada de Destreza',
    modifier: () => 0,
    outcomes: [
      { min: 11, next: 'puerto_sigilo_exito' },
      { min: 0,  next: 'puerto_combate' },
    ],
  },
},

puerto_sigilo_exito: {
  id: 'puerto_sigilo_exito',
  type: 'narration',
  scene: 'escena_simbolo_piedra.png',
  npcs: [],
  text: () => `Desde las sombras observas a dos figuras encapuchadas y de baja estatura cargando bultos hacia una rejilla de alcantarilla. Cuando se marchan, te acercas a la pared donde uno de ellos estuvo apoyado. Allí, arañada en la piedra con algo afilado, hay una marca: una especie de G en espiral. Tosca, pero deliberada. La entrada.`,
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
  text: () => `Un matón enorme te agarra por el hombro. "¿Buscas algo, forastero?" Detrás de él, otros dos. No son guardias. Son algo peor.`,
  combat: {
    label: 'Combate — Tres matones de los Gnomabandistas',
    attribute: 'strength',
    modifier: () => 0,
    outcomes: [
      { min: 11, next: 'puerto_combate_victoria' },
      { min: 0,  next: 'puerto_capturado' },
    ],
  },
},

puerto_combate_victoria: {
  id: 'puerto_combate_victoria',
  type: 'narration',
  scene: 'escena_simbolo_papel.png',
  npcs: [],
  text: () => `Sales victorioso pero malherido. Los matones huyen. Antes de que lleguen refuerzos, uno de ellos deja caer un papel al suelo: un mapa tosco con una G en espiral marcando un punto en las alcantarillas.`,
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
  text: () => `Un golpe en la nuca. Oscuridad.\n\nDespiertas atado en un almacén oscuro. Tus captores no están. Han pasado horas. Consigues soltarte, pero has perdido tiempo y una pista. Al salir, ves en la pared el símbolo de la G en espiral. Al menos tienes eso.`,
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
  text: () => `Te plantas en el primer bar del puerto y preguntas por El NoHomo sin rodeos.`,
  roll: {
    attribute: 'charisma',
    label: 'Tirada de Carisma',
    modifier: () => 0,
    outcomes: [
      { min: 11, next: 'puerto_preguntar_exito' },
      { min: 0,  next: 'puerto_preguntar_fallo' },
    ],
  },
},

puerto_preguntar_exito: {
  id: 'puerto_preguntar_exito',
  type: 'narration',
  scene: 'escena_simbolo_piedra.png',
  npcs: [],
  text: () => `El tabernero te mira largo rato. Luego, sin decir nada, señala con la cabeza hacia la pared del fondo. Hay una marca arañada en la piedra: una G en espiral, discreta pero inconfundible una vez que la ves. "Baja por ahí y sigue las marcas. Pero no digas que fui yo."`,
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
  text: () => `Nadie habla. El bar se queda en silencio incómodo. Al salir, alguien te lanza un papel arrugado. Solo tiene dibujado un garabato: una especie de G en espiral. No sabes de dónde viene, pero señala hacia las alcantarillas.`,
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
  text: () => `Sabes leer una ciudad como otros leen un libro. En veinte minutos ya has identificado los puntos de vigilancia, los patrones de movimiento, y la misma marca repetida en tres lugares distintos: una G en espiral arañada en las paredes, conduciendo hacia las alcantarillas como un rastro de migas de pan.`,
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
  text: () => `La rejilla cede con un chirrido. El olor es brutal. Bajo tierra, la marca en espiral se repite en las paredes cada cierto trecho, guiándote como un rastro hacia algo que cada vez suena más a voces y a actividad.`,
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
  text: (character) => `Te mueves pegado a la pared, pisando donde no hay agua.${character.isInjured ? '\n\n⚠️ Estás malherido. Recibirás una penalización de -2.' : ''}`,
  roll: {
    attribute: 'dexterity',
    label: 'Tirada de Destreza',
    modifier: (character) => character.isInjured ? -2 : 0,
    outcomes: [
      { min: 11, next: 'escondite_sigilo_exito' },
      { min: 0,  next: 'escondite_combate_gnomos' },
    ],
  },
},

escondite_sigilo_exito: {
  id: 'escondite_sigilo_exito',
  type: 'choice',
  scene: 'escena_escondite.png',
  npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
  text: (character) => {
    const base = `Llegas sin ser detectado a una sala grande e improvisada. Ves cajas apiladas, un mapa de la ciudad en la pared... y en el centro, discutiendo a voces, tres figuras: un gnomo corpulento con engranajes y cachivaches colgando del cinturón, un Tiefling de cuernos cortos con cara de pocos amigos, y un gnomo con sotana remendada que murmura algo en voz baja, casi como una oración. Del resto del grupo, ni rastro.`;
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
  text: () => `El gnomo de los engranajes gesticula exasperado. "¡Yo digo que deberíamos habernos llevado también los candelabros!"\nEl Tiefling lo fulmina con la mirada. "Cierra. La. Boca. Molibdeno."\nEl de la sotana, sereno: "El Señor DaBiZ volverá pronto. Tened fe, Tecnecio."\n\nMolibdeno. Tecnecio. Y un tal DaBiZ que aún no está aquí, pero que claramente manda. Están esperando a alguien.`,
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
  text: () => `Te descubren. El gnomo de los engranajes lanza un artilugio que explota en la dirección equivocada, el Tiefling dispara un rayo que casi te roza, y el de la sotana invoca una bendición que no parece funcionar del todo bien.`,
  combat: {
    label: 'Combate — Molibdeno, Tecnecio y Genomo',
    attribute: 'strength',
    modifier: (character) => character.isInjured ? -2 : 0,
    outcomes: [
      { min: 11, next: 'encuentro_dabiz' },
      { min: 0,  next: 'camino_acusacion' },
    ],
  },
},

escondite_capitan: {
  id: 'escondite_capitan',
  type: 'combat',
  scene: 'escena_escondite.png',
  npcs: ['molibdeno.png', 'tecnecio.png', 'genomo.png'],
  text: () => `Media hora después, la Capitana Aldara llega con seis guardias de confianza. "Bien hecho al avisarme", dice. "Entramos juntos."\n\nEl asalto es más caótico pero más seguro. Molibdeno se rinde casi de inmediato. Tecnecio lanza un hechizo que derriba a dos guardias antes de ser inmovilizado. Genomo reza en voz alta todo el tiempo.`,
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
  text: () => `Pateas la puerta. O lo que sirve de puerta en una alcantarilla.`,
  combat: {
    label: 'Combate — Molibdeno, Tecnecio y Genomo',
    attribute: 'strength',
    modifier: () => 0,
    outcomes: [
      { min: 11, next: 'encuentro_dabiz' },
      { min: 0,  next: 'camino_acusacion' },
    ],
  },
},

libro_cuentas: {
  id: 'libro_cuentas',
  type: 'narration',
  scene: 'escena_escondite.png',
  npcs: [],
  text: () => `Mientras los tres discuten, tus dedos recorren las cajas. Bajo un tablón suelto encuentras un libro encuadernado en cuero verde. Dentro: nombres, fechas, cantidades. Funcionarios de la ciudad. Comerciantes. Algunos guardias. Y el nombre de alguien muy cercano al monarca.\n\nDaBiZ lleva años sobornando a medio Valdris.`,
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
  text: () => `La Capitana Aldara entra detrás de ti. DaBiZ mira los refuerzos, luego a su compañera, que niega con la cabeza casi imperceptiblemente. La aritmética no le favorece.\n\n"Interesante." DaBiZ se ajusta el sombrero. "Aun así, no pienso rendirme sin más."`,
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
      { min: 0,  next: 'final_malo_1' },
    ],
  },
},

combate_final: {
  id: 'combate_final',
  type: 'combat',
  scene: 'escena_escondite.png',
  npcs: ['dabiz.png', 'yeromi.png'],
  text: () => `La gnoma de las dagas se mueve primero, rápida como un pensamiento. DaBiZ empieza a murmurar palabras arcanas, el tatuaje de su cara brillando levemente con cada sílaba. No hay tiempo que perder.`,
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
      { min: 0,  next: 'final_malo_1' },
    ],
  },
},

// ── CAMINO DE ACUSACIÓN ─────────────────────────────────

camino_acusacion: {
  id: 'camino_acusacion',
  type: 'narration',
  scene: 'escena_calles.png',
  npcs: [],
  text: () => `Antes de que puedas reponerte, la guardia de la ciudad aparece en masa. Un guardia corrupto está entre ellos. Y está hablando. Señalándote.\n\n"¡Es ese! ¡Lo vi salir de la cámara del tesoro!"`,
  next: 'persecucion',
},

persecucion: {
  id: 'persecucion',
  type: 'combat',
  scene: 'escena_calles.png',
  npcs: [],
  text: () => `La ciudad entera se vuelve contra ti. Los guardias corruptos han hecho bien su trabajo: eres forastero, no tienes coartada, y la historia que han contado es convincente. Las calles se cierran a tu alrededor.\n\nTres oleadas de guardias. Una tirada lo decide todo.`,
  combat: {
    label: 'Huida — Guardias de Valdris',
    attribute: 'strength',
    modifier: () => 0,
    outcomes: [
      { min: 14, next: 'final_malo_2_escape' },
      { min: 8,  next: 'final_malo_2_arrestado' },
      { min: 0,  next: 'final_malo_2_muerte' },
    ],
  },
},

// ── FINALES ─────────────────────────────────────────────

final_bueno: {
  id: 'final_bueno',
  type: 'narration',
  scene: 'escena_plaza.png',
  npcs: [],
  text: () => `DaBiZ y su compañera esposados. El tesoro recuperado. Cuando el monarca regresa, encuentra su ciudad intacta y a los culpables en el calabozo. La Capitana Aldara pronuncia tu nombre ante la ciudad entera.\n\nMientras se los llevan, DaBiZ te lanza una última mirada. No de derrota. De algo que se parece peligrosamente a la admiración. "Hasta la próxima, forastero."`,
  next: null,
},

final_neutral: {
  id: 'final_neutral',
  type: 'narration',
  scene: 'escena_puerto.png',
  npcs: [],
  text: () => `El tesoro está recuperado. Pero DaBiZ y su compañera, en el último segundo, se escabullen por un pasaje que ninguno de vosotros había visto. Desaparecen en la oscuridad como si nunca hubieran existido.\n\nLa Capitana Aldara suspira. "Al menos tenemos el oro." Te paga lo acordado. Tu nombre no llega a oídos del monarca. Pero en los bajos fondos de Valdris, empieza a circular una historia sobre un forastero que estuvo muy cerca.`,
  next: null,
},

final_malo_1: {
  id: 'final_malo_1',
  type: 'narration',
  scene: 'escena_alcantarillas.png',
  npcs: [],
  text: () => `DaBiZ levanta una mano y el aire a tu alrededor se vuelve espeso. Caes de rodillas. "No eres mala persona", dice casi con pena. "Pero hoy no era tu día."\n\nCuando despiertas, el escondite está vacío. El tesoro, desaparecido. La Capitana Aldara te escucha en silencio y luego mira hacia otro lado. Nadie habla del fracaso en voz alta, pero todo el mundo lo sabe.`,
  next: null,
},

final_malo_2_escape: {
  id: 'final_malo_2_escape',
  type: 'narration',
  scene: 'escena_calles.png',
  npcs: [],
  text: () => `Consigues salir de la ciudad. Malherido, sin un céntimo y con el nombre manchado. En el tablón de edictos de la puerta norte, mientras huyes, alcanzas a leer tu descripción: "Se busca. Ladrón del tesoro real."\n\nValdris queda atrás. Y el verdadero culpable, en algún lugar, ríe.`,
  next: null,
},

final_malo_2_arrestado: {
  id: 'final_malo_2_arrestado',
  type: 'narration',
  scene: 'escena_celda.png',
  npcs: [],
  text: () => `Las rejas son frías. Tu historia nadie la escucha. El verdadero culpable nunca es encontrado. El tesoro, nunca recuperado. Y tú, en el fondo de una celda de Valdris, con todo el tiempo del mundo para pensar en qué salió mal.`,
  next: null,
},

final_malo_2_muerte: {
  id: 'final_malo_2_muerte',
  type: 'narration',
  scene: 'escena_calles.png',
  npcs: [],
  text: () => `Los guardias son demasiados. El último pensamiento que te cruza por la mente, irónico y amargo, es que viniste a resolver un crimen y acabas siendo la víctima de otro.`,
  next: null,
},

final_secreto: {
  id: 'final_secreto',
  type: 'narration',
  scene: 'escena_trono.png',
  npcs: ['capitana.png'],
  text: () => `La Capitana Aldara pasa varios minutos leyendo el libro de cuentas en silencio. Cuando levanta la vista, tiene una expresión que no habías visto antes en ella: miedo.\n\n"Esto va mucho más arriba de lo que pensaba."\n\nDaBiZ es arrestado sin resistencia. Sabe que el libro lo condena más que cualquier combate. Uno a uno, los nombres del libro van cayendo. La ciudad de Valdris tarda semanas en procesar lo que ha pasado.\n\nNadie pronuncia tu nombre en público. Es demasiado peligroso. Pero la Capitana Aldara te entrega una bolsa considerablemente más pesada de lo acordado y una sola frase: "Nunca estuviste aquí."`,
  next: null,
},

};