export {}

const findJudge = (n: number, trust: [number, number][]): number => {
  if (n === 1) return 1
  // from https://leetcode.com/problems/find-the-town-judge/submissions/862440010/
  // Treat trust as a Directed Graph
  // --> Node such that (degree_in - degree_out) == (n - 1) would be the Judge
  const count = new Map<number, number>()

  for (const [from, to] of trust) {
    const currentFromCount = count.get(from) ?? 0
    const currentToCount = count.get(to) ?? 0

    count.set(from, currentFromCount - 1)
    count.set(to, currentToCount + 1)
  }

  for (const [key, value] of count) {
    if (value === n - 1) return key
  }

  return -1
}
