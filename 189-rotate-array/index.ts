export {}

const rotate = (nums: number[], k: number): void => {
  if (k === 0) return

  let previous = nums.at(-1)!
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i]!
    nums[i] = previous
    previous = temp
  }

  rotate(nums, k - 1)
}

const rotate2 = (nums: number[], k: number): void => {
  const cloneArray = [...nums]

  for (let i = 0; i < nums.length; i++) {
    const rotateIndex = (i + k) % nums.length
    nums[rotateIndex] = cloneArray[i]!
  }
}
