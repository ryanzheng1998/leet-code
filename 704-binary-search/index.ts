export {}

const search = (nums: number[], target: number): number => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2)
    const middleElement = nums[middleIndex]!

    if (middleElement === target) {
      return middleIndex
    }

    if (middleElement > target) {
      right = middleIndex - 1
      continue
    }

    left = middleIndex + 1
  }

  return -1
}
