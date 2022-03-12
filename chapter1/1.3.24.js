function removeAfter (node) {
  if (node === null || node.next === null) return
  const delEl = node.next
  node.next = node.next.next
  delEl.next = null
}

const LinkedList = require('../utils/LinkedList')
const linkedList = new LinkedList()
for (let i = 0; i < 3; i ++) {
  linkedList.addFirst(i)
}
console.log(linkedList.toString())
const head = linkedList.head
removeAfter(head)
console.log(linkedList.toString())

module.exports = removeAfter
