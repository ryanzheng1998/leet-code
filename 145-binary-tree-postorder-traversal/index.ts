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

const postorderTraversal = (root: TreeNode | null): number[] => {
  if (root === null) return []

  const rightResult = postorderTraversal(root.right)
  const leftResult = postorderTraversal(root.left)

  return [...leftResult, ...rightResult, root.val]
}
