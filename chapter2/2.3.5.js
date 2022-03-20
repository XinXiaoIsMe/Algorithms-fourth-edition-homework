function sort (list) {
  let lt = 0
  let gt = list.length
  const cur = list[0]
  while (true) {
    while (list[++ lt] === cur) {
      if (lt === list.length - 1) break
    }
    while (list[-- gt] !== cur) {
      if (gt === 0) break
    }
    if (lt > gt) break
    [list[lt], list[gt]] = [list[gt], list[lt]]
  }
  return list
}

// test
const list = Array.from({ length: 10 }, () => Math.floor(Math.random() * 2))
console.log('排序前：', list)
sort(list)
console.log('排序后：', list)
