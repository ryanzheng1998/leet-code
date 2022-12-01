const guess = (n: number): -1 | 0 | 1 => {
  return -1
}

const guessNumber = (n: number): number => {
  let left = 1
  let right = n

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const guessResult = guess(middle)

    if (guessResult === 0) return middle

    if (guessResult === 1) {
      left = middle + 1
      continue
    }

    right = middle - 1
  }

  throw new Error('impossible')
}
