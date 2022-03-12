// 使用动态数组实现
class Stack {
  constructor (capacity = 10) {
    if (typeof capacity !== 'number') throw new TypeError('please type a number.')
    this.data = new Array(capacity)
    this.size = 0
  }

  isEmpty () {
    return this.size === 0
  }

  getSize () {
    return this.size
  }

  push (el) {
    if (this.size === this.data.length) this._resize(this.size * 2)
    this.data[this.size ++] = el
  }

  pop () {
    if (this.size === 0) throw new RangeError('cannot pop a element from an empty stack.')
    const deleteEl = this.data[-- this.size]
    return deleteEl
  }

  peek () {
    if (this.size === 0) throw new RangeError('the stack is empty.')
    return this.data[this.size - 1]
  }

  _resize (capacity) {
    const newData = new Array(capacity)
    for (let i = 0; i < this.size; i ++) {
      newData = this.data[i]
    }
    this.data = newData
  }

  // 实现迭代器
  // [Symbol.iterator] () {
  //   const data = []
  //   for (let i = 0; i < this.getSize(); i ++) data[i] = this.data[i]
  //   let count = 0
  //   return {
  //     next () {
  //       while (count < data.length) {
  //         return {
  //           value: data[count ++],
  //           done: false
  //         }
  //       }
  //       return {
  //         value: undefined,
  //         done: true
  //       }
  //     }
  //   }
  // }

  // 使用 generator 实现迭代器
  * [Symbol.iterator] () {
    const data = []
    for (let i = 0; i < this.getSize(); i ++) data[i] = this.data[i]
    let count = data.length - 1
    while (count >= 0) yield data[count --]
  }

  // 这里约定传入的字符串以空格分隔，字符串左边为栈顶
  static copy (stringStack) {
    const stack = stringStack.split(/\s/)
    const copyStack = new Stack()
    for (let i = stack.length - 1; i >= 0; i --) copyStack.push(stack[i])
    return copyStack
  }
}

const LinkedList = require('../utils/LinkedList')
class LinkedListStack {
  constructor () {
    this.data = new LinkedList()
  }

  getSize () {
    return this.data.getSize()
  }

  isEmpty () {
    return this.data.isEmpty()
  }

  push (val) {
    this.data.addFirst(val)
  }

  pop () {
    return this.data.removeFirst()
  }

  peek () {
    if (this.getSize() === 0) throw new RangeError('the stack is empty.')
    const head = this.pop()
    this.push(head.val)
    return head.val
  }

  * [Symbol.iterator] () {
    let p = this.data.head
    while (p !== null) {
      yield p.val
      p = p.next
    }
  }

  // 这里约定传入的字符串以空格分隔，字符串左边为栈顶
  static copy (stringStack) {
    const stack = stringStack.split(/\s/)
    const copyStack = new LinkedListStack()
    for (let i = stack.length - 1; i >= 0; i --) copyStack.push(stack[i])
    return copyStack
  }
}

const usecase = '1 2 3 4 5 6 7 8'
const copyStack = Stack.copy(usecase)
for (const value of copyStack) {
  console.log(value)
}

console.log('-----------------------------------')

const copyStack2 = LinkedListStack.copy(usecase)
for (const value of copyStack2) {
  console.log(value)
}
