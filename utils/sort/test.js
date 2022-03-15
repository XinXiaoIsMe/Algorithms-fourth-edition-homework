const list = Array.from({ length: 10 }, () => Math.round(Math.random() * 10 + 1))
console.log('排序前', list)
// const sort = require('./insertionSort')
const sort = require('./shellSort')
debugger
sort(list)
console.log('排序后', list)
const isSorted = require('../isSorted')
console.log('是否有序：', isSorted(list))
