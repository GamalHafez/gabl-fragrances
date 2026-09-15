export const getMainProductVariant = <T extends { sizeML: number }>(
  variants: readonly T[],
): T | null => {
  if (variants.length === 0) return null;
  return variants.find((variant) => variant.sizeML !== 5) ?? variants[0];
};
