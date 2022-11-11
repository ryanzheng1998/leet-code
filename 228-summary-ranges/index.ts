export {}

const summaryRanges = (nums: number[]): string[] => {
  const answer = []

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]!

    while (nums[i + 1] === nums[i]! + 1) i++

    const next = nums[i]!

    if (next === current) {
      answer.push(`${current}`)
      continue
    }

    answer.push(`${current}->${next}`)
  }

  return answer
}
