function remove (head, key) {
  if (head === null) return null

  while (head.val === key) head = head.next

  let current = head
  while (current && current.next) {
    if (current.next.val === key) {
      const delEl = current.next
      current.next = current.next.next
      delEl.next = null
    } else {
      current = current.next
    }
  }
  return head
}

const LinkedList = require('../utils/LinkedList')
const linkedList = new LinkedList()
for (let i = 0; i < 3; i ++) {
  linkedList.addFirst(i)
}
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(3)
linkedList.addFirst(1)
console.log(linkedList.toString())
linkedList.head = remove(linkedList.head, 2)
console.log(linkedList.toString())
linkedList.head = remove(linkedList.head, 1)
console.log(linkedList.toString())

module.exports = remove
