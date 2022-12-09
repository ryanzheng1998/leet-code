const rob = (nums: number[]): number => {
  let maxProfit
  let previousMaxProfit

  for (const num of nums) {
    const temp = maxProfit

    maxProfit = Math.max((previousMaxProfit ?? 0) + num, maxProfit ?? 0)

    previousMaxProfit = temp
  }

  return maxProfit ?? 0
}
