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

const isBalanced = (root: TreeNode | null): boolean => {
  return helper(root).isBalanced
}

const helper = (
  root: TreeNode | null
): { isBalanced: boolean; height: number } => {
  if (root === null) return { isBalanced: true, height: 0 }
  const left = helper(root.left)
  if (left.isBalanced === false) return { isBalanced: false, height: 0 }
  const right = helper(root.right)
  if (right.isBalanced === false) return { isBalanced: false, height: 0 }

  const isBalanced = Math.abs(left.height - right.height) <= 1

  if (isBalanced === false) return { isBalanced: false, height: 0 }

  return {
    isBalanced: true,
    height: Math.max(left.height, right.height) + 1,
  }
}
