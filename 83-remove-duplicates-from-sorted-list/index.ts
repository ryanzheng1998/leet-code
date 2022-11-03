class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  const originalHead = head

  while (head !== null) {
    const nextNode = head.next

    if (nextNode === null) break

    if (head.val === nextNode.val) {
      head.next = nextNode.next
      continue
    }

    head = nextNode
  }

  return originalHead
}
