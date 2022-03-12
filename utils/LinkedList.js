class Node {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  find (val) {
    if (this.head === null) return null
    let node = this.head
    while (node) {
      if (node.val === val) return node
      node = node.next
    }
    return null
  }

  add (index, val) {
    if (index < 0 || index > this.size) throw new RangeError(`index must >= 0 and < LinkedList size`)

    let pre = null
    let next = this.head
    let count = 0
    while (count ++ < index) {
      console.log(this.head, index)
      pre = next
      next = next.next
    }
    if (pre) {
      pre.next = new Node(val, next)
    } else {
      this.head = new Node(val, next)
    }
    this.size ++
  }

  addFirst () {}

  addLast () {}

  remove (index) {}

  removeFirst () {}

  removeLast () {}

  toString () {}
}

const linkedList = new LinkedList()
linkedList.add(0, 1)
linkedList.add(0, 2)
linkedList.add(1, 3)
console.log(linkedList)

module.exports = LinkedList
