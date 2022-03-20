class QuickSort {
  static main (start, end, len) {
    const list = this.#generateRandomArray(start, end, len)
    console.log('排序前：', list)
    this.sort(list)
    console.log('排序后：', list)
    console.log('是否有序：', this.#isSorted(list))
  }

  static sort (list) {
    this.#sort(list, 0, list.length - 1)
  }

  static #sort (list, low, high) {
    if (low >= high) return
    const partIndex = this.#partition(list, low, high)
    this.#sort(list, low, partIndex - 1)
    this.#sort(list, partIndex + 1, high)
  }

  static #partition (list, low, high) {
    // 随机取出 [low + 1, high] 范围内的一个值和 low 位置的元素交换
    // 防止极端情况发生：例如，如果数组本身有序，每次调用 #partition
    // 后数组被分成空数组和长度减一的子数组，这样造成算法性能退化成了O(N*2)
    // 理想的情况应该是每次 #partition 后数组被平分，这样复杂度为O(NlgN)
    const randomIndex = low + Math.floor(Math.random() * (high - low)) + 1
    ;[list[randomIndex], list[low]] = [list[low], list[randomIndex]]

    let i = low
    let j = high + 1
    const cur = list[low]
    while (true) {
      while (list[++ i] < cur) {
        if (i === high) break
      }
      while (list[-- j] > cur) {
        if (j === low) break
      }
      if (i >= j) break
      ;[list[j], list[i]] = [list[i], list[j]]
    }
    ;[list[j], list[low]] = [list[low], list[j]]
    return j
  }

  static #generateRandomArray (start, end, len) {
    return Array.from(
      { length: len },
      () => Math.floor(Math.random() * (end - start + 1)) + start
    )
  }

  static #isSorted (list) {
    for (let i = 1; i < list.length; i ++) {
      if (list[i] < list[i - 1]) return false
    }
    return true
  }
}

// test
QuickSort.main(4, 10, 10)

module.exports = QuickSort