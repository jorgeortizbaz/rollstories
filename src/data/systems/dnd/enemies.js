export const ENEMIES = {
  guardia_tension: {
    attributes: { strength: 12, dexterity: 11 },
    primaryAttribute: 'strength',
    extraModifier: 0,
  },
  puerto_combate: {
    attributes: { strength: 13, dexterity: 13 },
    primaryAttribute: 'strength',
    extraModifier: -1,
  },
  escondite_combate_gnomos: {
    attributes: { strength: 10, intelligence: 14 },
    primaryAttribute: 'intelligence',
    extraModifier: 0,
  },
  escondite_directo: {
    attributes: { strength: 10, intelligence: 14 },
    primaryAttribute: 'intelligence',
    extraModifier: 0,
  },
  escondite_capitan: {
    attributes: { strength: 10, intelligence: 14 },
    primaryAttribute: 'intelligence',
    extraModifier: 0,
  },
  encuentro_dabiz_capitan: {
    attributes: { strength: 15, charisma: 14 },
    primaryAttribute: 'strength',
    extraModifier: -1,
  },
  combate_final: {
    attributes: { strength: 16, dexterity: 15 },
    primaryAttribute: 'strength',
    extraModifier: -2,
  },
  persecucion: {
    attributes: { strength: 13, dexterity: 14 },
    primaryAttribute: 'dexterity',
    extraModifier: -1,
  },
};

export const getEnemyModifier = (enemyId) => {
  const enemy = ENEMIES[enemyId];
  if (!enemy) return 0;
  const value = enemy.attributes[enemy.primaryAttribute] ?? 10;
  const bonus = Math.floor((value - 10) / 2);
  return -bonus + (enemy.extraModifier ?? 0);
};