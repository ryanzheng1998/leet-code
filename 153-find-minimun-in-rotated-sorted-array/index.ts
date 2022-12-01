export {}

const findMin = (nums: number[]): number => {
  // use binary search to find the pivot point
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const rightElement = nums[right]!
    const middleIndex = Math.floor((left + right) / 2)
    const middleElement = nums[middleIndex]!

    if (middleElement > rightElement) {
      left = middleIndex + 1
      continue
    }

    right = middleIndex
  }

  return nums[left]!
}
