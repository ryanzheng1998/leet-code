export {}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const removeElements = (
  head: ListNode | null,
  val: number
): ListNode | null => {
  const dummyHead = new ListNode(0, head)

  let current = dummyHead
  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next
      continue
    }

    current = current.next
  }

  return dummyHead.next
}
