export {}

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false
  const map = new Map()

  for (const char of s) {
    const count = map.get(char) ?? 0
    map.set(char, count + 1)
  }

  for (const char of t) {
    const count = map.get(char) ?? 0
    if (count === 0) return false
    map.set(char, count - 1)
  }

  return true
}
