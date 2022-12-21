const canVisitAllRooms = (rooms: number[][]): boolean => {
  const visited = new Set()

  const stack = [0]

  while (stack.length > 0) {
    const current = stack.pop()!
    if (visited.has(current)) continue
    visited.add(current)
    const keys = rooms[current]!
    stack.push(...keys)
  }

  return visited.size === rooms.length
}
