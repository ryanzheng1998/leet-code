const findSmallestSetOfVertices = (
  n: number,
  edges: [number, number][]
): number[] => {
  const visitable = new Set(edges.map((x) => x[1]))

  let answer: number[] = []

  for (let i = 0; i < n; i++) {
    if (visitable.has(i)) continue

    answer.push(i)
  }

  return answer
}
