class MinStack {
  stack: { minSoFar: number; val: number }[] = []

  constructor() {}

  push(val: number): void {
    const minSoFar = Math.min(this.getMin(), val)

    this.stack.push({ minSoFar, val })
  }

  pop(): void {
    this.stack.pop()
  }

  // Methods pop, top and getMin operations will always be called on non-empty stacks.
  top(): number {
    return this.stack.at(-1)!.val
  }

  getMin(): number {
    return this.stack.at(-1)?.minSoFar ?? Infinity
  }
}
