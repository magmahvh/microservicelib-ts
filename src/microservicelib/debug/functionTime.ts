export const functionTime = {
  start: () => {
    return new Date().getTime()
  },

  end: (start: number) => {
    return new Date().getTime() - start
  }
}