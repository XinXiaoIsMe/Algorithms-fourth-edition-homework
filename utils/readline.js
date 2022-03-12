const readline = require('readline')

function read () {
  let ret = ''
  let onResolve
  let onReject
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.on('line', str => {
    if (str === 'q') rl.close()
    ret += str
  })

  rl.on('close', () => onResolve(ret))
  return new Promise((resolve, reject) => (onResolve = resolve, onReject = reject))
}

module.exports = read
