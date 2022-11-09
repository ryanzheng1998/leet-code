export {}

const diffWaysToCompute = (expression: string): number[] => {
  if (expression.length === 0) return []
  if (expression.length <= 2) return [Number(expression)]

  const result: number[] = []

  for (const [i, char] of expression.split('').entries()) {
    if (char === '+' || char === '-' || char === '*') {
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i + 1))

      for (const leftNum of left) {
        for (const rightNum of right) {
          if (char === '+') result.push(leftNum + rightNum)
          if (char === '-') result.push(leftNum - rightNum)
          if (char === '*') result.push(leftNum * rightNum)
        }
      }
    }
  }

  return result
}
