import insertionSort from './InsertionSort.js'

class QuickSort {
  static sort (list, M) {
    this.#sort(list, 0, list.length - 1, M)
    return list
  }

  static #sort (list, low, high, M) {
    if (high<= low + M) {
      insertionSort(list, low, high)
      return
    }

    const partIndex = this.#partition(list, low, high, M)
    this.#sort(list, low, partIndex - 1, M)
    this.#sort(list, partIndex + 1, high, M)
  }

  static #partition (list, low, high, M) {
    const randomIndex = low + 1 + Math.floor(Math.random() * (high - low))
    ;[list[low], list[randomIndex]] = [list[randomIndex], list[low]]
    if (low >= high) return

    let cur = list[low]
    let i = low
    let j = high + 1
    while (true) {
      while (list[++ i] < cur) {
        if (i === high) break
      }
      while (list[-- j] > cur) {
        if (j === low) break
      }
      if (i >= j) break
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    ;[list[low], list[j]] = [list[j], list[low]]
    return j
  }
}

export default QuickSort