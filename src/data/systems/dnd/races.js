export const RACES = [
  {
    id: 'human',
    attributeModifiers: { constitution: 1, charisma: 1 },
    recommendedClasses: ['paladin', 'mage'],
    relations: { friendly: ['elf', 'halfling', 'dwarf', 'dragonborn'], hostile: [] },
  },
  {
    id: 'elf',
    attributeModifiers: { dexterity: 2, constitution: -1 },
    recommendedClasses: ['mage', 'rogue'],
    relations: { friendly: ['human', 'halfling'], hostile: ['dwarf'] },
  },
  {
    id: 'dwarf',
    attributeModifiers: { constitution: 2, dexterity: -1 },
    recommendedClasses: ['barbarian', 'paladin'],
    relations: { friendly: ['human'], hostile: ['elf'] },
  },
  {
    id: 'halfling',
    attributeModifiers: { dexterity: 2, strength: -1 },
    recommendedClasses: ['rogue', 'mage'],
    relations: { friendly: ['human', 'elf'], hostile: [] },
  },
  {
    id: 'dragonborn',
    attributeModifiers: { strength: 2, charisma: 1, dexterity: -1 },
    recommendedClasses: ['barbarian', 'paladin'],
    relations: { friendly: ['human'], hostile: ['halfling'] },
  },
];