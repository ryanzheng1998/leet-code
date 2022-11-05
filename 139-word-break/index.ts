export {}

const wordBreak = (s: string, wordDict: string[]): boolean => {
  const wordMap = new Map<number, Set<string>>()
  // wordDict to set
  for (const word of wordDict) {
    const set = wordMap.get(word.length)
    if (set === undefined) {
      wordMap.set(word.length, new Set([word]))
      continue
    }
    set.add(word)
  }

  return wordBreak2(s, wordMap)
}

const wordBreak2 = (s: string, wordDict: Map<number, Set<string>>): boolean => {
  for (const [length, set] of wordDict) {
    const subString = s.slice(0, length)
    if (set.has(subString)) {
      if (s.length === length) return true
      const remainString = s.slice(length)
      const result = wordBreak2(remainString, wordDict)
      if (result) return true
    }
  }

  return false
}
