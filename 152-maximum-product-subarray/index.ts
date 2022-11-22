export {}

const maxProduct = (nums: number[]): number => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums.at(0) ?? 0
  const zeroIndex = nums.findIndex((x) => x === 0)

  if (zeroIndex !== -1) {
    const left = maxProduct(nums.slice(0, zeroIndex))
    const right = maxProduct(nums.slice(zeroIndex + 1))

    return Math.max(left, right, 0)
  }

  const negativeCount = nums.filter((x) => x < 0).length

  if (negativeCount % 2 === 0) {
    return nums.reduce((acc, val) => acc * val, 1)
  }

  const leftMostNegativeIndex = nums.findIndex((x) => x < 0)
  const rightMostNegativeIndex =
    nums.length -
    1 -
    nums
      .slice()
      .reverse()
      .findIndex((x) => x < 0)

  const leftRightNegativeToZero = [
    ...nums.slice(0, leftMostNegativeIndex),
    0,
    ...nums.slice(leftMostNegativeIndex + 1),
    0,
    ...nums.slice(0, rightMostNegativeIndex),
    0,
    ...nums.slice(rightMostNegativeIndex + 1),
  ]

  return maxProduct(leftRightNegativeToZero)
}

//
const maxProduct2 = (nums: number[]): number => {
  if (nums.length === 0) return 0

  let answer = nums.at(0)!
  let maxSoFar = nums.at(0)!
  let minSoFar = nums.at(0)!

  for (const num of nums.slice(1)) {
    const possibleOutCome = [num, maxSoFar * num, minSoFar * num]
    maxSoFar = Math.max(...possibleOutCome)
    minSoFar = Math.min(...possibleOutCome)

    answer = Math.max(maxSoFar, answer)
  }

  return answer
}
