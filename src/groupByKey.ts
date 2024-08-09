type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const value = item[key];

    if (typeof value === 'string' || typeof value === 'number') {
      if (!acc[value]) {
        acc[value] = [];
      }

      acc[value].push(item);
    }

    return acc;
  }, {} as GroupsMap<T>);
}
