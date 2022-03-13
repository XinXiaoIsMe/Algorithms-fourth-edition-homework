class DoubleNode {
  constructor (val = null, prev = null, next = null) {
    this.val = val
    this.prev = prev
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

  insert (index, val) {
    if (index < 0 || index > this.size) throw new RangeError('the index must >= 0 and <= this.size')
    const node = new DoubleNode(val)
    if (this.size === 0) {
      this.head = node
      this.size ++
      return
    }
    if (index === 0) {
      node.next = this.head
      this.head.prev = node
      this.head = node
      this.size ++
      return
    }
    
    let current = this.head
    for (let i = 0; i < index - 1; i ++) {
      current = current.next
    }
    node.prev = current
    node.next = current.next
    if (current.next !== null) current.next.prev = node
    current.next = node
    this.size ++
  }

  insertFirst (val) {
    return this.insert(0, val)
  }

  insertLast (val) {
    return this.insert(this.size, val)
  }

  insertBefore (index, val) {
    this.insert(index - 1, val)
  }

  insertAfter (index, val) {
    this.insert(index + 1, val)
  }

  remove (index) {
    if (this.size === 0) throw new RangeError('the linkedlist is empty.')

    this.size --
    
    if (index === 0) {
      const delEl = this.head
      this.head = this.head.next
      delEl.prev = delEl.next = null
      return delEl
    }

    let current = this.head
    for (let i = 0; i < index - 1; i ++) {
      current = current.next
    }
    const delEl = current.next
    current.next = delEl.next
    if (delEl.next !== null) delEl.next.prev = current
    delEl.prev = delEl.next = null
    return delEl
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  removeBefore (index) {
    return this.remove(index - 1)
  }

  removeAfter (index) {
    return this.remove(index + 1)
  }

  toString () {
    if (this.size === 0) return 'empty'
    let ret = ''
    let current = this.head
    while (current) {
      ret += (current.val + ', ')
      current = current.next
    }
    return ret.slice(0, -2)
  }
}

// test
const linkedList = new LinkedList()
for (let i = 0; i < 5; i ++) {
  linkedList.insertFirst(i)
}
console.log(linkedList.toString())
console.log('---------------------')
for (let i = 5; i < 10; i ++) {
  linkedList.insertLast(i)
}
console.log(linkedList.toString())
console.log('---------------------')
linkedList.insertBefore(3, 10)
console.log(linkedList.toString())
console.log('---------------------')
linkedList.insertAfter(3, 10)
console.log(linkedList.toString())
console.log('---------------------')
linkedList.insert(3, 10)
console.log(linkedList.toString())
console.log('---------------------')
linkedList.removeFirst()
console.log(linkedList.toString())
console.log('---------------------')
linkedList.removeLast()
console.log(linkedList.toString())
console.log('---------------------')
const delEl = linkedList.remove(4)
console.log(linkedList.toString(), delEl)
console.log('----------------------')


