export {}

const checkSubarraySum = (nums: number[], k: number): boolean => {
  for (let i = 1; i < nums.length; i++) {
    const elementCount = i + 1
    for (let j = 0; j <= nums.length - elementCount; j++) {
      const sum = nums
        .slice(j, j + elementCount)
        .reduce((acc, val) => acc + val, 0)

      if (sum % k === 0) return true
    }
  }

  return false
}
