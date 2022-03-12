function max (head) {
  if (head === null) return 0

  let current = head
  let maxValue = head.val
  while (current) {
    maxValue = Math.max(maxValue, current.val)
    current = current.next
  }
  return maxValue
}

const LinkedList = require('../utils/LinkedList')
const linkedList = new LinkedList()
for (let i = 0; i < 5; i ++) {
  linkedList.addFirst(i)
}
console.log(max(linkedList.head))

module.exports = max
