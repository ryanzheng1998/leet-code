export {}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const reverseList = (head: null | ListNode): null | ListNode => {
  let previousNode: ListNode | null = null
  while (head !== null) {
    const nextNode = head.next
    head.next = previousNode
    previousNode = head
    head = nextNode
  }

  return previousNode
}
