export const PREDATOR_TYPES = [
  {
    id: 'bagger',
    attributeModifiers: { wits: 2, charisma: -1 },
    recommendedClans: ['nosferatu', 'brujah'],
    combatAttribute: 'wits',
  },
  {
    id: 'osteopath',
    attributeModifiers: { manipulation: 2, strength: -1 },
    recommendedClans: ['ventrue', 'toreador'],
    combatAttribute: 'manipulation',
  },
  {
    id: 'siren',
    attributeModifiers: { charisma: 2, wits: -1 },
    recommendedClans: ['toreador', 'malkavian'],
    combatAttribute: 'charisma',
  },
  {
    id: 'sandman',
    attributeModifiers: { stamina: 2, manipulation: -1 },
    recommendedClans: ['nosferatu', 'malkavian'],
    combatAttribute: 'stamina',
  },
];