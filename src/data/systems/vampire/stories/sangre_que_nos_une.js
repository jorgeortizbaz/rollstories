export const SANGRE_NODES = {

  // ── ACTO 1 — EL ABRAZO ──────────────────────────────────

  inicio: {
    id: 'inicio',
    type: 'narration',
    scene: 'escena_eclipse_pista.png',
    npcs: [],
    text: () => `Eclipse suena distinto los jueves. Llevas meses viniendo, siempre la misma mesa cerca de la barra, siempre la misma sensación de que este sitio tiene una segunda planta que nadie te ha enseñado nunca. Nadie te lo ha dicho explícitamente, pero de algún modo sabes que aquí dentro las reglas normales no aplican del todo.

Esta noche alguien se sienta a tu lado sin que lo hayas visto acercarse. Eso ya debería haberte puesto en alerta. No lo hace.

"Llevas viniendo el tiempo suficiente," dice una voz que no reconoces del todo, "para que empecemos a confiar en ti." Una mano se posa sobre la tuya, fría de una forma que no tiene nada que ver con el aire acondicionado. "Ven conmigo. Hay algo que quiero enseñarte."`,
    next: 'el_abrazo',
  },

  el_abrazo: {
    id: 'el_abrazo',
    type: 'narration',
    scene: 'escena_trastienda.png',
    npcs: ['silueta_sire.png'],
    text: () => `La trastienda de Eclipse no debería ser tan grande como es. Las luces de la pista no llegan aquí; solo queda una vela y una figura que no distingues del todo bien, como si tus ojos se negaran a enfocarla.

"Esto va a doler," dice la voz, con una honestidad que casi agradeces. "Solo una vez. Después, nunca más."

No hay tiempo de responder. Hay un dolor que no se parece a nada que hayas sentido antes, un frío que empieza en el pecho y se expande hacia fuera, y luego, silencio. Cuando vuelves a abrir los ojos, el mundo tiene un color distinto. No literalmente, o quizás sí. Todo se ve más nítido, más cercano, más hambriento.`,
    next: 'despertar',
  },

  despertar: {
    id: 'despertar',
    type: 'narration',
    scene: 'escena_trastienda.png',
    npcs: [],
    text: (character) => {
      const reactions = {
        brujah: `Lo primero que sientes es rabia. No tiene un objetivo claro todavía, solo una furia pura y sin filtrar que te sube desde el estómago hasta los puños cerrados. Tienes ganas de romper algo, de gritar, de golpear la pared solo para sentir que tu nuevo cuerpo responde. Te cuesta un esfuerzo real quedarte quieto.`,
        toreador: `Lo primero que notas es la belleza brutal de todo lo que te rodea. La llama de la vela, el grano de la madera de la pared, incluso el polvo suspendido en el aire tienen una nitidez casi dolorosa. Podrías quedarte mirando la vela para siempre. Una parte de ti sabe que eso también es peligroso.`,
        ventrue: `Lo primero que haces, incluso antes de terminar de procesar lo que ha pasado, es evaluar la sala: salidas, quién más está aquí, qué control tienes sobre la situación. El instinto de mando llega casi antes que el miedo. Te incorporas con una calma que no sabías que podías fingir tan bien.`,
        nosferatu: `Lo primero que sientes es el cambio en tu propio cuerpo, algo que no encaja, como si tu piel ya no te perteneciera del todo. Te llevas las manos a la cara por instinto, buscando algo que confirmar o desmentir. No hay espejo cerca. Casi lo agradeces.`,
        malkavian: `Lo primero que oyes es una risa. Es tuya, y no sabes muy bien por qué te ríes, ni de qué, ni si deberías parar. Detrás de la risa hay algo más: una claridad extraña, como si de repente vieras las cosas desde un ángulo que nadie más ha considerado. No sabes todavía si eso es un don o el principio de una grieta.`,
      };
      return `${reactions[character.race]}

Frente a ti, la figura que te trajo aquí ya no está. En su lugar, una mujer de expresión calmada te observa con la paciencia de quien ha visto esta misma escena decenas de veces antes. "Bienvenido," dice, sin ninguna calidez particular, pero tampoco con hostilidad. "Soy Selene. Y ahora mismo tú y yo tenemos que hablar de un problema."`;
    },
    next: 'selene_explica',
  },

  selene_explica: {
    id: 'selene_explica',
    type: 'narration',
    scene: 'escena_trastienda.png',
    npcs: ['selene.png'],
    text: () => `Selene se sienta frente a ti con la tranquilidad de quien ya ha tenido esta conversación antes, aunque nunca contigo. "Sé que tienes preguntas. La mayoría tendrán respuesta con el tiempo. Ahora mismo solo necesito que entiendas dos cosas."

Levanta un dedo. "Primera: esto no fue un regalo. Fue una decisión tomada por alguien con sus propias razones, y ahora tú formas parte de algo que no elegiste del todo. Eso no es justo, pero es la realidad."

Levanta un segundo dedo. "Segunda, y esta es la que de verdad importa esta noche: en las últimas semanas, varios de los nuestros han desaparecido. Sin pelea, sin ruido, sin rastro. Un día están aquí, y al siguiente, nada. Ni cuerpo, ni explicación, ni testigos."

Su expresión se endurece ligeramente. "El Príncipe no puede permitirse que esto siga así, pero tampoco puede investigarlo abiertamente sin generar pánico. Necesita a alguien que nadie reconozca, alguien sin historial ni lealtades todavía formadas." Te mira directamente. "Alguien exactamente como tú, recién llegado esta misma noche."`,
    next: 'primera_sed',
  },

  // ── ACTO 2 — LA PRIMERA SED ─────────────────────────────

  primera_sed: {
    id: 'primera_sed',
    type: 'narration',
    scene: (character) => {
      const scenes = {
        bagger: 'escena_hospital.png',
        osteopath: 'escena_consulta_medica.png',
        siren: 'escena_eclipse_pista.png',
        sandman: 'escena_habitacion_dormida.png',
      };
      return scenes[character.class];
    },
    npcs: [],
    text: (character) => {
      const scenes = {
        bagger: `Selene te lleva hasta la parte trasera de un hospital, donde una puerta de servicio queda convenientemente sin vigilancia a estas horas. "La primera vez es la más difícil," dice, señalando hacia una nevera con el símbolo de una cruz roja. "Después de esto, sabrás encontrar tu propio camino."

Tus manos se mueven casi solas, como si tu cuerpo recordara un procedimiento que tu mente nunca aprendió. La bolsa de sangre no sabe a gran cosa, fría y clínica, pero el alivio que sientes al primer trago es tan intenso que te sorprende quedarte sin aliento, aunque ya no lo necesites.`,
        osteopath: `Selene te consigue, sin explicar muy bien cómo, una bata blanca y un cordón con una identificación que no debería resistir ni el escrutinio más superficial. Y sin embargo funciona: la recepcionista del centro de salud privado apenas te mira antes de dejarte pasar.

El paciente que atiendes cree que le estás sacando sangre para un análisis rutinario. Charla contigo sobre su fin de semana mientras el tubo se llena, sin sospechar nada, y tú sientes una punzada de algo que podría ser culpa si te permitieras sentirla del todo. No te lo permites. Todavía no.`,
        siren: `Selene te deja en la pista de Eclipse con una sola instrucción: "Elige a alguien que quiera ser elegido." No hace falta mucho esfuerzo. Un desconocido cuya mirada ya llevaba un rato buscando la tuya se acerca antes de que tengas que hacer nada.

El baile se convierte en otra cosa en cuestión de minutos, una cercanía que él busca activamente y tú apenas tienes que fingir. El mordisco, cuando llega, se siente casi como parte natural del ritmo. Él ni siquiera lo recordará mañana con claridad. Tú sí.`,
        sandman: `Selene te guía hasta un edificio de apartamentos y, sin que quede muy claro cómo entráis, os encontráis dentro de un dormitorio ajeno, donde alguien duerme profundamente. "Con cuidado," susurra ella. "No los despiertes. No hace falta."

Te acercas y descubres, casi por instinto, cómo hacerlo: el sueño de la persona se profundiza a tu contacto, y ella ni se remueve mientras te alimentas. Cuando terminas, no hay marca visible, no hay recuerdo que ella vaya a formar. Solo un sueño particularmente vívido que olvidará al despertar.`,
      };
      return scenes[character.class];
    },
    next: 'transicion_investigacion',
  },

  transicion_investigacion: {
    id: 'transicion_investigacion',
    type: 'narration',
    scene: 'escena_eclipse_pista.png',
    npcs: ['selene.png'],
    text: () => `Cuando regresas a Eclipse, Selene ya te está esperando con dos vasos que no contienen alcohol para ninguno de los dos. "¿Mejor?" pregunta, y no espera realmente una respuesta. "Ahora que ya no vas a distraerte pensando en comida, hablemos de por dónde puedes empezar a tirar del hilo."

Te resume lo que se sabe, que no es mucho: el último Cainita en desaparecer se llamaba Marcus, y nadie lo ha visto desde hace cuatro noches. No hay cuerpo. No hay señales de lucha. Solo una ausencia que empieza a pesar sobre toda la ciudad.`,
    next: 'convergencia_investigacion',
  },

  // ── ACTO 3 — LA INVESTIGACIÓN ────────────────────────────

  convergencia_investigacion: {
    id: 'convergencia_investigacion',
    type: 'choice',
    scene: 'escena_eclipse_pista.png',
    npcs: [],
    text: () => `Tienes un nombre, una fecha, y prácticamente nada más. La ciudad es grande y la noche es joven, pero no infinita. Necesitas decidir por dónde empezar a tirar del hilo.`,
    choices: [
      {
        text: '"Buscaré a otros Cainitas que conocieran a Marcus."',
        next: 'investigar_cainitas',
      },
      {
        text: '"Iré a registrar el lugar donde desapareció."',
        next: 'registrar_escena',
      },
      {
        text: '"Usaré mis contactos entre los mortales, sin que sepan lo que soy."',
        next: 'contactos_mortales',
      },
    ],
  },

  // ── Rama A: Interrogar Cainitas ──────────────────────────

  investigar_cainitas: {
    id: 'investigar_cainitas',
    type: 'poolRoll',
    scene: 'escena_bar_cainitas.png',
    npcs: ['cainita_testigo.png'],
    text: () => `Hay un bar que no aparece en ningún mapa turístico, escondido tras una puerta sin cartel, donde los Cainitas de la ciudad van cuando quieren hablar sin que los mortales escuchen. Encuentras a alguien que conocía a Marcus: nervioso, evasivo, con la mirada de quien sabe más de lo que está dispuesto a admitir en voz alta.`,
    poolRoll: {
      attribute: 'manipulation',
      outcomes: [
        { min: 4, next: 'investigar_exceptional' },
        { min: 2, next: 'investigar_exito' },
        { min: 1, next: 'investigar_parcial' },
        { min: 0, next: 'investigar_fallo' },
      ],
    },
  },

  investigar_exceptional: {
    id: 'investigar_exceptional',
    type: 'narration',
    scene: 'escena_bar_cainitas.png',
    npcs: ['cainita_testigo.png'],
    text: () => `Sabes exactamente qué palabras usar, qué silencios dejar, cuándo insistir y cuándo retroceder. Al final, tu interlocutor cede por completo, con la mirada de alguien que lleva semanas queriendo contarle esto a alguien.

"Marcus estaba investigando algo por su cuenta. Algo sobre un Anciano que se suponía muerto, o perdido, o vete a saber. Dijo una palabra que no había oído nunca: Diablerie. No quiso explicarme qué significaba. Solo dijo que si tenía razón, esto iba a ser mucho peor de lo que el Príncipe cree." Traga saliva, aunque no lo necesita. "Esa fue la última vez que hablé con él."`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('marcus_investigaba_diablerie');
      addClue('testigo_colaborador');
      setFlag('knows_diablerie_word');
    },
    next: 'el_patron',
  },

  investigar_exito: {
    id: 'investigar_exito',
    type: 'narration',
    scene: 'escena_bar_cainitas.png',
    npcs: ['cainita_testigo.png'],
    text: () => `Consigues que hable, aunque con reticencias. "Marcus llevaba tiempo raro. Preguntaba cosas sobre los Ancianos de la ciudad, sobre quién llevaba mucho tiempo sin mostrarse en sociedad." Baja la voz. "La última vez que lo vi, dijo que había encontrado algo en un almacén de las afueras. No me dijo más."`,
    onEnter: ({ addClue }) => addClue('marcus_investigaba_ancianos'),
    next: 'el_patron',
  },

  investigar_parcial: {
    id: 'investigar_parcial',
    type: 'narration',
    scene: 'escena_bar_cainitas.png',
    npcs: ['cainita_testigo.png'],
    text: () => `Consigues algo, pero a medias: tu interlocutor se cierra en cuanto nota que estás presionando demasiado. "No sé nada," repite, aunque su expresión dice lo contrario. Antes de que se aleje del todo, alcanzas a oírle murmurar algo entre dientes: "Almacén... afueras..." Ha perdido más tiempo del que esperabas, y ahora todo el bar te mira con más curiosidad de la que te gustaría.`,
    onEnter: ({ addClue }) => addClue('rumor_almacen_afueras'),
    next: 'el_patron',
  },

  investigar_fallo: {
    id: 'investigar_fallo',
    type: 'narration',
    scene: 'escena_bar_cainitas.png',
    npcs: ['cainita_testigo.png'],
    text: () => `Eliges mal las palabras, o el momento, o ambas cosas. Tu interlocutor se levanta de golpe. "No sé quién te ha enviado, pero deja de hacer preguntas." Se aleja entre la gente antes de que puedas corregir el error. El bar entero parece haberse fijado en ti durante un instante incómodamente largo.`,
    next: 'el_patron',
  },

  // ── Rama B: Registrar el lugar ───────────────────────────

  registrar_escena: {
    id: 'registrar_escena',
    type: 'poolRoll',
    scene: 'escena_apartamento_marcus.png',
    npcs: [],
    text: () => `El apartamento de Marcus sigue precintado por dentro con la discreción propia de quien no quiere que los mortales se enteren de nada. Nadie lo ha tocado desde que desapareció. Si hay algo que encontrar, sigue aquí.`,
    poolRoll: {
      attribute: 'wits',
      outcomes: [
        { min: 4, next: 'registrar_exceptional' },
        { min: 2, next: 'registrar_exito' },
        { min: 1, next: 'registrar_parcial' },
        { min: 0, next: 'registrar_fallo' },
      ],
    },
  },

  registrar_exceptional: {
    id: 'registrar_exceptional',
    type: 'narration',
    scene: 'escena_apartamento_marcus.png',
    npcs: [],
    text: () => `No dejas ni un rincón sin revisar. Bajo una tabla suelta del suelo encuentras un cuaderno escondido con evidente cuidado. Dentro, la letra de Marcus, cada vez más nerviosa según avanzan las páginas, documenta noches de vigilancia a un hombre que, según sus propias notas, "no envejece, no se deja ver dos veces en el mismo sitio, y deja tras de sí Cainitas que simplemente dejan de existir." La última entrada, subrayada con fuerza suficiente para rasgar el papel, dice solo: "Diablerie. Tiene que ser eso. Voy a confirmarlo esta noche."

No hay más entradas después de esa.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('cuaderno_marcus');
      addClue('diablerie_confirmada');
      setFlag('knows_diablerie_word');
      setFlag('has_marcus_notebook');
    },
    next: 'el_patron',
  },

  registrar_exito: {
    id: 'registrar_exito',
    type: 'narration',
    scene: 'escena_apartamento_marcus.png',
    npcs: [],
    text: () => `Encuentras señales de que Marcus se marchó con prisa: un cajón abierto, papeles removidos. Entre ellos, un plano de la ciudad con una zona marcada en rotulador rojo, cerca del puerto industrial. No hay explicación escrita de por qué ese punto le interesaba, pero la marca es reciente.`,
    onEnter: ({ addClue }) => addClue('plano_puerto_industrial'),
    next: 'el_patron',
  },

  registrar_parcial: {
    id: 'registrar_parcial',
    type: 'narration',
    scene: 'escena_apartamento_marcus.png',
    npcs: [],
    text: () => `Registras el apartamento sin demasiado orden, y aunque no encuentras nada definitivo, hay una sensación clara de que alguien más estuvo aquí antes que tú, revisando con más cuidado del que Marcus habría permitido en vida. Sea quien sea, se llevó algo. La pregunta es qué.`,
    onEnter: ({ addClue }) => addClue('alguien_registro_antes'),
    next: 'el_patron',
  },

  registrar_fallo: {
    id: 'registrar_fallo',
    type: 'narration',
    scene: 'escena_apartamento_marcus.png',
    npcs: [],
    text: () => `Pasas más tiempo del que deberías sin encontrar nada útil, y el ruido de tus propios movimientos resuena demasiado en un edificio que se supone vacío. Cuando por fin te rindes, tienes la incómoda sensación de haber dejado más rastro del que has recogido.`,
    next: 'el_patron',
  },

  // ── Rama C: Contactos mortales ───────────────────────────

  contactos_mortales: {
    id: 'contactos_mortales',
    type: 'poolRoll',
    scene: 'escena_calle_contactos.png',
    npcs: ['contacto_mortal.png'],
    text: (character) => {
      const clanFlavor = {
        brujah: `No te molestas en disimular la urgencia. Tu contacto, un portero de un local cercano que te debe más de un favor, nota tu tensión pero decide no preguntar por qué.`,
        toreador: `Eliges a tu contacto con cuidado: alguien del mundo del arte local, encantado de charlar contigo sobre cualquier cosa, incluidos rumores que ni siquiera sabe que está compartiendo con quien no debería.`,
        ventrue: `Te acercas a alguien con acceso a información que la mayoría de la gente no tendría: un funcionario municipal que te trata con el respeto automático de quien ha aprendido a no hacer preguntas.`,
        nosferatu: `Prefieres no dejarte ver del todo. Hablas desde las sombras de un callejón con alguien que ni siquiera llega a verte la cara con claridad, y aun así confía en tu voz más de lo que debería.`,
        malkavian: `Tu contacto te mira con una mezcla de cariño y cautela que ya conoces bien: te tiene por alguien extraño pero inofensivo, lo cual, esta noche, juega a tu favor.`,
      };
      return `${clanFlavor[character.race]}

Preguntas, con cuidado de no sonar a lo que eres, si alguien ha visto algo raro en las últimas semanas: desapariciones, gente que deja de aparecer sin explicación, rumores de algo que no cuadra.`;
    },
    poolRoll: {
      attribute: 'charisma',
      outcomes: [
        { min: 4, next: 'contactos_exceptional' },
        { min: 2, next: 'contactos_exito' },
        { min: 1, next: 'contactos_parcial' },
        { min: 0, next: 'contactos_fallo' },
      ],
    },
  },

  contactos_exceptional: {
    id: 'contactos_exceptional',
    type: 'narration',
    scene: 'escena_calle_contactos.png',
    npcs: ['contacto_mortal.png'],
    text: () => `Tu contacto se anima más de lo esperado. "Ahora que lo dices, sí. Hay un almacén en la zona industrial que llevaba años cerrado y que de repente tiene movimiento por las noches. Nadie entra ni sale por la puerta principal, pero hay luces. Y el mes pasado desapareció un vigilante de seguridad de la zona. La policía lo archivó como que se había ido sin avisar, pero nadie que lo conociera se lo creyó."`,
    onEnter: ({ addClue }) => {
      addClue('almacen_industrial_confirmado');
      addClue('vigilante_desaparecido');
    },
    next: 'el_patron',
  },

  contactos_exito: {
    id: 'contactos_exito',
    type: 'narration',
    scene: 'escena_calle_contactos.png',
    npcs: ['contacto_mortal.png'],
    text: () => `Tu contacto lo piensa un momento antes de responder. "Rumores hay siempre. Pero sí, hace poco alguien mencionó movimiento raro cerca del puerto, en una de las naves abandonadas. Nada que pudiera jurar, pero suficiente para que la gente evite esa calle de noche."`,
    onEnter: ({ addClue }) => addClue('rumor_naves_puerto'),
    next: 'el_patron',
  },

  contactos_parcial: {
    id: 'contactos_parcial',
    type: 'narration',
    scene: 'escena_calle_contactos.png',
    npcs: ['contacto_mortal.png'],
    text: () => `Tu contacto no tiene mucho que ofrecer, pero al despedirse añade, casi como si no le diera importancia: "Ah, por cierto, mi vecina dice que oyó gritos hace unas noches, cerca de la zona industrial. Pensó que serían gatos." No suena muy convencida de su propia teoría.`,
    onEnter: ({ addClue }) => addClue('vecina_oyo_gritos'),
    next: 'el_patron',
  },

  contactos_fallo: {
    id: 'contactos_fallo',
    type: 'narration',
    scene: 'escena_calle_contactos.png',
    npcs: ['contacto_mortal.png'],
    text: () => `La conversación no lleva a ningún sitio útil. Tu contacto está más interesado en hablar de su propia vida que en darte información, y sacarlo del tema resulta más difícil de lo que esperabas. Te vas con la sensación de haber perdido una noche entera por poco.`,
    next: 'el_patron',
  },

  // ── Puente hacia el Acto 4 (placeholder temporal) ────────

  el_patron: {
    id: 'el_patron',
    type: 'narration',
    scene: 'escena_eclipse_pista.png',
    npcs: ['selene.png'],
    text: (character, flags) => {
      const diablerieLine = flags?.knows_diablerie_word
        ? ` Cuando pronuncias la palabra "Diablerie" en voz alta, algo cambia en la expresión de Selene. No es sorpresa exactamente. Es más bien la confirmación de un miedo que ya llevaba tiempo cargando en silencio, sin decirlo.`
        : '';

      return `Vuelves a Eclipse con las manos llenas de fragmentos que, por separado, no dicen gran cosa. Selene escucha cada detalle sin interrumpir, con la concentración de quien está construyendo un mapa mental que tú todavía no puedes ver del todo.${diablerieLine}

Cuando terminas, se queda en silencio un momento demasiado largo para resultar cómodo. "Hay un patrón," dice por fin. "Todo apunta a la misma zona: el distrito industrial, cerca del puerto. Un almacén que llevaba años cerrado y que, por lo visto, ha vuelto a tener actividad propia." Aprieta los labios, como si la siguiente frase le costara más de lo que aparenta. "Es hora de ir a ver qué hay ahí dentro."`;
    },
    next: 'convergencia_almacen',
  },

  convergencia_almacen: {
    id: 'convergencia_almacen',
    type: 'choice',
    scene: 'escena_almacen.png',
    npcs: [],
    text: () => `El almacén se levanta al final de una calle sin apenas iluminación, con las ventanas tapiadas desde dentro y un candado en la puerta principal que parece más decorativo que funcional. No hay guardias visibles desde fuera, lo cual, en tu experiencia todavía muy reciente como Cainita, nunca es buena señal.

Tienes que decidir cómo entrar.`,
    choices: [
      { text: '"Entro en silencio, sin que nadie note mi presencia."', next: 'almacen_sigilo' },
      { text: '"Entro por la fuerza, directamente."', next: 'almacen_fuerza' },
      { text: '"Antes de nada, aviso al Príncipe."', next: 'avisar_principe' },
    ],
  },

  // ── Rama A: Sigilo ───────────────────────────────────────

  almacen_sigilo: {
    id: 'almacen_sigilo',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: [],
    text: () => `Rodeas el edificio buscando una entrada que no sea la puerta principal. Encuentras una ventana mal sellada en la parte trasera, lo bastante ancha para colarte si te mueves con cuidado y no te importa ensuciarte un poco por el camino.`,
    poolRoll: {
      attribute: 'wits',
      outcomes: [
        { min: 4, next: 'sigilo_exceptional' },
        { min: 2, next: 'sigilo_exito' },
        { min: 1, next: 'sigilo_parcial' },
        { min: 0, next: 'sigilo_detectado' },
      ],
    },
  },

  sigilo_exceptional: {
    id: 'sigilo_exceptional',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: [],
    text: () => `Te mueves como si llevaras haciendo esto toda tu existencia, no solo unas pocas noches. Ni una tabla cruje, ni una sombra se agita de más. Estás dentro antes de que tu propio cuerpo termine de procesar el movimiento, y nadie en el edificio tiene la menor idea de que ya no están solos.`,
    onEnter: ({ addClue }) => addClue('entrada_perfecta'),
    next: 'interior_almacen',
  },

  sigilo_exito: {
    id: 'sigilo_exito',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: [],
    text: () => `Consigues colarte sin que nadie te oiga, aunque el corazón que ya no te late sigue insistiendo en acelerarse por costumbre. Estás dentro. Eso es lo que importa.`,
    next: 'interior_almacen',
  },

  sigilo_parcial: {
    id: 'sigilo_parcial',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: [],
    text: () => `Entras, pero no sin ruido: un objeto metálico cae al suelo con un golpe seco que resuena más de lo que te gustaría en un edificio tan silencioso. Te quedas inmóvil durante un instante que se siente eterno. Nadie viene a comprobar. Aun así, sabes que has gastado parte de tu margen de maniobra antes incluso de empezar.`,
    onEnter: ({ addClue }) => addClue('entrada_ruidosa'),
    next: 'interior_almacen',
  },

  sigilo_detectado: {
    id: 'sigilo_detectado',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['esbirro_nembrini.png'],
    text: () => `Casi lo consigues. Casi. Un crujido de más, un movimiento en el ángulo equivocado, y de entre las sombras del interior surge una figura que claramente no esperaba compañía, pero que tampoco parece sorprendida del todo de que alguien lo intentara. Sea lo que sea que trabaja para quien controla este lugar, no tiene ninguna intención de dejarte pasar sin más.`,
    next: 'almacen_combate_forzado',
  },

  almacen_combate_forzado: {
    id: 'almacen_combate_forzado',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: ['esbirro_nembrini.png'],
    text: () => `No hay tiempo para elegancia. Tu cuerpo, todavía aprendiendo lo que es capaz de hacer ahora, responde con una fuerza que te sorprende incluso a ti.`,
    poolRoll: {
      attribute: 'strength',
      outcomes: [
        { min: 3, next: 'interior_almacen' },
        { min: 1, next: 'interior_almacen', injured: true },
        { min: 0, next: 'interior_almacen', injured: true },
      ],
    },
  },

  // ── Rama B: Fuerza directa ───────────────────────────────

  almacen_fuerza: {
    id: 'almacen_fuerza',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: ['esbirro_nembrini.png'],
    text: () => `No te molestas en buscar rodeos. La puerta principal cede con un solo golpe seco, el candado saltando en pedazos por el suelo. El ruido resuena por todo el edificio, y no tarda en aparecer alguien dispuesto a hacerte pagar la entrada tan poco discreta.`,
    poolRoll: {
      attribute: 'strength',
      outcomes: [
        { min: 3, next: 'interior_almacen' },
        { min: 1, next: 'interior_almacen', injured: true },
        { min: 0, next: 'interior_almacen', injured: true },
      ],
    },
  },

  // ── Rama C: Avisar al Príncipe ────────────────────────────

  avisar_principe: {
    id: 'avisar_principe',
    type: 'narration',
    scene: 'escena_eclipse_pista.png',
    npcs: ['selene.png'],
    text: (character) => {
      const clanReactions = {
        brujah: `Odias tener que pedir permiso para nada, y se te nota en la mandíbula apretada mientras Selene hace la llamada. Pero incluso tú reconoces que entrar solo contra algo que ya se ha tragado a varios Cainitas experimentados no es valentía. Es simplemente no llegar a la semana que viene.`,
        toreador: `Lo tomas con la misma elegancia práctica con la que abordas casi todo: pedir refuerzos no es debilidad, es simplemente saber jugar bien tus cartas. Selene parece aprobar silenciosamente tu sentido común.`,
        ventrue: `Esto, piensas, es exactamente cómo deberían hacerse las cosas. Cadena de mando, recursos coordinados, ningún movimiento innecesario. Por primera vez desde que despertaste convertido, algo se siente familiar.`,
        nosferatu: `La idea de ponerte bajo el foco de la guardia del Príncipe, aunque sea brevemente, te incomoda más de lo que esperabas. Preferirías con mucho quedarte entre las sombras. Pero la alternativa es peor, así que aceptas.`,
        malkavian: `Te ríes, un sonido que ni tú mismo terminas de entender del todo, y dices que sí antes de que Selene termine de proponerlo. Algo en el fondo de tu mente ya sabía que esto iba a pasar así.`,
      };

      return `${clanReactions[character.race]}

Selene hace una llamada breve, y en menos tiempo del que esperabas, tres figuras de expresión profesional y absolutamente nada tranquilizadora se unen a vosotros. "El Príncipe confía en que esto se resuelva," dice una de ellas, sin más presentación. "No hace falta que sea silencioso. Solo que se resuelva."`;
    },
    onEnter: ({ setFlag }) => setFlag('principe_informado'),
    next: 'almacen_refuerzos',
  },

  almacen_refuerzos: {
    id: 'almacen_refuerzos',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: ['esbirro_nembrini.png'],
    text: () => `Con refuerzos a tu lado, la puerta principal deja de ser un obstáculo y se convierte en un simple trámite. Quien sea que trabaje dentro no tiene ninguna posibilidad real frente a un grupo tan decidido, aunque eso no le impide intentarlo de todos modos.`,
    poolRoll: {
      attribute: 'strength',
      bonusDice: () => 2,
      outcomes: [
        { min: 2, next: 'interior_almacen' },
        { min: 0, next: 'interior_almacen' },
      ],
    },
  },

  // ── Cierre del Acto 4 ────────────────────────────────────

  interior_almacen: {
    id: 'interior_almacen',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: [],
    text: (character, flags) => {
      const principeLine = flags?.principe_informado
        ? ` Los refuerzos del Príncipe registran el resto del edificio con una eficiencia fría que casi resulta más inquietante que lo que encontráis.`
        : '';

      return `El interior del almacén no se parece en nada a lo que esperabas, ni siquiera después de todo lo que has visto en las últimas noches. Hay cadenas ancladas a las paredes, manchas oscuras en el suelo de cemento que ya nadie se ha molestado en limpiar, y un olor que tu nueva naturaleza reconoce antes de que tu mente termine de procesarlo: sangre de Cainita, no de mortal. Una diferencia sutil, pero inconfundible una vez que la conoces.${principeLine}

Y entonces, entre las sombras de la parte más profunda del almacén, algo se mueve. Algo vivo. O, para ser más precisos en tu nuevo vocabulario, algo no-muerto.

Y entonces, entre las sombras de la parte más profunda del almacén, algo se mueve. Algo vivo. O, para ser más precisos en tu nuevo vocabulario, algo no-muerto.`;
    },
    next: 'testigo_encuentro',
  },

  testigo_encuentro: {
    id: 'testigo_encuentro',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Lo que se mueve entre las sombras no es una amenaza, al menos no en el sentido en que esperabas. Es un Cainita, o lo que queda de uno: encadenado a la pared, con heridas que no terminan de cerrar del todo y una mirada que salta entre el terror y algo parecido al alivio al veros llegar.

"¿Sois... sois de los suyos?" pregunta, con una voz que tiembla más de lo que un vampiro debería poder temblar. "No. No, claro que no. Nadie viene por mí. Nadie viene nunca por los que él deja con vida." Se ríe, un sonido roto que no tiene nada de gracioso. "Sí, deja algunos con vida. Es peor que matarlos, si lo piensas."

Está claro que sabe algo. La pregunta es cómo conseguir que lo cuente sin que el miedo lo cierre del todo.`,
    onEnter: ({ addClue }) => addClue('testigo_encontrado'),
    next: 'convergencia_testigo',
  },

  convergencia_testigo: {
    id: 'convergencia_testigo',
    type: 'choice',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Tienes que decidir cómo abordarlo. Está asustado, fracturado, y cualquier movimiento en falso puede hacer que se cierre por completo o, peor, que entre en pánico.`,
    choices: [
      { text: '"Le hablo con calma, tratando de ganarme su confianza."', next: 'testigo_calma' },
      { text: '"Presiono directamente. No hay tiempo para delicadezas."', next: 'testigo_presion' },
      {
        text: '"Me adentro en su mente fracturada para ver lo que él vio."',
        condition: (character) => character.race === 'malkavian' || character.class === 'sandman',
        next: 'testigo_mente_rota',
      },
    ],
  },

  // ── Rama A: Calma ─────────────────────────────────────────

  testigo_calma: {
    id: 'testigo_calma',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Te acercas despacio, con las manos visibles, con la voz más baja que puedes usar. No eres su enemigo, y necesitas que eso quede claro antes de que puedas preguntarle nada.`,
    poolRoll: {
      attribute: 'charisma',
      outcomes: [
        { min: 4, next: 'testigo_calma_exceptional' },
        { min: 2, next: 'testigo_calma_exito' },
        { min: 1, next: 'testigo_calma_parcial' },
        { min: 0, next: 'testigo_calma_fallo' },
      ],
    },
  },

  testigo_calma_exceptional: {
    id: 'testigo_calma_exceptional',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Algo en tu forma de hablarle, o quizás simplemente el hecho de que alguien por fin se haya molestado en intentarlo, hace que se derrumbe por completo. Te cuenta todo: dónde lo llevó, cómo era el lugar, incluso un detalle que deja caer casi sin darse cuenta de su importancia. "Tiene una debilidad," susurra. "Cuando... cuando hace lo que hace, cuando se alimenta así, queda vulnerable un rato después. No os lo dirá nadie más porque nadie más lo ha visto y ha sobrevivido para contarlo."`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('ubicacion_guarida_nembrini');
      addClue('debilidad_nembrini');
      setFlag('debilidad_nembrini');
    },
    next: 'hacia_la_guarida',
  },

  testigo_calma_exito: {
    id: 'testigo_calma_exito',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Poco a poco, con pausas largas y frases que empiezan varias veces antes de terminar, te da lo que necesitas: la ubicación exacta de donde lo tiene, en las profundidades de un edificio abandonado no muy lejos de aquí. "Id con cuidado," añade, como si hiciera falta decirlo.`,
    onEnter: ({ addClue }) => addClue('ubicacion_guarida_nembrini'),
    next: 'hacia_la_guarida',
  },

  testigo_calma_parcial: {
    id: 'testigo_calma_parcial',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Consigues que hable, pero el miedo le rompe las frases en pedazos que cuesta unir. "Cerca del río," repite varias veces, "cerca del río, en algo que antes era... algo, no me acuerdo, no me acuerdo de nada más." No es mucho, pero es un punto de partida.`,
    onEnter: ({ addClue }) => addClue('pista_vaga_guarida'),
    next: 'hacia_la_guarida',
  },

  testigo_calma_fallo: {
    id: 'testigo_calma_fallo',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Algo en tu acercamiento, por suave que haya sido la intención, lo hace retroceder hasta el límite de sus cadenas. Se cierra en sí mismo, repitiendo en voz baja algo que no llegas a entender, y por más que lo intentas, no consigues que vuelva a abrir la boca esta noche.`,
    next: 'hacia_la_guarida',
  },

  // ── Rama B: Presión ───────────────────────────────────────

  testigo_presion: {
    id: 'testigo_presion',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `No tienes tiempo ni paciencia para delicadezas. Te acercas con la clara intención de que entienda que responder es la opción más sencilla que tiene esta noche.`,
    poolRoll: {
      attribute: 'resolve',
      outcomes: [
        { min: 3, next: 'testigo_presion_exito' },
        { min: 1, next: 'testigo_presion_parcial' },
        { min: 0, next: 'testigo_presion_ataque' },
      ],
    },
  },

  testigo_presion_exito: {
    id: 'testigo_presion_exito',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Funciona, aunque no te sientes especialmente orgulloso de ello. Habla rápido, atropellado, dándote la ubicación de la guarida sin apenas respirar entre frase y frase, como si quisiera terminar esta conversación cuanto antes. Consigues lo que necesitabas. El coste, si lo hay, lo pagas después.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('ubicacion_guarida_nembrini');
      setFlag('testigo_traumatizado');
    },
    next: 'hacia_la_guarida',
  },

  testigo_presion_parcial: {
    id: 'testigo_presion_parcial',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `Te da algo, entre balbuceos y frases cortadas, pero el miedo le nubla los detalles más de lo que te gustaría. "Cerca del agua... un lugar viejo..." No es tan preciso como esperabas, pero es más de lo que tenías antes de entrar.`,
    onEnter: ({ addClue, setFlag }) => {
      addClue('pista_vaga_guarida');
      setFlag('testigo_traumatizado');
    },
    next: 'hacia_la_guarida',
  },

  testigo_presion_ataque: {
    id: 'testigo_presion_ataque',
    type: 'poolRoll',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: () => `El pánico gana la partida antes que tú. Con un movimiento desesperado y sorprendentemente rápido para alguien en su estado, se suelta de una de las cadenas y se lanza hacia ti, no para atacarte exactamente, sino simplemente para huir de lo que sea que cree que estás a punto de hacerle. Tienes que contenerlo antes de que se haga más daño a sí mismo.`,
    poolRoll: {
      attribute: 'strength',
      outcomes: [
        { min: 2, next: 'hacia_la_guarida' },
        { min: 0, next: 'hacia_la_guarida', injured: true },
      ],
    },
  },

  // ── Rama especial: Malkavian / Hombre de Arena ───────────

  testigo_mente_rota: {
    id: 'testigo_mente_rota',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: ['testigo_superviviente.png'],
    text: (character) => {
      const isSandman = character.class === 'sandman';
      const flavor = isSandman
        ? `No necesitas que hable. Apenas rozas su mente y ya estás dentro, deslizándote entre los fragmentos de sus recuerdos con la misma facilidad con la que te cuelas en los sueños de tus víctimas. No hay barrera que se te resista cuando el sueño y el terror se parecen tanto.`
        : `No necesitas que hable. Tu propia mente, tan poco fiable como la suya en sus peores noches, encuentra algo parecido a un idioma común con su locura. Ves lo que él vio, fragmentado, mal ordenado, pero real.`;

      return `${flavor}

Un almacén distinto a este, más al norte, junto al agua. Una figura que se mueve entre las sombras con una seguridad que no admite duda. Y, justo antes de que el recuerdo se rompa en pedazos inservibles, un instante de vulnerabilidad: el momento exacto, después de alimentarse, en que ni siquiera Aurelio Nembrini está a salvo de un buen golpe.

Sales de su mente con más de lo que ninguna conversación te habría dado jamás.`;
    },
    onEnter: ({ addClue, setFlag }) => {
      addClue('ubicacion_guarida_nembrini');
      addClue('vision_nembrini');
      addClue('debilidad_nembrini');
      setFlag('read_witness_mind');
      setFlag('vision_nembrini');
      setFlag('debilidad_nembrini');
    },
    next: 'hacia_la_guarida',
  },

  // ── Cierre del Acto 5 ────────────────────────────────────

  hacia_la_guarida: {
    id: 'hacia_la_guarida',
    type: 'narration',
    scene: 'escena_almacen.png',
    npcs: [],
    text: () => `Dejáis al testigo con la promesa, quizás vacía, de que alguien vendrá a ayudarlo cuando todo esto termine. Selene, que ha esperado fuera todo este tiempo, escucha lo que habéis averiguado con la expresión de alguien que preferiría no tener que dar el siguiente paso, pero sabe que no hay otra opción.

"Entonces ya sabemos dónde está," dice por fin. "Lo que no sabemos es si vais a salir de ahí de una pieza."`,
    next: 'llegada_guarida',
  },

  llegada_guarida: {
    id: 'llegada_guarida',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: [],
    text: (character, flags) => {
      const debilidadLine = flags?.debilidad_nembrini
        ? ` Y hay algo más, algo que guardas para ti mismo mientras te acercas: sabes que hay un momento, después de que se alimente, en que ni siquiera él está a salvo.`
        : '';

      return `El edificio al que os lleva la información del testigo es más grande de lo que esperabas, y mucho más silencioso. No hay guardias en la entrada, no hay trampas evidentes, nada que sugiera que quien vive aquí necesite protegerse de la forma en que la mayoría de vosotros necesitaría.${debilidadLine}

Selene se queda atrás, en la sombra de la entrada. "Esto ya no es algo en lo que pueda ayudarte," dice, con una honestidad que no esperabas de ella. "Lo que pase ahí dentro, lo decides tú."`;
    },
    next: 'nembrini_encuentro',
  },

  nembrini_encuentro: {
    id: 'nembrini_encuentro',
    type: 'choice',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `Lo encuentras en lo que en algún momento fue una sala de reuniones, sentado con la calma de alguien que lleva esperando toda la noche, quizás toda la semana, a que alguien llegara hasta aquí. No parece sorprendido de verte. No parece, en realidad, sorprendido de nada.

"Sabía que alguien vendría tarde o temprano," dice, sin levantarse. "No esperaba que fueras tan joven." Hace un gesto hacia el asiento vacío frente a él, una invitación que no tiene ninguna obligación de aceptar. "Podemos hacer esto de la forma difícil. O puedes sentarte cinco minutos y escuchar por qué hago lo que hago, antes de decidir qué quieres hacer al respecto."`,
    choices: [
      { text: '"Te escucho. Pero no cambiará nada."', next: 'nembrini_escucha_firme' },
      { text: '"Te escucho de verdad. Convénceme."', next: 'nembrini_escucha_abierto' },
      { text: '"No he venido a hablar."', next: 'nembrini_rechazo' },
    ],
  },

  // ── Rama A: Escuchar, sin ceder ───────────────────────────

  nembrini_escucha_firme: {
    id: 'nembrini_escucha_firme',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `Te sientas, pero mantienes la distancia clara desde el primer segundo. Él lo nota, y sonríe como si la reacción le resultara casi entrañable.

"Los Ancianos de esta ciudad llevan siglos tratando a los jóvenes como vosotros como piezas de repuesto," dice, sin levantar la voz. "Marcus, los demás que 'desaparecieron'... créeme, ninguno de ellos era inocente en el gran juego que jugamos todos aquí. Solo eran más útiles muertos, en cierto modo, de lo que fueron vivos." Se inclina un poco hacia delante. "Yo simplemente decidí dejar de esperar a que alguien más viniera a arreglarlo."

Escuchas cada palabra. Y cuando termina, sigues exactamente donde estabas antes de sentarte: convencido de que lo que hace está mal, sin importar cuántas justificaciones le ponga encima.

"Ya veo," dice, leyendo tu expresión sin dificultad. Se pone en pie despacio. "Entonces no hay mucho más que decir."`,
    onEnter: ({ setFlag }) => setFlag('nembrini_firme'),
    next: 'combate_nembrini',
  },

  // ── Rama B: Escuchar y dejarse tentar ─────────────────────

  nembrini_escucha_abierto: {
    id: 'nembrini_escucha_abierto',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: (character) => {
      const clanReactions = {
        brujah: `Algo en su discurso sobre los Ancianos tratando a los jóvenes como desechables toca una fibra que ya estaba tensa desde antes de esta noche, desde el mismo instante en que te convirtieron sin preguntarte nada.`,
        toreador: `Hay algo casi hermoso en la claridad brutal con la que describe el sistema que lo llevó hasta aquí. No es que estés de acuerdo del todo. Es que, por primera vez, alguien te está hablando con una honestidad completa sobre cómo funciona realmente este mundo.`,
        ventrue: `Como alguien acostumbrado a pensar en estructuras de poder, no puedes evitar reconocer la lógica fría detrás de sus palabras, aunque el método que ha elegido para ejecutarla te resulte, cuando menos, extremo.`,
        nosferatu: `Sabes mejor que la mayoría lo que es que un sistema decida que no vales lo suficiente para que se preocupen por ti. Eso no significa que apruebes lo que hace. Pero significa que, por un instante, lo entiendes de verdad.`,
        malkavian: `Una parte de tu mente, la parte que siempre ve los ángulos que nadie más ve, reconoce algo de verdad retorcida en lo que dice. No sabes si es sabiduría o si es simplemente la misma clase de locura que la tuya, vista desde otro ángulo.`,
      };

      return `Te sientas, y esta vez lo haces con la intención real de escuchar hasta el final.

"Los Ancianos de esta ciudad llevan siglos tratando a los jóvenes como vosotros como piezas de repuesto," dice. "Marcus, los demás... no eran inocentes en el juego que jugamos todos aquí. Y tú," añade, mirándote con una atención que se siente incómodamente precisa, "tú ya sabes lo que es que decidan por ti sin preguntarte. Te convirtieron sin tu permiso. Bienvenido a un mundo que funciona exactamente así, en cada nivel, todo el tiempo, salvo que la mayoría no tiene el valor de admitirlo."

${clanReactions[character.race]}

No dices que sí. Pero tampoco dices que no con la firmeza que esperabas de ti mismo.`;
    },
    onEnter: ({ setFlag }) => setFlag('nembrini_tentado'),
    next: 'combate_nembrini',
  },

  // ── Rama C: Rechazo directo ───────────────────────────────

  nembrini_rechazo: {
    id: 'nembrini_rechazo',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `No te sientas. No hay ninguna intención de dejar que esta conversación llegue a ningún sitio.

Nembrini suspira, con una decepción que parece casi genuina. "Qué predecible," dice, poniéndose en pie con un movimiento demasiado tranquilo para alguien que se supone debería estar preocupado. "Todos empezáis igual. Con tanta prisa por decidir quién es el malo de la historia." Se ajusta la manga con calma deliberada. "Al menos esto será rápido."`,
    onEnter: ({ setFlag }) => setFlag('nembrini_sin_dialogo'),
    next: 'combate_nembrini',
  },

  // ── Combate final ──────────────────────────────────────────

  combate_nembrini: {
    id: 'combate_nembrini',
    type: 'poolRoll',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: (character, flags) => {
      const debilidadLine = flags?.debilidad_nembrini
        ? ` Recuerdas lo que sabes: hay un instante, justo después de que se alimente, en que su guardia baja. No ha llegado a alimentarse todavía esta noche. Pero puedes intentar forzar la situación a tu favor.`
        : '';

      return `La conversación termina, y con ella cualquier posibilidad de resolver esto sin sangre. Nembrini se mueve con la seguridad de alguien que lleva siglos sobreviviendo a base de ser más fuerte que quien tenga delante.${debilidadLine}

No hay más tiempo para pensar. Solo para actuar.`;
    },
    poolRoll: {
      attribute: 'strength',
      bonusDice: (character, flags) => {
        let bonus = 0;
        if (flags?.debilidad_nembrini) bonus += 1;
        if (flags?.nembrini_tentado) bonus += 1;
        if (flags?.nembrini_sin_dialogo) bonus -= 1;
        if (flags?.principe_informado) bonus += 1;
        return bonus;
      },
      outcomes: [
        { min: 4, next: 'final_leal_gate' },
        { min: 2, next: 'final_pragmatico_gate' },
        { min: 1, next: 'final_trágico_check_tentado' },
        { min: 0, next: 'final_tragico' },
      ],
    },
  },

  final_trágico_check: {
    id: 'final_trágico_check',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: (character, flags) => {
      if (flags?.nembrini_tentado) {
        return `El combate se detiene antes de llegar a ninguna parte. Nembrini retrocede un paso, estudiándote con una atención distinta a la de antes. "No has venido a matarme de verdad," dice, no como pregunta. "Has venido a ver si tenía razón." Baja las manos. "Entonces hablemos de verdad, sin la parte del combate de por medio."

Es el momento de decidir, de verdad, qué vas a hacer con lo que sea que sientas ahora mismo.`;
      }
      return `Ninguno de los dos consigue una ventaja clara. Nembrini retrocede hacia las sombras del fondo de la sala, y por un instante parece que va a desaparecer sin más. "No mereces morir aquí," dice, con una frialdad que no admite discusión. "Pero tampoco mereces ganar. Hoy no."

Antes de que puedas reaccionar, ya se ha ido.`;
    },
    next: 'final_tragico',
  },

  final_trágico_check_tentado: {
    id: 'final_trágico_check_tentado',
    type: 'choice',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: (character, flags) => {
      if (flags?.nembrini_tentado) {
        return `El combate se detiene antes de llegar a ninguna parte. Nembrini retrocede un paso, estudiándote con una atención distinta a la de antes. "No has venido a matarme de verdad," dice, no como pregunta. "Has venido a ver si tenía razón." Baja las manos. "Entonces hablemos de verdad, sin la parte del combate de por medio."

Nembrini espera tu respuesta con una paciencia que no parece fingida. No te está presionando. Simplemente sabe que, sea cual sea tu decisión, va a ser tuya del todo.`;
      }
      return `Ninguno de los dos consigue una ventaja clara. Nembrini retrocede hacia las sombras del fondo de la sala, con la calma de quien no considera esto una derrota. "No mereces morir aquí," dice, con una frialdad que no admite discusión. "Pero tampoco mereces ganar. Hoy no."

Antes de que puedas reaccionar del todo, ya se ha ido, dejándote solo con la certeza de que esto no ha terminado.`;
    },
    choices: [
      {
        text: '"Únete a mí. Deja que te enseñe lo que de verdad significa esto."',
        condition: (character, flags) => flags?.nembrini_tentado,
        next: 'final_rebelde',
      },
      {
        text: '"No. Voy a detenerte, aunque sea la última cosa que haga."',
        condition: (character, flags) => flags?.nembrini_tentado,
        next: 'final_tragico',
      },
      {
        text: '"No he terminado contigo."',
        condition: (character, flags) => !flags?.nembrini_tentado,
        next: 'final_tragico',
      },
    ],
  },

  oferta_final: {
    id: 'oferta_final',
    type: 'choice',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `Nembrini espera tu respuesta con una paciencia que no parece fingida. No te está presionando. Simplemente sabe que, sea cual sea tu decisión, va a ser tuya del todo.`,
    choices: [
      { text: '"Únete a mí. Deja que te enseñe lo que de verdad significa esto."', next: 'final_rebelde' },
      { text: '"No. Voy a detenerte, aunque sea la última cosa que haga."', next: 'final_tragico' },
    ],
  },

  final_leal_gate: {
    id: 'final_leal_gate',
    type: 'choice',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `Nembrini cae. La victoria es clara, casi sencilla. Pero antes de que puedas dar el asunto por cerrado del todo, algo tira de tu atención hacia otro lugar.`,
    choices: [
      {
        text: '"Antes de nada... hay algo que tengo que comprobar por mí mismo."',
        condition: (character, flags) => flags?.vision_nembrini,
        next: 'final_secreto',
      },
      {
        text: '"Es hora de informar al Príncipe de lo que ha pasado."',
        condition: (character, flags) => !flags?.vision_nembrini,
        next: 'final_leal',
      },
    ],
  },

  final_pragmatico_gate: {
    id: 'final_pragmatico_gate',
    type: 'choice',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `Nembrini cae, aunque no de una forma que resista mucho escrutinio si alguien se molesta en mirar con demasiado detalle. Tienes tiempo para pensar en lo que vas a hacer con lo ocurrido esta noche, antes de que nadie más llegue a la escena.`,
    choices: [
      {
        text: '"Antes de nada... hay algo que tengo que comprobar por mí mismo."',
        condition: (character, flags) => flags?.vision_nembrini,
        next: 'final_secreto',
      },
      {
        text: '"Decidiré exactamente qué parte de esto voy a contar."',
        condition: (character, flags) => !flags?.vision_nembrini,
        next: 'final_pragmatico',
      },
    ],
  },

  // ── FINALES ──────────────────────────────────────────────

  final_leal: {
    id: 'final_leal',
    type: 'narration',
    scene: 'escena_eclipse_pista.png',
    npcs: ['selene.png'],
    text: () => `Nembrini cae, y con él cae también el peso de todas las noches que la ciudad ha pasado con miedo sin saber por qué. No es una victoria limpia ni fácil, pero es una victoria de verdad.

Cuando regresas a Eclipse, Selene te está esperando con una expresión que no le habías visto antes: algo parecido al alivio genuino. "El Príncipe quiere verte," dice. "Y no es la clase de reunión que la mayoría de los recién convertidos consigue en su primera semana."

El Príncipe resulta ser exactamente lo que esperabas y nada de lo que imaginabas al mismo tiempo: una presencia que llena la sala sin necesidad de levantar la voz. "Has hecho lo que Cainitas con siglos de experiencia no consiguieron," dice, sin ceremonia innecesaria. "Eso no se olvida en esta ciudad. Pero tampoco se olvida fácilmente lo que eres capaz de hacer. A partir de ahora, te vigilaré con el mismo cuidado con el que vigilo a quienes más me preocupan."

Ganas un lugar en la sociedad Cainita de la ciudad, reconocido y respetado. También ganas, para siempre, la atención constante de alguien que nunca deja de observar. En el Mundo de Tinieblas, rara vez se consigue lo uno sin lo otro.`,
    next: null,
  },

  final_pragmatico: {
    id: 'final_pragmatico',
    type: 'narration',
    scene: 'escena_eclipse_pista.png',
    npcs: ['selene.png'],
    text: () => `Nembrini cae, pero no de una forma que resista mucho escrutinio si alguien se molesta en mirar con demasiado detalle. Antes de que la Guardia del Príncipe llegue a inspeccionar la escena, tienes tiempo de decidir exactamente qué parte de lo ocurrido esta noche vas a compartir, y qué parte vas a guardarte para ti.

Selene escucha tu versión editada de los hechos con una ceja ligeramente levantada, la única señal de que sabe que hay más de lo que estás contando. No dice nada al respecto. Algunas cosas, ha aprendido, es mejor no preguntarlas en voz alta.

El Príncipe queda satisfecho con la resolución del caso. Recibes tu recompensa, tu lugar reconocido en la ciudad, y una reputación sólida como alguien capaz. Lo que nadie sabe es que también te quedaste con cierta influencia que oficialmente no debería existir: contactos que Nembrini tenía, información que decidiste no entregar del todo. En esta ciudad, el conocimiento que nadie sabe que tienes vale más que cualquier favor oficial.`,
    next: null,
  },

  final_rebelde: {
    id: 'final_rebelde',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: ['aurelio_nembrini.png'],
    text: () => `"Bien," dice Nembrini, y por primera vez desde que lo conoces, su calma parece genuinamente satisfecha en vez de simplemente controlada. "Entonces empecemos de verdad."

No hay ceremonia, no hay un gran discurso de bienvenida. Solo la sensación, extrañamente tranquila, de haber tomado una decisión que ya no puedes deshacer. Nembrini te enseña, en las noches siguientes, una forma distinta de entender lo que eres: sin las jerarquías que llevabas apenas unas semanas empezando a aprender, sin la autoridad de un Príncipe que nunca te preguntó si querías esto.

Selene no vuelve a buscarte. Es probable que ya sepa lo que ha pasado, y que haya decidido, sabiamente, que perseguir a alguien que ha elegido este camino no es una batalla que valga la pena. La ciudad sigue girando sin ti en su radar oficial.

Empiezas tu propio camino, fuera del control de nadie más que tú mismo, con Nembrini como la única guía que has decidido aceptar. No sabes todavía si eso te convierte en algo mejor o simplemente en algo distinto. Puede que, en el Mundo de Tinieblas, esa distinción nunca haya importado tanto como todos fingen.`,
    next: null,
  },

  final_tragico: {
    id: 'final_tragico',
    type: 'narration',
    scene: 'escena_guarida_nembrini.png',
    npcs: [],
    text: () => `No hay victoria en esta noche, ni siquiera la clase de derrota que puedes contar después con cierto orgullo. Nembrini se ha ido, y contigo se queda solo la certeza de que has fracasado en la única cosa que el Príncipe te pidió que hicieras.

Cuando regresas a Eclipse, Selene no dice nada durante un largo rato. No hay reproche en su silencio, lo cual, de alguna forma, es peor que si lo hubiera. "Volverá a aparecer," dice por fin. "Gente como él no se rinde solo porque alguien lo intentó una vez."

El Príncipe no te concede una segunda audiencia. La ciudad sigue su curso, con Nembrini todavía ahí fuera, en alguna parte, esperando su próximo movimiento. Tu nombre no se pronuncia con desprecio exactamente, pero tampoco con ningún tipo de reconocimiento. Simplemente eres, para la sociedad Cainita de esta ciudad, alguien que lo intentó y no fue suficiente. A veces esa es la única verdad que queda.`,
    next: null,
  },

  final_secreto: {
    id: 'final_secreto',
    type: 'narration',
    scene: 'escena_trastienda.png',
    npcs: ['silueta_sire.png'],
    text: () => `Hay algo que no encaja del todo, incluso después de que todo lo demás se haya resuelto. Vuelves, casi sin decidirlo conscientemente, al mismo lugar donde todo empezó: la trastienda de Eclipse, donde tu Sire te dio el Abrazo sin explicarte casi nada de lo que eso significaba.

Esta vez, la figura no se mantiene borrosa. Puedes verla con claridad por primera vez, y hay algo en su expresión que reconoces de inmediato: la misma calma calculadora que viste en Nembrini. "Sabías lo que estaba pasando," dices, no como pregunta. "Desde el principio."

Tu Sire no lo niega. "Sabía que algo pasaba," admite. "No hasta qué punto. Pero necesitaba a alguien nuevo, alguien sin historial, investigándolo. Alguien que nadie relacionara conmigo." Una pausa. "Elegí bien, al final."

La revelación se asienta despacio, cambiando retroactivamente el significado de cada decisión que tomaste desde aquella primera noche. No fuiste solo convertido por necesidad urgente. Fuiste convertido como una herramienta, cuidadosamente elegida para un propósito que nunca se molestaron en explicarte.

Lo que hagas con esa información, ahora que la tienes, es la pregunta que te queda por responder. Esta historia, al menos esta parte, ha llegado a su fin. Pero claramente no es la única pregunta que queda abierta en Valdris... o donde sea que decidas ir a partir de ahora.`,
    next: null,
  },

};