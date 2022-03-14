const compareTo = require('../compareTo')
const swap = require('../swap')
// 从小到大排序
function insertionSort (list) {
  for (let i = 1; i < list.length; i ++) {
    for (let j = i; j > 0 && compareTo(list[j], list[j - 1]) < 0; j --) {
      swap(list, j, j - 1)
    }
  }
  return list
}

module.exports = insertionSort
