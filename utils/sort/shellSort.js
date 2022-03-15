function shellSort (list) {
  let h = list.length >>> 1
  for (let start = h; start >= 1; start --) {
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

module.exports = shellSort
