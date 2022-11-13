export {}

class TreeNode {
  constructor(
    public val: number,
    public right: TreeNode | null,
    public left: TreeNode | null
  ) {}
}

const rightSideView = (root: TreeNode | null): number[] => {
  const answer: number[] = []
  const queue: (TreeNode | null)[] = [root]

  while (queue.length !== 0) {
    const queueLength = queue.length
    let rightestValue: undefined | number = undefined

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift()

      if (node === null || node === undefined) continue

      rightestValue = node.val

      queue.push(node.left)
      queue.push(node.right)
    }

    if (rightestValue !== undefined) {
      answer.push(rightestValue)
    }
  }

  return answer
}
