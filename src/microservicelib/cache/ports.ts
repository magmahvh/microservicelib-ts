let portCache: number[] = []

export const ports = {
  set: (value: number[]) => {
    portCache = value
  },
  get: () => {
    return portCache
  }
}