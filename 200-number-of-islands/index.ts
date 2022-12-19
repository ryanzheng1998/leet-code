const numIslands = (grid: string[][]): number => {
  let answer = 0

  for (const [i, row] of grid.entries()) {
    for (const [j, element] of row.entries()) {
      if (element === '1') {
        answer++

        const stack: [number, number][] = [[i, j]]

        while (stack.length > 0) {
          const [cI, cJ] = stack.pop()!

          grid[cI]![cJ] = '2'

          const allDirection: [number, number][] = [
            [cI + 1, cJ],
            [cI - 1, cJ],
            [cI, cJ + 1],
            [cI, cJ - 1],
          ]

          allDirection.forEach(([nI, nJ]) => {
            if (grid[nI]?.[nJ] === '1') {
              stack.push([nI, nJ])
            }
          })
        }
      }
    }
  }

  return answer
}
