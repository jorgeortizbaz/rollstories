const npcs = import.meta.glob('./*.png', { eager: true });

export const getNpcImage = (filename) => {
  const key = `./${filename}`;
  const mod = npcs[key];
  if (!mod) return null;
  return typeof mod === 'string' ? mod : mod.default ?? null;
};