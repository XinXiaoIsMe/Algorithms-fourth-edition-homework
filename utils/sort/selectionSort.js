const swap = require('../swap')
const compareTo = require('../compareTo')

// 从小到大排序
function selectionSort (list) {
  const len = list.length
  let min
  for (let i = 0; i < len; i ++) {
    min = i
    for (let j = i + 1; j < len; j ++) {
      if (compareTo(list[j], list[min]) < 0) min = j
    }
    swap(list, i, min)
  }
  return list
}

module.exports = selectionSort
