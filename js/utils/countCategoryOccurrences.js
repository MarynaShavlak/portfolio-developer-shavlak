export function countCategoryOccurrences(categoryArrays) {
  const counts = {};

  categoryArrays.forEach((arr) => {
    const uniqueItems = new Set(arr);
    uniqueItems.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1;
    });
  });

  return counts;
}
