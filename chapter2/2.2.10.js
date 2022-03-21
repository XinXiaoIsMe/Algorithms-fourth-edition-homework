// 尝试使用 es 里面新增的私有变量，以 # 开头即可。注意需要在 chrome 的较新版本运行

class MergeSort {
  static main (start, end, len) {
    const list = this.#generateRandomArray(start, end, len)
    console.log('排序前：', list)
    this.sort(list)
    console.log('排序后：', list)
    console.log('是否有序：', this.#isSorted(list))
    // const list = [1, 2, 3, 4, 2, 5, 5, 6]
    // this.#merge(list, 0, 3, 7, [])
    // console.log(list)
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
    // 这里需要注意，由于 tempArr 的后半部分是逆序的，每次比较时都是取
    // 后半部分的较小的那部分元素和前半部分较小的元素进行比较排列，这样
    // 保证前半部分遍历完以后，后半部分未遍历的值大于所有遍历过的元素值
    // 而在原数组中后半部分元素本身已是有序且排在末端，因此已经是最终的
    // 位置了
    while (first <= mid) {
      // 这里需要注意的是必须是 tempArr[first] <= tempArr[tail]
      // 而不是 tempArr[first] < tempArr[tail]，因为需要保证 tail
      // 大于 mid，因此如果碰到相等的情况优先让 first 加1。可用 [1, 2, 1]
      // 测试
      if (tempArr[first] <= tempArr[tail]) list[cur ++] = tempArr[first ++]
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