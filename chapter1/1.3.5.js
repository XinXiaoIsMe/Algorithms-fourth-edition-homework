/**
 * 分析：要想做出这道题，需要先知道什么是中序表达式。中序表达式就是我们平时的数学表达式，从左到右
 * 计算，使用括号提升优先级。这里需要注意的是，通过题目给定的案例可以知道每个计算步骤都使用括号包裹
 * (实际数学中是约定了四则运算的优先级从而省略了括号，例如：3 * 4 + 4 其实等价于((3 * 4) + 4)，通过
 * 由内至外的计算括号内的值即可得出最后结果)。因此我们在遇到 ) 时，表明需要进行一次计算，从而需要使用
 * 括号包裹，也就是说，补全括号的过程相当于计算表达式的值。而在计算过程中，原先的表达式其实可以用其计
 * 算结果替代，意即：((3 * 4) + 4) 等价于 (12 + 4)，需要注意的是，替换之后的值和原先的值优先级一致。
 * 由于栈的顶层元素总是优先级最高的，所以可以使用栈来保证其优先级。使用两个栈分别保存数值和操作符，每次
 * 遇到右括号的时候表明需要做一次替换，从数值栈中取出顶层的两个值，操作符栈中取出顶层操作符，补齐括号后
 * 再次推入数值栈保证其优先级。重复操作直至遍历完整个字符串
 */
function getInfixExpression (expression) {
  const numberStack = []
  const operatorStack = []
  const operatorMap = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
  }
  expression = expression.replace(/\s/g, '')
  for (let i = 0; i < expression.length; i ++) {
    const char = expression[i]
    if (operatorMap[char]) {
      operatorStack.push(char)
    } else if (char === ')') {
      const a = numberStack.pop()
      const b = numberStack.pop()
      const operator = operatorStack.pop()
      numberStack.push(`(${b} ${operator} ${a})`)
    } else {
      numberStack.push(char)
    }
  }
  return numberStack.pop()
}

const usecase = '1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )'
const ret = getInfixExpression(usecase)
console.log(ret) // ((1 + 2) * ((3 - 4) * (5 - 6)))

/**
 * 根据上面的思路其实可以模拟计算机计算表达式，将补全括号的操作换成计算值即可
 */
function calc (expression) {
  const numberStack = []
  const operatorStack = []
  const operatorMap = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
  }
  expression = expression.replace(/\s/g, '')
  for (let i = 0; i < expression.length; i ++) {
    const char = expression[i]
    if (operatorMap[char]) {
      operatorStack.push(char)
    } else if (char === ')') {
      const v1 = numberStack.pop() * 1
      const v2 = numberStack.pop() * 1
      const operator = operatorStack.pop()
      switch (operator) {
        case '+':
          numberStack.push(v2 + v1)
          break
        case '-':
          numberStack.push(v2 - v1)
          break
        case '*':
          numberStack.push(v2 * v1)
          break
        case '/':
          numberStack.push(v2 / v1)
          break
        default:
          break
      }
    } else if (char !== '(') {
      numberStack.push(char)
    }
  }
  return numberStack[0]
}

console.log(calc(ret))
