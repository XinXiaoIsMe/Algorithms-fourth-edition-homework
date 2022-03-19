class MergeSort {
  constructor () {}

  static sort (list) {
    this._sort(list, 0, list.length - 1)
    return list
  }

  static _sort (list, left, right) {
    if (left >= right) return
    const mid = left + ((right - left) >>> 1)
    this._sort(list, left, mid)
    this._sort(list, mid + 1, right)
    if (list[mid] > list[mid + 1]) this._merge(list, left, mid, right)
  }

  static _merge (list, left, mid, right) {
    const tempArr = new Array(right - left + 1)
    for (let i = left; i <= right; i ++) {
      tempArr[i - left] = list[i]
    }
    let i = left
    let j = mid + 1
    for (let k = left; k <= right; k ++) {
      if (i > mid) list[k] = tempArr[j ++ - left]
      else if (j > right) list[k] = tempArr[i ++ - left]
      else if (tempArr[i - left] < tempArr[j - left]) list[k] = tempArr[i ++ - left]
      else list[k] = tempArr[j ++ - left]
    }
  }
}

// test
const list = [3, 2, 1, 5, 7, 2]
console.log(MergeSort.sort(list))

module.exports = MergeSort