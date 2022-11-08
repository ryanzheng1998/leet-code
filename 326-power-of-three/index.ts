export {}

const isPowerOfThree = (n: number): boolean => {
  if (n <= 0) return false
  if (n === 1) return true
  const remain = n % 3

  if (remain !== 0) return false

  return isPowerOfThree(n / 3)
}
