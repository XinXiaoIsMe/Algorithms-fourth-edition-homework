const RED = 'color: red;'
const GRAY = 'color: gray;'
const BLACK = 'color: black;'

function selectionSortTrack (list) {
  let ret = ''
  const colorMap = []
  for (let i = 0; i < list.length; i ++) {
    let minIndex = i

    for (let j = i + 1; j < list.length; j ++) {
      if (list[j] < list[minIndex]) minIndex = j
    }
    ret = render(list, 0, i - 1, ret, colorMap, BLACK)
    ret = render(list, i, i, ret, colorMap, RED)
    ret = render(list, i + 1, minIndex - 1, ret, colorMap, GRAY)
    if (minIndex !== i) ret = render(list, minIndex, minIndex, ret, colorMap, RED)
    ret = render(list, minIndex + 1, list.length - 1, ret, colorMap, GRAY)

    ;[list[i], list[minIndex]] = [list[minIndex], list[i]]
    
    ret += '\n'
  }
  console.log(ret, ...colorMap)
  return list
}

function changeBgc (ret, colorMap, color) {
  colorMap.push(color)
  return ret + '%c'
}

function render (list, start, end, ret, colorMap, color) {
  if (start > end) return ret
  ret = changeBgc(ret, colorMap, color)
  for (let i = start; i <= end; i ++) {
    ret += (list[i] + '\t')
  }
  return ret
}

// test 在浏览器控制台运行
const list = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']
console.log('排序前：', list)
console.log('排序后：', selectionSortTrack(list))
