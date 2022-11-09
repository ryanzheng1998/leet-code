export {}

const isIsomorphic = (s: string, t: string): boolean => {
  const map = new Map()
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]! // i < s.length
    const charT = t[i]! // s.length === t.length

    if (!map.has(charS)) {
      map.set(charS, charT)
      if (set.has(charT)) return false
      set.add(charT)
      continue
    }

    if (map.get(charS) !== charT) return false
  }

  return true
}
