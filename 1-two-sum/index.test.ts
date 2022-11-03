const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map()

  for (const [key, num] of nums.entries()) {
    const diff = target - num

    if (map.has(diff)) {
      return [map.get(diff), key]
    }

    map.set(num, key)
  }

  return []
}
