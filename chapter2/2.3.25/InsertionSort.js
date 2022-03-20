function insertionSort (list, low, high) {
  for (let i = low + 1; i <= high; i ++) {
    const cur = list[i]
    let j
    for (j = i; j - 1 >= low && cur < list[j - 1]; j --) {
      list[j] = list[j - 1]
    }
    list[j] = cur
  }
  return list
}

export default insertionSort