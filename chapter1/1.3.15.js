const readline = require('../utils/readline')
const Queue = require('../utils/Queen')

function getChar(){
  let onResolve
  let onReject
  const promise = new Promise((resolve, reject) => (onResolve = resolve, onReject = reject))
  readline()
    .then(res => {
      // 约定输入以逗号分隔，回车加q结束
      res = res.trim().split(',').filter(Boolean)
      let k = res.splice(0, 1) * 1
      if (isNaN(k)) throw new Error('first char must be a number')
      if (k > res.length) throw new RangeError('first char must lower than the number of other chars')
      const queue = new Queue()
      for (const char of res) {
        queue.enqueue(char)
      }
      k = queue.getSize() - k
      while (k -- > -1) res = queue.dequeue()
      onResolve(res)
    })
    .catch (err => {
      onReject(err)
    })
    return promise
}

getChar()
  .then(res => console.log('success =>', res))
  .catch(err => console.error('error =>', err))
