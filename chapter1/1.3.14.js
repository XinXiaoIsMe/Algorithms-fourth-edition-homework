class ResizingArrayQueueOfStrings {
  constructor (capacity = 10) {
    this.data = new Array(capacity)
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  enqueue (val) {
    if (this.size === this.data.length) this._resize(this.size * 2)
    this.data[this.size] = val
    this.size ++
  }

  dequeue () {
    if (this.size === 0) throw new RangeError('queue is empty')
    if (this.size <= Math.floor(this.data.length / 4)) this._resize(Math.floor(this.size / 2))
    const delEl = this.data[0]
    for (let i = 0; i < this.size - 1; i ++) {
      this.data[i] = this.data[i + 1]
    }
    this.data[this.size - 1] = null
    this.size --
    return delEl
  }

  _resize (capacity) {
    const newData = new Array(capacity)
    for (let i = 0; i < this.size; i ++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }

  toString () {
    let ret = ''
    for (let i = 0; i < this.size - 1; i ++) {
      ret += (this.data[i] + ' =>')
    }
    if (this.size >= 0) ret += this.data[this.size]
    return ret
  }
}

const usecase = [1, 2, 3, 4, 5]
const queue = new ResizingArrayQueueOfStrings()
usecase.forEach(item => queue.enqueue(item))
console.log(queue)
// test resize and dequeue
for (let i = 0; i < 4; i ++) {
  console.log(queue.dequeue())
}
console.log(queue)
// test resize and enqueue
for (let i = 0; i < 5; i ++) {
  queue.enqueue(i)
}
console.log(queue)

module.exports = ResizingArrayQueueOfStrings
