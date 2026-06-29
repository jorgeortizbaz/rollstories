export const CLASSES = [
  {
    id: 'mage',
    attributeModifiers: {
      intelligence: 2,
      strength: -1,
    },
    recommendedRaces: ['elf', 'human'],
  },
  {
    id: 'paladin',
    attributeModifiers: {
      strength: 1,
      charisma: 1,
      intelligence: -1,
    },
    recommendedRaces: ['dragonborn', 'human'],
  },
  {
    id: 'barbarian',
    attributeModifiers: {
      strength: 2,
      intelligence: -1,
    },
    recommendedRaces: ['dwarf', 'dragonborn'],
  },
  {
    id: 'rogue',
    attributeModifiers: {
      dexterity: 2,
      wisdom: -1,
    },
    recommendedRaces: ['elf', 'halfling'],
  },
];