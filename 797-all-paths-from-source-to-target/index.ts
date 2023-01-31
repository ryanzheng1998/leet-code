// dp with memo
const allPathsSourceTarget = (graph: number[][]): number[][] => {
  const memo = <T, U>(fn: (a: U) => T): typeof fn => {
    const cache = new Map<U, T>()

    return (a: U) => {
      if (cache.has(a)) return cache.get(a)!

      const result = fn(a)
      cache.set(a, result)
      return result
    }
  }

  const helper = memo((start: number): number[][] => {
    const nextNodes = graph[start]!

    if (start === graph.length - 1) return [[start]]

    const result = nextNodes
      .flatMap(node => helper(node))
      .map(x => [start, ...x])

    return result
  })

  return helper(0)
}

// backtracking
// https://leetcode.com/problems/all-paths-from-source-to-target/submissions/888457242/
const allPathsSourceTarget3 = (graph: number[][]): number[][] => {
  const result: number[][] = []
  const target = graph.length - 1

  const helper = (start: number, pathSoFar: number[]) => {
    if (start === target) {
      result.push(pathSoFar)
      return
    }

    const nextNodes = graph.at(start)!

    for (const node of nextNodes) {
      helper(node, [...pathSoFar, node])
    }
  }

  helper(0, [0])

  return result
}

// dp
const allPathsSourceTarget2 = (graph: number[][]): number[][] => {
  return helper2(graph, 0)
}

const helper2 = (graph: number[][], start: number): number[][] => {
  const nextNodes = graph[start]!

  if (start === graph.length - 1) return [[start]]

  const result = nextNodes
    .flatMap(node => helper2(graph, node))
    .map(x => [start, ...x])

  return result
}
