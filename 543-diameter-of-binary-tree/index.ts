export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  const { diameter } = helper(root)

  return diameter
}

const helper = (
  root: TreeNode | null
): { diameter: number; longestPath: number } => {
  if (root === null) return { diameter: 0, longestPath: 0 }

  const left = helper(root.left)
  const right = helper(root.right)

  const longestPath = Math.max(left.longestPath, right.longestPath) + 1

  const newDiameter = Math.max(
    left.diameter,
    right.diameter,
    left.longestPath + right.longestPath
  )

  return { diameter: newDiameter, longestPath }
}
