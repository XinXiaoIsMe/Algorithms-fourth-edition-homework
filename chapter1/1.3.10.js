/**
 * 后序表达式：将操作数放在操作符号的前面。例如：
 * ((2 * 3) + 4) 用后序表达式为： 2 3 * 4 +
 * 这一题和1.3.9的思路完全一致，不过是拼接字符串方式不同
 */
function infixToPostfix (input) {
  input = input.replace(/\s/g, '')
  const resultStack = []
  const operatorStack = []
  const operatorMap = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
  }
  for (let i = 0; i < input.length; i ++) {
    const char = input[i]
    if (char === ')') {
      const v1 = resultStack.pop()
      const v2 = resultStack.pop()
      const operator = operatorStack.pop()
      resultStack.push(`${v2} ${v1} ${operator}`)
    } else if (operatorMap[char]) {
      operatorStack.push(char)
    } else if (char !== '(') {
      resultStack.push(char)
    }
  }
  return resultStack[0].trim()
}

const input = '((1 + 2) * ((3 - 4) * (5 - 6)))'
console.log(infixToPostfix(input)) // 1 2 + 3 4 - 5 6 - * *