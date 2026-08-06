const images = import.meta.glob('./*.png', { eager: true });

export const getCharacterImage = (clanId, sex) => {
  const key = `./${clanId}_${sex}.png`;
  const mod = images[key];
  if (!mod) return null;
  return typeof mod === 'string' ? mod : mod.default ?? null;
};