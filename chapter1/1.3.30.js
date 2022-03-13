// 使用递归 => 将链表分为头结点和子链表，假设子链表已经翻转好，则后续操作只需将头结点和
// 子链表链接上即可。例如：原链表为：1 -> 2 -> 3，翻转子链表：1 -> 2 <- 3，则可知只需
// 子链表的尾结点指向头结点，头结点指向null即可
function reverse (head) {
  if (head === null || head.next === null) return head

  const rest = reverse(head.next)
  head.next.next = head
  head.next = null
  return rest
}

// 使用非递归 => 每次通过 p3 指向后面子链表的头结点防止链表断开，p1 和 p2 指向需要翻转的两个节点
// 翻转 p1 和 p2，此时 p2 之前的节点已经翻转好了，后移继续翻转其余节点
function reverse2 (head) {
  if (head === null || head.next === null) return head
  let p1 = null
  let p2 = head
  let p3 = head.next
  while (p3 !== null) {
    p2.next = p1
    p1 = p2
    p2 = p3
    p3 = p3.next
  }
  p2.next = p1
  return p2
}

// test
const LinkedList = require('../utils/LinkedList')
const linkedList = new LinkedList()
for (let i = 0; i < 5; i ++) {
  linkedList.addFirst(i)
}
console.log('previous: ' + linkedList.toString())
linkedList.head = reverse(linkedList.head)
console.log('reversed: ' + linkedList.toString())
linkedList.head = reverse2(linkedList.head)
console.log('reversed2: ' + linkedList.toString())
