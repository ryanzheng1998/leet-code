export {}

const searchMatrix = (matrix: number[][], target: number): boolean => {
  let left = 0
  let right = matrix[0]!.length - 1

  while (left <= right) {
    const middle = Math.floor((right + left) / 2)
    const element = matrix[0]![middle]!

    if (element === target) return true

    if (element > target) {
      right = middle - 1
      continue
    }

    left = middle + 1
  }

  const rowIndex = right
  let columnStartingPoint = 0

  for (let i = 0; i < rowIndex; i++) {
    const reverseI = rowIndex - i

    let left = columnStartingPoint
    let right = matrix.length - 1

    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      const element = matrix[middle]![reverseI]!

      if (element === target) return true

      if (element > target) {
        right = middle - 1
        continue
      }

      left = middle + 1
    }

    columnStartingPoint = right
  }

  return false
}
