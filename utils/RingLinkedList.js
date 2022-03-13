class Node {
  constructor (val = null, next = null) {
    this.val = val
    this.next = next
  }
}

class RingLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty () {
    return this.size === 0
  }

  getSize () {
    return this.size
  }

  add (index, val) {
    if (index < 0 || index > this.size) throw new RangeError('index must >=0 and <= linked list length')
    if (index === 0 || index === this.size) return this.addFirst(val)
    let current = this.head
    for (let i = 0; i < index - 1; i ++) {
      current = current.next
    }
    const node = new Node(val, current.next)
    current.next = node
    this.size ++
  }

  addLast (val) {
    const node = new Node(val, this.head)
    this.size ++
    if (this.tail === null) {
      this.tail = this.head = node
      node.next = node
      return
    }
    this.tail.next = node
    this.tail = node
  }

  // 环形链表在开头添加节点和在末尾添加节点本质是一样的
  addFirst (val) {
    this.addLast(val)
  }

  remove (index) {
    if (index === 0) return this.removeFirst()
    if (index < 0 || index > this.size) throw new RangeError('the linked list is empty.')
    let current = this.head
    this.size --
    if (index === 0) {
      this.head = this.tail = null
      return current
    }
    for (let i = 0; i < index - 1; i ++) {
      current = current.next
    }
    const delEl = current.next
    current.next = current.next.next
    delEl.next = null
    return delEl
  }

  removeFirst () {
    if (this.size === 0) return null

    const delEl = this.head
    if (this.size === 1) {
      this.head = this.tail = null
    } else {
      this.head = this.head.next
      this.tail.next = this.head
    }
    this.size --
    delEl.next = null
    return delEl
  }

  removeLast () {
    if (this.size === 0) return null

    this.size --
    const delEl = this.tail
    if (this.size === 1) {
      this.head = this.tail = null
      return delEl
    }
    let current = this.head
    while (current.next !== this.tail) current = current.next
    current.next = current.next.next
    delEl.next = null
    return delEl
  }

  toString () {
    if (this.size === 0) return 'empty'
    let ret = ''
    let current = this.head
    for (let i = 0; i < this.size; i ++) {
      ret += (current.val + ', ')
      current = current.next
    }
    return ret.slice(0, -2)
  }
}

// const linkedList = new RingLinkedList()
// for (let i = 0; i < 4; i ++) {
//   linkedList.addLast(i)
// }
// console.log(linkedList.toString())
// console.log('-------------------------------')
// linkedList.add(2, 9)
// console.log(linkedList.toString())
// console.log('-------------------------------')
// linkedList.removeFirst()
// console.log(linkedList.toString())
// console.log('-------------------------------')
// linkedList.removeLast()
// console.log(linkedList.toString())
// console.log('-------------------------------')
// linkedList.remove(1)
// console.log(linkedList.toString())

module.exports = RingLinkedList
