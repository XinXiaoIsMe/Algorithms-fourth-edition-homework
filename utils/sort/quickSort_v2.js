// 三路快速排序，使用3个指针，假设当前元素是cur，[low, lt - 1]为小于cur的区域，[lt, i - 1]为等于
// cur的区域，[i, gt]为尚未排序的区域，[gt + 1, high]为大于cur的区域
// 2 4 5 5 7 6 0 8 9 10
// ↑   ↑   ↑     ↑    ↑
// low lt  i     gt  high

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
    let lt = low
    let i = low
    let gt = high
    const cur = list[low]
    while (i <= gt) {
      if (list[i] < cur) {
        [list[lt], list[i]] = [list[i], list[lt]]
        lt ++
        i ++
      } else if (list[i] > cur) {
        [list[gt], list[i]] = [list[i], list[gt]]
        gt --
      } else {
        i ++
      }
    }
    this.#sort(list, low, lt - 1)
    this.#sort(list, gt + 1, high)
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