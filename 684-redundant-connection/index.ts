export {}

const findRedundantConnection = (
  edges: [number, number][]
): [number, number] => {
  let answer: [number, number]

  const disjointSet = new DisjointSet()
  for (const [node1, node2] of edges) {
    if (disjointSet.connected(node1, node2)) {
      answer = [node1, node2]
    }

    disjointSet.union(node1, node2)
  }

  return answer!
}

class DisjointSet {
  map = new Map<number, { parent: number | undefined; size: number }>()

  constructor() {}

  find(n: number): number {
    const parent = this.map.get(n)

    if (
      parent === undefined ||
      parent.parent === undefined ||
      parent.parent === n
    )
      return n

    return this.find(parent.parent)
  }

  union(set1: number, set2: number) {
    if (this.connected(set1, set2)) return

    const setId1 = this.find(set1)
    const setId2 = this.find(set2)

    const set1Size = this.map.get(setId1)?.size ?? 1
    const set2Size = this.map.get(setId2)?.size ?? 1
    const totalSize = set1Size + set2Size

    const biggerSetId = set1Size >= set2Size ? setId1 : setId2
    const smallerSetId = set1Size < set2Size ? setId1 : setId2

    this.map.set(biggerSetId, {
      parent: biggerSetId,
      size: totalSize,
    })

    this.map.set(smallerSetId, {
      parent: biggerSetId,
      size: -1,
    })

    // tree flattening
    this.map.set(set1, {
      parent: biggerSetId,
      size: totalSize,
    })

    this.map.set(set2, {
      parent: biggerSetId,
      size: totalSize,
    })
  }

  connected(set1: number, set2: number) {
    const parent1 = this.find(set1)
    const parent2 = this.find(set2)

    return parent1 === parent2
  }
}
