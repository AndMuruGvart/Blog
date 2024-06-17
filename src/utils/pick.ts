// eslint-disable-next-line import/prefer-default-export
export const pick = <T extends object, K extends keyof T>(
  value: T,
  keys: K[],
): Pick<T, K> => {
  const result: Partial<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    result[key] = value[key];
  }

  return result as Pick<T, K>;
};
