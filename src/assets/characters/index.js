const images = import.meta.glob('./*.png', { eager: true });

export const getCharacterImage = (raceId, sex, classId = null) => {
  const key = classId
    ? `./${raceId}_${sex}_${classId}.png`
    : `./${raceId}_${sex}.png`;
  const mod = images[key];
  if (!mod) return null;
  return typeof mod === 'string' ? mod : mod.default ?? null;
};