const scenes = import.meta.glob('./*.png', { eager: true });

export const getSceneImage = (filename) => {
  const key = `./${filename}`;
  const mod = scenes[key];
  if (!mod) return null;
  return typeof mod === 'string' ? mod : mod.default ?? null;
};