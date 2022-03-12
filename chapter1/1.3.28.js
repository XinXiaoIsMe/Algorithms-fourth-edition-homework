function max (head) {
  if (head === null) return 0
  return Math.max(head.val, max(head.next))
}

const LinkedList = require('../utils/LinkedList')
const linkedList = new LinkedList()
for (let i = 0; i < 5; i ++) {
  linkedList.addFirst(i)
}
console.log(max(linkedList.head))

module.exports = max
