class Node {
  constructor (val = null, next = null) {
    this.val = val
    this.next = next
  }
}

class RingLinkedList {
  constructor () {
    this.last = null
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  add (index, val) {
    if (index < 0 || index > this.size) throw new RangeError('index must >= 0 and <= size')
    const node = new Node(val)
    if (this.size === 0) {
      this.last = node
      this.last.next = node
      this.size ++
      return
    }

    let current = this.last
    // 找到插入位置的前一个位置，这里注意从 last 位置遍历会比从头部遍历要好，原因在于从头部遍历
    // 需要额外对插入头结点的情况做处理，而从 last 的位置遍历则这种情况无需额外处理。
    for (let i = 0; i < index; i ++) {
      current = current.next
    }
    node.next = current.next
    current.next = node
    if (this.size === index) this.last = this.last.next // 需要注意插入尾结点的时候 last 的位置发生了改变
    this.size ++
  }

  addLast (val) {
    this.add(this.size, val)
  }

  addFirst (val) {
    this.add(0, val)
  }

  remove (index) {
    if (this.size === 0) return null

    if (index < 0 || index >= this.size) throw new RangeError('index must >= 0 and < size')
    if (this.size === 1) {
      const delEl = this.last
      this.last = null
      this.size --
      delEl.next = null
      return delEl
    }
    let current = this.last
    for (let i = 0; i < index; i ++) {
      current = current.next
    }
    const delEl = current.next
    current.next = delEl.next
    delEl.next = null
    if (index === this.size - 1) this.last = current
    this.size --
    return delEl
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  toString () {
    if (this.size === 0) return 'empty'

    let ret = ''
    let current = this.last.next
    for (let i = 0; i < this.size; i ++) {
      ret += (current.val + ', ')
      current = current.next
    }
    return ret.slice(0, -2)
  }
}

class Queue {
  constructor () {
    this.data = new RingLinkedList()
  }

  isEmpty () {
    return this.data.isEmpty()
  }

  getSize () {
    return this.data.getSize()
  }

  enqueue (el) {
    this.data.addLast(el)
  }

  dequeue () {
    return this.data.removeFirst()
  }

  toString () {
    return this.data.toString()
  }
}

const queue = new Queue()
for (let i = 0; i < 5; i ++) {
  queue.enqueue(i)
}
console.log(queue.toString())
for (let i = 0; i < 5; i ++) {
  console.log(queue.dequeue())
  console.log(queue.toString())
}

module.exports = Queue
