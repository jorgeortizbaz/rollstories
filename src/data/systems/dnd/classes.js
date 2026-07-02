export const CLASSES = [
  {
    id: 'mage',
    attributeModifiers: { intelligence: 2, strength: -1 },
    recommendedRaces: ['elf', 'human'],
    combatAttribute: 'intelligence',
  },
  {
    id: 'paladin',
    attributeModifiers: { strength: 1, charisma: 1, intelligence: -1 },
    recommendedRaces: ['dragonborn', 'human'],
    combatAttribute: 'strength',
  },
  {
    id: 'barbarian',
    attributeModifiers: { strength: 2, intelligence: -1 },
    recommendedRaces: ['dwarf', 'dragonborn'],
    combatAttribute: 'strength',
  },
  {
    id: 'rogue',
    attributeModifiers: { dexterity: 2, wisdom: -1 },
    recommendedRaces: ['elf', 'halfling'],
    combatAttribute: 'dexterity',
  },
];