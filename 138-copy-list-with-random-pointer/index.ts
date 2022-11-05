export {}

class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

const copyRandomList = (head: Node | null): Node | null => {
  const weakMap = new WeakMap<Node, Node>()

  const originalHead = head

  while (head !== null) {
    weakMap.set(head, new Node(head.val))
    head = head.next
  }

  head = originalHead

  while (head !== null) {
    const newNode = weakMap.get(head)
    if (newNode === undefined) throw new Error('Impossible')
    newNode.next = head.next === null ? null : weakMap.get(head.next) ?? null
    newNode.random =
      head.random === null ? null : weakMap.get(head.random) ?? null
    head = head.next
  }

  return originalHead === null ? null : weakMap.get(originalHead) ?? null
}
