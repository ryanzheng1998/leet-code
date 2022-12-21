const topKFrequent = (nums: number[], k: number): number[] => {
  // count
  const map = new Map<number, number>()

  for (const num of nums) {
    const currentCount = map.get(num) ?? 0
    map.set(num, currentCount + 1)
  }

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0])
    .slice(0, k)
}
