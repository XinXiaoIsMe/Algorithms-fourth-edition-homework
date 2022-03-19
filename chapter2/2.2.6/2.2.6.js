function createLimit(start, end) {
  return Array.from({ length: end - start + 1 }, (item, index) => [
    start + index,
    Math.floor(6 * (start + index) * Math.log(start + index)),
  ])
}

function createArray (length) {
  return Array.from({ length }, () => Math.random() * length >>> 0)
}

const limits = createLimit(1, 150)
const lists = Array.from({ length: 150 }, (item, index) => createArray(index + 1))
const canvas = document.getElementById('container')
const ctx = canvas.getContext('2d')

function init() {
  ctx.strokeStyle = 'red'
  draw(limits)
  ctx.strokeStyle = 'green'
  draw(lists.map((list, index) => [index + 1, (MergeSort.countFn(list, 'topToBottom') / 10) >>> 0]))
  ctx.strokeStyle = 'blue'
  draw(lists.map((list, index) => [index + 1, (MergeSort.countFn(list, 'bottomToTop') / 10) >>> 0]))
  ctx.font = 'normal 30px sans-serif #000'
  ctx.fillText('极限值：', 380, 20)
  ctx.strokeStyle = 'red'
  draw([[460, 170], [480, 170]])
  ctx.fillText('自顶向下的排序：', 380, 40)
  ctx.strokeStyle = 'green'
  draw([[460, 370], [480, 370]])
  ctx.fillText('自底向上的排序：', 380, 60)
  ctx.strokeStyle = 'blue'
  draw([[460, 570], [480, 570]])
}

function draw (list) {
  ctx.beginPath()
  list.reduce((pre, next) => {
    ctx.moveTo(pre[0], (pre[1] / 10) >>> 0)
    ctx.lineTo(next[0], (next[1] / 10) >>> 0)
    ctx.stroke()
    return next
  })
}

init()
