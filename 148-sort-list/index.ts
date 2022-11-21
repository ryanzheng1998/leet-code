export {}

class ListNode {
  constructor(public val: number, public next: ListNode | null) {}
}

// use native sorting algorithm
const sortList = (head: ListNode | null): ListNode | null => {
  const array = []

  while (head !== null) {
    array.push(head.val)
    head = head.next
  }

  array.sort((a, b) => b - a)

  let previousNode: null | ListNode = null

  for (const element of array) {
    const newNode = new ListNode(element, previousNode)
    previousNode = newNode
  }

  return previousNode
}
