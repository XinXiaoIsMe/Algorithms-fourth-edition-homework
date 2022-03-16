
const compareTo = require("../compareTo")
const swap = require("../swap")

exports.shellSort = function shellSort (list) {
  let h = list.length >>> 1
  for (let start = h; start >= 1; start = start >>> 1) {
    for (let i = start; i < list.length; i ++) {
      for (let j = i; j - start >= 0 && compareTo(list[j], list[j - start]) < 0; j -= start) {
        swap(list, j, j - start)
      }
    }
  }
  return list
}

// 更快的希尔排序
exports.betterShellSort = function betterShellSort (list) {
  let h = list.length >>> 1
  for (let start = h; start >= 1; start = start >>> 1) {
    for (let i = start; i < list.length; i += start) {
      const cur = list[i]
      let j
      for(j = i; j - start >= 0 && list[j - start] > cur; j -= start) {
        list[j] = list[j - start]
      }
      list[j] = cur
    }
  }
  return list
}
