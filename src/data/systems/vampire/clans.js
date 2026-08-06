export const CLANS = [
  {
    id: 'brujah',
    attributeModifiers: { strength: 1, resolve: -1 },
    recommendedPredatorTypes: ['bagger', 'osteopath'],
    relations: { friendly: ['gangrel'], hostile: ['ventrue'] },
  },
  {
    id: 'toreador',
    attributeModifiers: { charisma: 1, stamina: -1 },
    recommendedPredatorTypes: ['siren', 'osteopath'],
    relations: { friendly: ['ventrue'], hostile: ['nosferatu'] },
  },
  {
    id: 'ventrue',
    attributeModifiers: { resolve: 1, wits: -1 },
    recommendedPredatorTypes: ['osteopath', 'siren'],
    relations: { friendly: ['toreador'], hostile: ['brujah'] },
  },
  {
    id: 'nosferatu',
    attributeModifiers: { wits: 1, charisma: -1 },
    recommendedPredatorTypes: ['bagger', 'sandman'],
    relations: { friendly: ['malkavian'], hostile: ['toreador'] },
  },
  {
    id: 'malkavian',
    attributeModifiers: { manipulation: 1, resolve: -1 },
    recommendedPredatorTypes: ['sandman', 'siren'],
    relations: { friendly: ['nosferatu'], hostile: [] },
  },
];