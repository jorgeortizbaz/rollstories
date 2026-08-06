export default {
  /*DND*/
  attributes: {
    strength: {
      name: 'Fuerza',
      description: 'Poder físico. Afecta al daño cuerpo a cuerpo y a la capacidad de carga.',
    },
    dexterity: {
      name: 'Destreza',
      description: 'Agilidad y reflejos. Afecta a la esquiva y a los ataques a distancia.',
    },
    constitution: {
      name: 'Constitución',
      description: 'Resistencia física. Determina tus puntos de vida.',
    },
    intelligence: {
      name: 'Inteligencia',
      description: 'Razonamiento y memoria. Clave para la magia arcana.',
    },
    wisdom: {
      name: 'Sabiduría',
      description: 'Percepción e intuición. Importante para notar peligros y para la magia divina.',
    },
    charisma: {
      name: 'Carisma',
      description: 'Fuerza de personalidad. Afecta a la persuasión y al liderazgo.',
    },
    stamina: {
      name: 'Resistencia',
      description: 'Aguante físico y capacidad de resistir el dolor y el daño.',
    },
    manipulation: {
      name: 'Manipulación',
      description: 'Habilidad para mentir, persuadir y controlar a los demás.',
    },
    wits: {
      name: 'Astucia',
      description: 'Rapidez mental y capacidad de reacción ante lo inesperado.',
    },
    resolve: {
      name: 'Fuerza de Voluntad',
      description: 'Determinación mental y resistencia a la manipulación ajena.',
    },
  },

  races: {
    human: {
      name: 'Humano',
      description: 'Versátiles y ambiciosos, los humanos se adaptan a cualquier situación.',
    },
    elf: {
      name: 'Elfo',
      description: 'Gráciles y longevos, destacan por su agilidad y su vínculo con la magia.',
    },
    dwarf: {
      name: 'Enano',
      description: 'Robustos y tenaces, forjados en las profundidades de la montaña.',
    },
    halfling: {
      name: 'Mediano',
      description: 'Pequeños y ágiles, sorprendentemente valientes cuando la ocasión lo exige.',
    },
    dragonborn: {
      name: 'Dracónido',
      description: 'Descendientes de dragones, imponentes y orgullosos, con sangre de fuego en las venas.',
    },
  },

  classes: {
    mage: {
      name: 'Mago',
      description: 'Domina las artes arcanas para lanzar hechizos devastadores o utilísimos.',
    },
    paladin: {
      name: 'Paladín',
      description: 'Guerrero sagrado que combina la fuerza marcial con el carisma de un líder.',
    },
    barbarian: {
      name: 'Bárbaro',
      description: 'Fuerza bruta y furia incontenible en el combate cuerpo a cuerpo.',
    },
    rogue: {
      name: 'Pícaro',
      description: 'Sigiloso y ágil, experto en abrir cerraduras y pasar inadvertido.',
    },
  },
  classRecommendation: {
    label: 'Funciona especialmente bien con:',
  },

  stories: {
    gnomabandistas: {
      title: 'El Tesoro del Monarca',
      description: 'Un robo en la cámara del tesoro ha sacudido la ciudad. ¿Quién se atrevió a ejecutar un golpe que parecía imposible?',
    },
    'vampire-masquerade': {
      title: 'Vampire: The Masquerade',
      description: 'Una historia de intrigas nocturnas y política de sangre.',
    },
  },

  systems: {
    dnd: 'Dungeons & Dragons',
    vampire: 'Vampire: The Masquerade',
    cyberpunk: 'Cyberpunk',
    cthulhu: 'The Call of Cthulhu',
  },

  common: {
    newGame: 'Nueva Partida',
    continueGame: 'Continuar',
    comingSoon: 'En desarrollo',
  },

  characterCreation: {
    title: 'Crea tu personaje',
    selectRace: 'Elige tu raza',
    selectSex: 'Elige tu sexo',
    selectClass: 'Elige tu clase',
    attributesPreview: 'Atributos',
    startGame: 'Comenzar aventura',
    back: 'Volver',
  },
  sex: {
    male: 'Masculino',
    female: 'Femenino',
  },

  races: {
    human: {
      name: 'Humano',
      description: 'Versátiles y ambiciosos, los humanos se adaptan a cualquier situación.',
      strengths: 'Gran capacidad de adaptación social. Su carisma les abre puertas allá donde van.',
      weaknesses: 'Sin habilidades especiales innatas. Dependen de su ingenio y experiencia.',
      npcAttitude: 'Los humanos son bienvenidos en casi cualquier lugar. Los PNJ los tratan con normalidad y sin prejuicios.',
      relations: {
        friendly: 'Se llevan bien con todas las razas conocidas.',
        hostile: 'No tienen enemigos raciales declarados.',
      },
    },
    elf: {
      name: 'Elfo',
      description: 'Gráciles y longevos, destacan por su agilidad y su vínculo con la magia.',
      strengths: 'Excepcional destreza y agudeza sensorial. Naturalmente dotados para la magia arcana.',
      weaknesses: 'Constitución frágil. Su aire de superioridad puede generar rechazo.',
      npcAttitude: 'Algunos PNJ los respetan por su sabiduría; otros desconfían de su frialdad y longevidad.',
      relations: {
        friendly: 'Afinidad natural con humanos y medianos.',
        hostile: 'Tensión histórica con los enanos, raras veces resuelta.',
      },
    },
    dwarf: {
      name: 'Enano',
      description: 'Robustos y tenaces, forjados en las profundidades de la montaña.',
      strengths: 'Resistencia física extraordinaria. Expertos en artesanía, minería y combate cuerpo a cuerpo.',
      weaknesses: 'Lentitud y escasa agilidad. Su terquedad puede complicar las negociaciones.',
      npcAttitude: 'Bien valorados por mercaderes y guerreros. Algunos PNJ los consideran toscos o difíciles de tratar.',
      relations: {
        friendly: 'Respeto mutuo con los humanos.',
        hostile: 'Rivalidad ancestral con los elfos.',
      },
    },
    halfling: {
      name: 'Mediano',
      description: 'Pequeños y ágiles, sorprendentemente valientes cuando la ocasión lo exige.',
      strengths: 'Sigilo natural y suerte prodigiosa. Excelentes en tareas que requieren precisión.',
      weaknesses: 'Fuerza muy limitada. Su tamaño puede ser un obstáculo en situaciones de fuerza bruta.',
      npcAttitude: 'Generalmente bien recibidos; su apariencia inofensiva hace que los PNJ bajen la guardia.',
      relations: {
        friendly: 'Buena relación con humanos y elfos.',
        hostile: 'Cierta tensión con los dracónidos, que los consideran demasiado impredecibles.',
      },
    },
    dragonborn: {
      name: 'Dracónido',
      description: 'Descendientes de dragones, imponentes y orgullosos, con sangre de fuego en las venas.',
      strengths: 'Fuerza bruta y presencia intimidante. Su aliento de dragón puede cambiar el curso de un combate.',
      weaknesses: 'Su aspecto genera miedo y desconfianza. Escasa agilidad para moverse sin ser notados.',
      npcAttitude: 'Muchos PNJ los temen o desconfían de ellos al primer contacto. Ganarse su confianza requiere más esfuerzo.',
      relations: {
        friendly: 'Cierta afinidad con los humanos, que valoran su lealtad.',
        hostile: 'Los medianos los ven con recelo; la relación raramente es cómoda.',
      },
    },
  },

  characterCreation: {
    /*DND*/
    title: 'Crea tu personaje',
    step1: 'Raza y Sexo',
    step2: 'Clase',
    selectRace: 'Elige tu raza',
    selectSex: 'Elige tu sexo',
    selectClass: 'Elige tu clase',
    strengths: 'Fortalezas',
    weaknesses: 'Debilidades',
    npcAttitude: 'Cómo te verán los PNJ',
    relations: 'Relaciones',
    recommendedClasses: 'Clases recomendadas',
    attributesPreview: 'Atributos resultantes',
    next: 'Siguiente',
    startGame: 'Comenzar aventura',
    back: 'Volver',

    /*VAMPIRE*/

    selectClan: 'Elige tu clan',
    selectPredatorType: 'Elige tu tipo de depredador',
    step1Clan: 'Clan y Sexo',
    step2Predator: 'Tipo de Depredador',
  },

  game: {
    continueLabel: 'Continuar →',
    endLabel: '— Fin —',
    backToMenu: 'Volver al menú principal',
    attributeLabel: 'Atributo',
    modifierLabel: 'Modificador',
    modifiersLabel: 'Modificadores',
    bonusLabel: 'bonus',
    totalLabel: 'Total',
    rollHint: 'Haz clic en el dado para tirar',
    combatHint: 'Haz clic para combatir',
    injuredLabel: '🩸 Malherido (-2)',
    rollOf: 'Tirada de',
    combatLabel: 'Combate',
    targetLabel: 'Objetivo',
    creditsAuthor: 'Historia original por',
    creditsTranslator: 'Traducción al ruso por',
    successesLabel: 'Éxitos',
    targetSuccessesLabel: 'Éxitos necesarios',
    poolRollHint: 'Toca para tirar los dados',
    willpowerButton: 'Gastar Fuerza de Voluntad (repetir 1 dado)',
    willpowerUsedLabel: 'Has gastado tu Fuerza de Voluntad para esta historia',
    diceWord: 'dado',
    targetMinLabel: 'Mínimo para no fallar',
    targetCleanLabel: 'Para un éxito limpio',
  },

  modifiers: {
    /*DND*/
    race: 'raza',
    class: 'clase',

    /*VAMPIRE*/

    clan: 'clan',
    predatorType: 'tipo de depredador',
  },

  /*VAMPIRE*/

  clans: {
    brujah: {
      name: 'Brujah',
      description: 'Guerreros y rebeldes gobernados por la pasión, propensos a la furia.',
      strengths: 'Fuerza física notable y una determinación feroz en el combate.',
      weaknesses: 'Su temperamento es una bomba de relojería; la ira nubla su juicio con facilidad.',
      npcAttitude: 'Otros vampiros los ven como inestables pero útiles cuando hay que romper algo.',
      relations: {
        friendly: 'Comparten cierta afinidad salvaje con los Gangrel.',
        hostile: 'Su rivalidad con los Ventrue es antigua y bien conocida en la Mascarada.',
      },
    },
    toreador: {
      name: 'Toreador',
      description: 'Esteticistas obsesionados con la belleza, el arte y la pasión humana.',
      strengths: 'Carisma magnético y una sensibilidad artística que cautiva a mortales e inmortales.',
      weaknesses: 'Su fascinación por la belleza puede distraerlos en los peores momentos.',
      npcAttitude: 'Bienvenidos en cualquier círculo social; su encanto abre puertas que otros clanes no pueden.',
      relations: {
        friendly: 'Mantienen una alianza cómoda y elegante con los Ventrue.',
        hostile: 'Desprecian abiertamente la crudeza de los Nosferatu.',
      },
    },
    ventrue: {
      name: 'Ventrue',
      description: 'La aristocracia de los no-muertos, nacidos para gobernar y mandar.',
      strengths: 'Voluntad de hierro y un instinto natural para el liderazgo y la política.',
      weaknesses: 'Su rigidez mental los hace lentos para adaptarse a lo inesperado.',
      npcAttitude: 'Respetados y temidos a partes iguales; se espera que estén al mando de cualquier sala que pisen.',
      relations: {
        friendly: 'Ven a los Toreador como socios naturales en la alta sociedad de la noche.',
        hostile: 'Su desprecio mutuo con los Brujah es legendario entre la Camarilla.',
      },
    },
    nosferatu: {
      name: 'Nosferatu',
      description: 'Desfigurados por la Sangre, viven ocultos y comercian con secretos.',
      strengths: 'Astucia excepcional y una red de información que nadie más posee.',
      weaknesses: 'Su apariencia monstruosa los obliga a esconderse; el trato social directo les resulta muy difícil.',
      npcAttitude: 'Nadie los ve, pero todos temen lo que puedan saber sobre ellos.',
      relations: {
        friendly: 'Comparten una comprensión silenciosa con los Malkavian, otros marginados de la sociedad vampírica.',
        hostile: 'El rechazo estético de los Toreador hacia ellos es mutuo y profundo.',
      },
    },
    malkavian: {
      name: 'Malkavian',
      description: 'Marcados por una locura que distorsiona la realidad pero también revela verdades ocultas.',
      strengths: 'Una intuición perturbadora que roza la clarividencia y desconcierta a sus enemigos.',
      weaknesses: 'Su mente fracturada los hace impredecibles, incluso para ellos mismos.',
      npcAttitude: 'Provocan una mezcla de fascinación y temor; nadie sabe qué esperar de ellos.',
      relations: {
        friendly: 'Encuentran comprensión mutua con los Nosferatu, ambos marginados por su propia naturaleza.',
        hostile: 'No mantienen rivalidades fijas; su relación con los demás clanes es tan impredecible como ellos mismos.',
      },
    },
  },

  predatorTypes: {
    bagger: {
      name: 'Sanguijuela',
      description: 'Se alimenta de bolsas de sangre robadas de hospitales o bancos de sangre, evitando el contacto directo.',
    },
    osteopath: {
      name: 'Osteópata',
      description: 'Se hace pasar por personal médico para extraer sangre bajo la excusa de un tratamiento.',
    },
    siren: {
      name: 'Sirena',
      description: 'Seduce a sus víctimas, convirtiendo la alimentación en un juego de atracción y control.',
    },
    sandman: {
      name: 'Hombre de Arena',
      description: 'Se cuela en los sueños de sus víctimas, alimentándose mientras duermen sin que lo noten.',
    },
  },

};
