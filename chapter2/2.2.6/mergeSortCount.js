class MergeSort {
  constructor () {}

  static count = 0

  static sort (list) {
    this.tempArr = new Array(list.length)
    this._sort(list, 0, list.length - 1)
    return list
  }

  // 自底向上的归并排序
  static sort2 (list) {
    this.tempArr = new Array(list.length)
    for (let step = 1; step < list.length; step *= 2) {
      for (let i = 0; i < list.length; i += (step * 2)) {
        this._merge(list, i, i + step - 1, Math.min(i + step * 2 - 1, list.length - 1))
      }
    }
    return list
  }

  static _sort (list, left, right) {
    if (left >= right) return
    const mid = left + ((right - left) >>> 1)
    this._sort(list, left, mid)
    this._sort(list, mid + 1, right)
    if (list[mid] > list[mid + 1]) { this._merge(list, left, mid, right); this.count += 2 }
  }

  static _merge (list, left, mid, right) {
    for (let p = left; p <= right; p ++) {
      this.tempArr[p] = list[p]
      this.count += 2
    }
    let i = left
    let j = mid + 1
    for (let k = left; k <= right; k ++) {
      if (i > mid) { list[k] = this.tempArr[j ++]; this.count += 2 }
      else if (j > right) { list[k] = this.tempArr[i ++]; this.count += 2 }
      else if (this.tempArr[i] < this.tempArr[j]) { list[k] = this.tempArr[i ++]; this.count += 4 }
      else { list[k] = this.tempArr[j ++]; this.count += 2 }
    }
  }

  static countFn (list, direction) {
    this.count = 0
    if (direction === 'bottomToTop') {
      this.sort2(list)
      return this.count
    }
    this.sort(list)
    return this.count
  }
}
