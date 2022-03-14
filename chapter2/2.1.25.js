const compareTo = require('../utils/compareTo')

function insertionSort (list) {
  for (let i = 1; i < list.length; i ++) {
    const cur = list[i]
    let j = i
    for (; j > 0 && compareTo(cur, list[j - 1]) < 0; j --) {
      list[j] = list[j - 1]
    }
    list[j] = cur
  }
  return list
}

const list = Array.from({ length: 5 }, () => Math.round(Math.random() * 5 + 1))
console.log('排序前', list)
debugger
insertionSort(list)
console.log('排序后', list)
const isSorted = require('../utils/isSorted')
console.log('是否有序：', isSorted(list))
