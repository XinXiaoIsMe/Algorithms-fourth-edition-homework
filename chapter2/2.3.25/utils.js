export function generateRandomArray (start, end, len) {
  return Array.from(
    { length: len },
    () => start + Math.floor(Math.random() * (end - start + 1))
  )
}