export default {
  /*DND*/
  attributes: {
    strength: {
      name: 'Strength',
      description: 'Physical power. Affects melee damage and carrying capacity.',
    },
    dexterity: {
      name: 'Dexterity',
      description: 'Agility and reflexes. Affects dodging and ranged attacks.',
    },
    constitution: {
      name: 'Constitution',
      description: 'Physical endurance. Determines your hit points.',
    },
    intelligence: {
      name: 'Intelligence',
      description: 'Reasoning and memory. Key for arcane magic.',
    },
    wisdom: {
      name: 'Wisdom',
      description: 'Perception and intuition. Important for sensing danger and divine magic.',
    },
    charisma: {
      name: 'Charisma',
      description: 'Force of personality. Affects persuasion and leadership.',
    },
  },
  races: {
    human: {
      name: 'Human',
      description: 'Versatile and ambitious, humans adapt to any situation.',
      strengths: 'Great social adaptability. Their charisma opens doors wherever they go.',
      weaknesses: 'No innate special abilities. They rely on wit and experience.',
      npcAttitude: 'Humans are welcome almost anywhere. NPCs treat them normally and without prejudice.',
      relations: {
        friendly: 'They get along well with all known races.',
        hostile: 'They have no declared racial enemies.',
      },
    },
    elf: {
      name: 'Elf',
      description: 'Graceful and long-lived, they excel in agility and their bond with magic.',
      strengths: 'Exceptional dexterity and keen senses. Naturally gifted for arcane magic.',
      weaknesses: 'Fragile constitution. Their air of superiority can generate rejection.',
      npcAttitude: 'Some NPCs respect them for their wisdom; others distrust their coldness and longevity.',
      relations: {
        friendly: 'Natural affinity with humans and halflings.',
        hostile: 'Historical tension with dwarves, rarely resolved.',
      },
    },
    dwarf: {
      name: 'Dwarf',
      description: 'Robust and tenacious, forged in the depths of the mountain.',
      strengths: 'Extraordinary physical resistance. Experts in craftsmanship, mining and melee combat.',
      weaknesses: 'Slow and lacking agility. Their stubbornness can complicate negotiations.',
      npcAttitude: 'Well regarded by merchants and warriors. Some NPCs consider them coarse or difficult to deal with.',
      relations: {
        friendly: 'Mutual respect with humans.',
        hostile: 'Ancient rivalry with elves.',
      },
    },
    halfling: {
      name: 'Halfling',
      description: 'Small and agile, surprisingly brave when the occasion demands it.',
      strengths: 'Natural stealth and prodigious luck. Excellent at tasks requiring precision.',
      weaknesses: 'Very limited strength. Their size can be an obstacle in brute force situations.',
      npcAttitude: 'Generally well received; their harmless appearance makes NPCs lower their guard.',
      relations: {
        friendly: 'Good relationship with humans and elves.',
        hostile: 'Some tension with dragonborn, who consider them too unpredictable.',
      },
    },
    dragonborn: {
      name: 'Dragonborn',
      description: 'Descendants of dragons, imposing and proud, with fire in their veins.',
      strengths: 'Brute strength and intimidating presence. Their dragon breath can change the course of combat.',
      weaknesses: 'Their appearance generates fear and distrust. Poor agility for moving unnoticed.',
      npcAttitude: 'Many NPCs fear or distrust them at first contact. Earning their trust requires more effort.',
      relations: {
        friendly: 'Some affinity with humans, who value their loyalty.',
        hostile: 'Halflings regard them with suspicion; the relationship is rarely comfortable.',
      },
    },
  },
  classes: {
    mage: {
      name: 'Mage',
      description: 'Masters the arcane arts to cast devastating or incredibly useful spells.',
    },
    paladin: {
      name: 'Paladin',
      description: 'Holy warrior combining martial strength with the charisma of a leader.',
    },
    barbarian: {
      name: 'Barbarian',
      description: 'Brute force and unstoppable fury in melee combat.',
    },
    rogue: {
      name: 'Rogue',
      description: 'Stealthy and agile, expert at picking locks and going unnoticed.',
    },
  },
  classRecommendation: {
    label: 'Works especially well with:',
  },
  stories: {
    gnomabandistas: {
      title: "The Monarch's Treasure",
      description: 'A theft in the royal treasury has shaken the city. Who dared to pull off a seemingly impossible heist?',
    },
    'vampire-masquerade': {
      title: 'Vampire: The Masquerade',
      description: 'A story of nocturnal intrigue and blood politics.',
    },
  },
  systems: {
    dnd: 'Dungeons & Dragons',
    vampire: 'Vampire: The Masquerade',
    cyberpunk: 'Cyberpunk',
    cthulhu: 'The Call of Cthulhu',
  },
  common: {
    newGame: 'New Game',
    continueGame: 'Continue',
    comingSoon: 'In development',
  },
  characterCreation: {
    /*DND*/
    title: 'Create your character',
    step1: 'Race & Sex',
    step2: 'Class',
    selectRace: 'Choose your race',
    selectSex: 'Choose your sex',
    selectClass: 'Choose your class',
    strengths: 'Strengths',
    weaknesses: 'Weaknesses',
    npcAttitude: 'How NPCs will see you',
    relations: 'Relations',
    recommendedClasses: 'Recommended classes',
    attributesPreview: 'Resulting attributes',
    next: 'Next',
    startGame: 'Begin adventure',
    back: 'Back',

    /*VAMPIRE*/

    selectClan: 'Choose your clan',
    selectPredatorType: 'Choose your predator type',
    step1Clan: 'Clan & Sex',
    step2Predator: 'Predator Type',
  },
  sex: {
    male: 'Male',
    female: 'Female',
  },

game: {
  continueLabel: 'Continue →',
  endLabel: '— The End —',
  backToMenu: 'Back to main menu',
  attributeLabel: 'Attribute',
  modifierLabel: 'Modifier',
  modifiersLabel: 'Modifiers',
  bonusLabel: 'bonus',
  totalLabel: 'Total',
  rollHint: 'Click the die to roll',
  combatHint: 'Click to fight',
  injuredLabel: '🩸 Wounded (-2)',
  rollOf: 'Roll of',
  combatLabel: 'Combat',
  targetLabel: 'Target',
  creditsAuthor: 'Original story by',
  creditsTranslator: 'Russian translation by',
  successesLabel: 'Successes',
  targetSuccessesLabel: 'Successes needed',
  poolRollHint: 'Tap to roll the dice',
  willpowerButton: 'Spend Willpower (reroll 1 die)',
  willpowerUsedLabel: "You've spent your Willpower for this story",
  diceWord: 'die',
  targetMinLabel: 'Minimum to avoid failure',
  targetCleanLabel: 'For a clean success',
},

  modifiers: {
    /*DND*/
    race: 'race',
    class: 'class',

    /*VAMPIRE*/
    clan: 'clan',
    predatorType: 'predator type',
  },

  /*VAMPIRE*/

  clans: {
    brujah: {
      name: 'Brujah',
      description: 'Warriors and rebels ruled by passion, prone to fury.',
      strengths: 'Notable physical strength and a fierce determination in combat.',
      weaknesses: 'Their temper is a ticking bomb; rage clouds their judgment easily.',
      npcAttitude: 'Other vampires see them as unstable but useful when something needs breaking.',
      relations: {
        friendly: 'They share a certain savage kinship with the Gangrel.',
        hostile: 'Their rivalry with the Ventrue is ancient and well known throughout the Masquerade.',
      },
    },
    toreador: {
      name: 'Toreador',
      description: 'Aesthetes obsessed with beauty, art, and human passion.',
      strengths: 'Magnetic charisma and an artistic sensibility that captivates mortals and immortals alike.',
      weaknesses: 'Their fascination with beauty can distract them at the worst possible moments.',
      npcAttitude: 'Welcome in any social circle; their charm opens doors other clans cannot.',
      relations: {
        friendly: 'They maintain a comfortable, elegant alliance with the Ventrue.',
        hostile: 'They openly despise the crudeness of the Nosferatu.',
      },
    },
    ventrue: {
      name: 'Ventrue',
      description: 'The aristocracy of the undead, born to rule and command.',
      strengths: 'Iron willpower and a natural instinct for leadership and politics.',
      weaknesses: 'Their rigid mindset makes them slow to adapt to the unexpected.',
      npcAttitude: 'Respected and feared in equal measure; expected to be in charge of any room they enter.',
      relations: {
        friendly: 'They see the Toreador as natural partners in the high society of the night.',
        hostile: 'Their mutual contempt with the Brujah is legendary within the Camarilla.',
      },
    },
    nosferatu: {
      name: 'Nosferatu',
      description: 'Disfigured by the Blood, they live hidden and trade in secrets.',
      strengths: 'Exceptional cunning and an information network no one else possesses.',
      weaknesses: 'Their monstrous appearance forces them into hiding; direct social contact is very difficult for them.',
      npcAttitude: 'No one sees them, but everyone fears what they might know.',
      relations: {
        friendly: 'They share a silent understanding with the Malkavians, fellow outcasts of vampire society.',
        hostile: "The Toreador's aesthetic rejection of them is mutual and deep.",
      },
    },
    malkavian: {
      name: 'Malkavian',
      description: 'Marked by a madness that distorts reality but also reveals hidden truths.',
      strengths: 'A disturbing intuition bordering on clairvoyance that unsettles their enemies.',
      weaknesses: 'Their fractured mind makes them unpredictable, even to themselves.',
      npcAttitude: 'They provoke a mix of fascination and fear; no one knows what to expect from them.',
      relations: {
        friendly: 'They find mutual understanding with the Nosferatu, both outcasts by their own nature.',
        hostile: 'They hold no fixed rivalries; their relationship with other clans is as unpredictable as they are.',
      },
    },
  },

  predatorTypes: {
    bagger: {
      name: 'Bagger',
      description: 'Feeds on blood bags stolen from hospitals or blood banks, avoiding direct contact.',
    },
    osteopath: {
      name: 'Osteopath',
      description: 'Poses as medical staff to draw blood under the pretense of treatment.',
    },
    siren: {
      name: 'Siren',
      description: 'Seduces their victims, turning feeding into a game of attraction and control.',
    },
    sandman: {
      name: 'Sandman',
      description: "Slips into their victims' dreams, feeding while they sleep unnoticed.",
    },
  },

};