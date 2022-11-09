export {}

// dp
const coinChange = (coins: number[], amount: number): number => {
  const dp = new Map<number, number>()

  const helper = (amount: number): number => {
    if (amount === 0) return 0
    if (dp.has(amount)) return dp.get(amount)!

    let minCount = Infinity
    for (const coin of coins) {
      if (coin > amount) continue

      const count = helper(amount - coin) + 1
      minCount = Math.min(count, minCount)
    }

    dp.set(amount, minCount)
    return minCount
  }

  const result = helper(amount)

  return result === Infinity ? -1 : result
}

const coinChange2 = (coins: number[], amount: number): number => {
  const dp: number[] = [0]

  for (const coin of coins) {
    dp[coin] = 1
  }

  for (let i = 0; i <= amount; i++) {
    if (dp[i] !== undefined) continue

    let minCount = Infinity

    for (const coin of coins) {
      const diff = i - coin
      if (diff <= 0) continue
      minCount = Math.min(minCount, (dp[diff] ?? Infinity) + 1)
    }

    if (minCount !== Infinity) {
      dp[i] = minCount
    }
  }

  return dp[amount] ?? -1
}
