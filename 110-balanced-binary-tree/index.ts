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

  return helper(root).isBalanced
}

const isBalanced2 = (root: TreeNode | null): boolean => {
  if (root === null) return true
  const memo = new Map<TreeNode, number>()

  const getDepth = (
    node: TreeNode | null,
    memo: Map<TreeNode, number>
  ): number => {
    if (!node) {
      return 0
    }
    if (memo.has(node)) {
      return memo.get(node)!
    }
    const depth =
      Math.max(getDepth(node.left, memo), getDepth(node.right, memo)) + 1
    memo.set(node, depth)
    return depth
  }

  const leftDepth = getDepth(root.left, memo)
  const rightDepth = getDepth(root.right, memo)

  return (
    Math.abs(leftDepth - rightDepth) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
