export {}
const canFinish = (
  numCourses: number,
  prerequisites: [number, number][]
): boolean => {
  // build graph
  const map = new Map<number, [number]>()

  for (const [from, to] of prerequisites) {
    const previous = map.get(from)
    if (previous === undefined) {
      map.set(from, [to])
      continue
    }

    previous.push(to)
  }

  // check cycle
  //   const visited = new Set()
  for (const [from, nodes] of map.entries()) {
    // if (visited.has(from)) continue
    for (const node of nodes) {
      // dfs
      const visited2 = new Set()
      const stack = [node]

      while (stack.length > 0) {
        const current = stack.pop()!

        // if (visited.has(current)) continue
        if (visited2.has(current)) return false
        visited2.add(current)

        const nextNodes = map.get(current)

        if (nextNodes === undefined) continue

        stack.push(...nextNodes)
      }
    }
  }

  return true
}
