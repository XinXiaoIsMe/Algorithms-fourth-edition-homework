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

  findIndex (val) {
    if (this.head === null) return -1

    let p = this.head
    let i = -1
    while (++ i < this.size && p.val !== val) {
      p = p.next
    }
    return i === this.size ? -1 : i
  }

  add (index, val) {
    if (index < 0 || index > this.size) throw new RangeError(`index must >= 0 and < LinkedList size`)

    let pre = null
    let next = this.head
    let count = 0
    while (count ++ < index) {
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

  addFirst (val) {
    this.add(0, val)
  }

  addLast (val) {
    this.add(this.size, val)
  }

  remove (index) {
    if (index < 0 || index >= this.size) throw new RangeError('index must >= 0 and < size')
    let pre = this.head
    let next = this.head
    while (index -- > 0) {
      pre = next
      next = next.next
    }
    if (next === this.head) {
      this.head = this.head.next
      next.next = null
      return next
    }
    const delEl = next
    pre.next = next.next
    delEl.next = null
    return delEl
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  removeElement (val) {
    if (this.head === null) return null

    let pre = this.head
    let next = this.head
    while (next !== null) {
      if (next.val === val) break
      pre = next
      next = next.next
    }
    if (next === this.head) {
      this.head = null
      return
    }
    if (next !== null) pre.next = next.next
    next = null
  }

  toString () {
    let p = this.head
    let ret = []
    while (p !== null) {
      ret.push(p.val)
      p = p.next
    }
    return ret.join(', ')
  }
}

module.exports = LinkedList

