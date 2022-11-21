export {}

// https://stackoverflow.com/questions/996505/lru-cache-implementation-in-javascript
class LRUCache {
  map = new Map<number, number>()

  constructor(public capacity: number) {}

  get(key: number): number {
    const item = this.map.get(key)

    if (item === undefined) return -1

    this.map.delete(key)
    this.map.set(key, item)

    return item
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key)
      this.map.set(key, value)
      return
    }

    const first = this.map.keys().next().value

    if (this.map.size === this.capacity) this.map.delete(first)

    this.map.set(key, value)
  }
}
