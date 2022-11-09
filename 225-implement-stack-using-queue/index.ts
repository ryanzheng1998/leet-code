export {}

class MyStack {
  queue: number[] = []

  constructor() {}

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number | undefined {
    const queue2 = []
    while (this.queue.length > 1) {
      queue2.push(this.queue.shift()!)
    }

    const top = this.queue.shift()

    this.queue = queue2

    return top
  }

  top(): number | undefined {
    const top = this.pop()

    if (top !== undefined) {
      this.queue.push(top)
    }

    return top
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}
