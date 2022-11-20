export {}

const detectCycle = (head: ListNode | null): ListNode | null => {
  const weakSet = new WeakSet()

  while (head !== null) {
    if (weakSet.has(head)) return head
    weakSet.add(head)
    head = head.next
  }

  return null
}

// floyd's algorithm

const detectCycle2 = (head: ListNode | null): ListNode | null => {
  let tortoise = head
  let hare = head

  while (hare !== null && hare.next !== null) {
    hare = hare.next.next
    tortoise = tortoise!.next

    if (hare === tortoise) {
      let left = head!
      let right = hare!

      while (left !== right) {
        left = left.next!
        right = right.next!
      }

      return left
    }
  }

  return null
}
