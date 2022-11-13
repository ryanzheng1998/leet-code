export {}

const fizzBuzz = (n: number): string[] => {
  const answer: string[] = []

  for (let i = 0; i < n; i++) {
    const oneIndexed = i + 1

    if (oneIndexed % 15 === 0) {
      answer.push('FizzBuzz')
      continue
    }

    if (oneIndexed % 5 === 0) {
      answer.push('Buzz')
      continue
    }

    if (oneIndexed % 3 === 0) {
      answer.push('Fizz')
      continue
    }

    answer.push(`${oneIndexed}`)
  }

  return answer
}
