/**
 * 假设链表节点结构为：
 * Node {
 *   val: any,
 *   next: Node | null
 * }
 */
function removeLast (first) {
  if (first === null) throw new RangeError('the LinkedList is empty.')
  if (first.next === null) {
    first = null
    return first
  }
  let p = first
  while (p.next !== null && p.next.next !== null) {
    p = p.next
  }
  p.next = p.next.next
  return first
}

const LinkedList = require('../utils/LinkedList')
const linkedList = new LinkedList()
for (let i = 0; i < 5; i ++) {
  linkedList.addLast(i)
}
console.log(linkedList.toString())
linkedList.head = removeLast(linkedList.head)
console.log(linkedList.toString())

module.exports = removeLast
