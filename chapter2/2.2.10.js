// 尝试使用 es 里面新增的私有变量，以 # 开头即可。注意需要在 chrome 的较新版本运行

class MergeSort {
  static main (start, end, len) {
    const list = this.#generateRandomArray(start, end, len)
    console.log('排序前：', list)
    this.sort(list)
    console.log('排序后：', list)
    console.log('是否有序：', this.#isSorted(list))
  }

  static sort (list) {
    const tempArr = new Array(list.length)
    this.#sort(list, 0, list.length - 1, tempArr)
  }

  static #sort (list, low, high, tempArr) {
    if (low >= high) return

    const mid = low + ((high - low) >>> 1)
    this.#sort(list, low, mid, tempArr)
    this.#sort(list, mid + 1, high, tempArr)
    if (list[mid] > list[mid + 1]) this.#merge(list, low, mid, high, tempArr)
  }

  // 原先的实现方式
  // static #merge (list, low, mid, high, tempArr) {
  //   for (let i = low; i <= high; i ++) {
  //     tempArr[i] = list[i]
  //   }
  //   let i = low
  //   let j = mid + 1
  //   for (let k = low; k <= high; k ++) {
  //     if (i > mid) list[k] = tempArr[j ++]
  //     else if (j > high) list[k] = tempArr[i ++]
  //     else if (tempArr[i] < tempArr[j]) list[k] = tempArr[i ++]
  //     else list[k] = tempArr[j ++]
  //   }
  // }

  // 题目要求的实现方式
  static #merge (list, low, mid, high, tempArr) {
    let i
    for (i = low; i <= mid; i ++) {
      tempArr[i] = list[i]
    }
    for (let j = high; j >= mid + 1; j --) {
      tempArr[i ++] = list[j]
    }
    let first = low
    let tail = high
    let cur = low
    while (first <= tail) {
      if (tempArr[first] < tempArr[tail]) list[cur ++] = tempArr[first ++]
      else list[cur ++] = tempArr[tail --]
    }
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
MergeSort.main(4, 10, 10)

module.exports = MergeSort