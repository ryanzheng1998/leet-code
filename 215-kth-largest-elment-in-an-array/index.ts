// quick select
const findKthLargest = (nums: number[], k: number): number => {
  // nums.length - k turn the problem from `find kth largest` to `find kth smallest` with zero
  return quickSelect(nums, nums.length - k)
}

const quickSelect = (nums: number[], tragetIndex: number): number => {
  let i = 0
  let j = nums.length - 1
  let pivotOrder = -1

  while (pivotOrder !== tragetIndex) {
    const newPivotOrder = partition(nums, i, j)

    const resultOnTheLeft = newPivotOrder > tragetIndex
    i = resultOnTheLeft ? i : newPivotOrder + 1
    j = resultOnTheLeft ? newPivotOrder - 1 : j
    pivotOrder = newPivotOrder
  }

  return nums[pivotOrder]!
}

const quickSelect2 = (nums: number[], targetIndex: number): number => {
  return quickSelect2Helper(nums, targetIndex, 0, nums.length - 1)
}

const quickSelect2Helper = (
  nums: number[],
  targetIndex: number,
  lowerBound: number,
  upperBound: number
): number => {
  const pivotOrder = partition(nums, lowerBound, upperBound)

  if (pivotOrder === targetIndex) return nums[pivotOrder]!

  const resultOnTheLeft = pivotOrder > targetIndex
  const newLowerBound = resultOnTheLeft ? lowerBound : pivotOrder + 1
  const newUpperBound = resultOnTheLeft ? pivotOrder - 1 : upperBound

  return quickSelect2Helper(nums, targetIndex, newLowerBound, newUpperBound)
}

// the algorithm said you can choose the pivot point randomly
// so I choose the first element every time
const partition = (
  nums: number[],
  lowerBound: number,
  upperBound: number
): number => {
  const pivot = nums[lowerBound]
  let i = lowerBound + 1
  let j = upperBound

  if (pivot === undefined) return -1

  while (i <= j) {
    const valueI = nums[i]!
    const valueJ = nums[j]!

    if (valueI < pivot) {
      i++
      continue
    }

    if (valueJ >= pivot) {
      j--
      continue
    }

    nums[i] = valueJ
    nums[j] = valueI
    i++
    j--
  }

  nums[lowerBound] = nums[j]!
  nums[j] = pivot

  return j
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
