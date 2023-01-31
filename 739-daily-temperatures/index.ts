const dailyTemperatures = (temperatures: number[]): number[] => {
  const answer: number[] = []
  let hottest = -Infinity

  for (let i = 0; i < temperatures.length; i++) {
    const rI = temperatures.length - i - 1
    const temperature = temperatures[rI]!

    if (hottest <= temperature) {
      hottest = temperature
      answer[rI] = 0
      continue
    }

    let nextIndex = rI + 1
    while (temperatures[nextIndex]! <= temperature) {
      nextIndex = answer[nextIndex]! + nextIndex
    }

    answer[rI] = nextIndex - rI
  }

  return answer
}

// monotonic stack
const dailyTemperatures2 = (temperatures: number[]): number[] => {
  // [index, temperature]
  const stack: [number, number][] = []
  const answer: number[] = []

  for (const [index, temperature] of temperatures.entries()) {
    while (stack.length > 0) {
      const top = stack.at(-1)

      if (top === undefined || top[1] >= temperature) break
      stack.pop()

      answer[top[0]] = index - top[0]
    }

    stack.push([index, temperature])
  }

  for (const [index] of stack) {
    answer[index] = 0
  }

  return answer
}
