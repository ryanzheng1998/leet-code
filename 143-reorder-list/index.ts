export {}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const reorderList = (head: ListNode | null): void => {
  const nodes: ListNode[] = []
  const originalHead = head

  while (head !== null) {
    nodes.push(head)
    head = head.next
  }

  head = originalHead

  for (let i = 0; i * 2 < nodes.length; i++) {
    const node = nodes[i]
    const reverseNode = nodes[nodes.length - i - 1]
    node.next = reverseNode
    reverseNode.next = nodes[i + 1]
  }

  const lastNodeIndex = Math.floor(nodes.length / 2)
  const lastNode = nodes[lastNodeIndex]

  lastNode.next = null
}

const reorderList2 = (head: ListNode | null): void => {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next
  }

  const middlePoint = slow

  // reverse the second half
  let prev = null
  let current = middlePoint
  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  let secondHead = prev

  // merge two lists
  while (head !== null && head?.next !== middlePoint) {
    const next = head.next
    head!.next = secondHead
    head = next

    const secondNext = secondHead!.next
    secondHead!.next = head
    secondHead = secondNext
  }

  if (head !== null && head.next !== null) {
    head.next = secondHead
  }
}
