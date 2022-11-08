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

const maxDepth = (root: TreeNode | null): number => {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

const maxDepth2 = (root: TreeNode | null): number => {
  if (root === null) return 0
  let maxDepth = 0
  const stack = [{ node: root as TreeNode | null, height: 1 }]

  while (stack.length > 0) {
    const { node, height } = stack.pop()!

    if (node === null) continue

    stack.push(
      { node: node.left, height: height + 1 },
      { node: node.right, height: height + 1 }
    )

    maxDepth = Math.max(maxDepth, height)
  }

  return maxDepth
}

const maxDepth3 = (root: TreeNode | null): number => {
  if (root === null) return 0
  const queue = [root]
  let depth = 0

  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      const pushIfNotNull = (node: TreeNode | null) => {
        if (node !== null) {
          queue.push(node)
        }
      }
      pushIfNotNull(node.left)
      pushIfNotNull(node.right)
    }
    depth++
  }

  return depth
}
