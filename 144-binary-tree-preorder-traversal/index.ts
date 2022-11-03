export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (root === null) return []

  const rightResult = preorderTraversal(root.right)
  const leftResult = preorderTraversal(root.left)

  return [root.val, ...leftResult, ...rightResult]
}
