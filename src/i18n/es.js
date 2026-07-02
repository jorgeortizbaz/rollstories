export default {
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
  },

  systems: {
    dnd: 'Dungeons & Dragons',
    vampire: 'Vampiro: La Mascarada',
    cyberpunk: 'Cyberpunk',
    cthulhu: 'La Llamada de Cthulhu',
  },
  common: {
    newGame: 'Nueva Partida',
    continueGame: 'Continuar',
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
    title: 'Crea tu personaje',
    step1: 'Raza y Sexo',
    step2: 'Clase',
    selectRace: 'Elige tu raza',
    selectSex: 'Elige tu sexo',
    selectClass: 'Elige tu clase',
    strengths: 'Fortalezas',
    weaknesses: 'Debilidades',
    npcAttitude: 'Cómo te verán los PNJ',
    relations: 'Relaciones raciales',
    recommendedClasses: 'Clases recomendadas',
    attributesPreview: 'Atributos resultantes',
    next: 'Siguiente',
    startGame: 'Comenzar aventura',
    back: 'Volver',
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
  },

  modifiers: {
  race: 'raza',
  class: 'clase',
},

};
