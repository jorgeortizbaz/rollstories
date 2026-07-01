export default {
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
  },
  characterCreation: {
    title: 'Create your character',
    step1: 'Race & Sex',
    step2: 'Class',
    selectRace: 'Choose your race',
    selectSex: 'Choose your sex',
    selectClass: 'Choose your class',
    strengths: 'Strengths',
    weaknesses: 'Weaknesses',
    npcAttitude: 'How NPCs will see you',
    relations: 'Racial relations',
    recommendedClasses: 'Recommended classes',
    attributesPreview: 'Resulting attributes',
    next: 'Next',
    startGame: 'Begin adventure',
    back: 'Back',
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
  },

};