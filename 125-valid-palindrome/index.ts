const isPalindrome = (s: string) => {
  const cleanS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  for (let i = 0; i * 2 < cleanS.length; i++) {
    const reverseI = cleanS.length - 1 - i

    if (cleanS[i] !== cleanS[reverseI]) return false
  }

  return true
}
