const symbols = import.meta.glob('./*.png', { eager: true });

export const getClanSymbol = (clanId) => {
  const key = `./${clanId}.png`;
  const mod = symbols[key];
  if (!mod) return null;
  return typeof mod === 'string' ? mod : mod.default ?? null;
};