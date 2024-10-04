export const getMaxLength = (
    array: Array<unknown>,
): number => array.reduce<number>((length, current) => `${ current }`.length > length ? `${ current }`.length : length, 0);

export const toKebabCase = (
    value: string,
): string => value.trim().toLowerCase().replaceAll(' ', '-');
