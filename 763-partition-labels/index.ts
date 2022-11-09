export {}

const partitionLabels = (s: string): number[] => {
  const map = new Map<string, number>()

  for (const [i, char] of s.split('').entries()) {
    map.set(char, i)
  }

  const result: number[] = []
  let start = 0
  let currentMax = 0

  for (const [i, char] of s.split('').entries()) {
    const lastIndex = map.get(char)
    if (lastIndex === undefined) throw new Error('Impossible')

    currentMax = Math.max(currentMax, lastIndex)

    if (i === currentMax) {
      result.push(currentMax + 1 - start)
      start = currentMax + 1
    }
  }

  return result
}
