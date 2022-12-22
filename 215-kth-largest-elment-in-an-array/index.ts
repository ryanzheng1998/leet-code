// quick select
const findKthLargest = (nums: number[], k: number): number => {}

const partition = (
  pivotIndex: number,
  range: [number, number],
  nums: number[]
) => {
  const pivot = nums[pivotIndex]!

  // take pivot out
  nums[pivotIndex] = nums[range[1]]!

  let i = range[0]
  let j = range[1] - 1

  while (i < j) {
    const iVal = nums[i]!
    const jVal = nums[j]!

    if (iVal < pivot) {
      i++
      continue
    }

    if (jVal > pivot) {
      j--
      continue
    }

    nums[i] = jVal
    nums[j] = iVal
    i++
    j--
  }

  const theIndex = j // ??
}

// -----------------------------------------
// heap approach
// time complexity: k log n
const findKthLargest2 = (nums: number[], k: number): number => {
  // heapify O(n)
  // max heap
  for (let i = 0; i < nums.length; i++) {
    const rI = nums.length - 1 - i

    reorderHeap(rI, nums)
  }

  for (let i = 0; i < k - 1; i++) {
    deleteElementFromHeap(nums)
  }

  return nums[0]!
}

const deleteElementFromHeap = (heap: number[]): number | undefined => {
  const max = heap[0]
  const final = heap.pop()

  // no element to delete
  if (final === undefined) return

  // replace max with final
  heap[0] = final

  reorderHeap(0, heap)

  return max
}

const reorderHeap = (index: number, heap: number[]): void => {
  const current = heap[index]
  const leftChildIndex = index * 2 + 1
  const rightChildIndex = index * 2 + 2
  const leftChild = heap[leftChildIndex] ?? -Infinity
  const rightChild = heap[rightChildIndex] ?? -Infinity

  // if the order is right return void
  if (current === undefined) throw new Error('impossible')
  if (current > leftChild && current > rightChild) return

  // if the order is not right swap recursively
  const max = Math.max(leftChild, rightChild)
  const swapTarget = max === leftChild ? leftChildIndex : rightChildIndex

  heap[index] = max
  heap[swapTarget] = current

  return reorderHeap(swapTarget, heap)
}
