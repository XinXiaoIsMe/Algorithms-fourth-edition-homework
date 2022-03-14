module.exports = function (list) {
  for (let i = 1; i < list.length; i ++) {
    if (list[i] < list[i - 1]) return false
  }

  return true
}
