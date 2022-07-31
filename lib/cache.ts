
class Cache<T> {
  private cache: Map<string, T>

  constructor() {
    this.cache = new Map()
  }

  public get(id: string): T | undefined {
    return this.cache.get(id)
  }

  public set(id: string, t: T): void {
    this.cache.set(id, t)
  }

  public clear(): void {
    this.cache.clear()
  }

  public values(): T[] {
    return [...this.cache.values()]
  }

  public keys(): string[] {
    return [...this.cache.keys()]
  }
}

export default Cache
