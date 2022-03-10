/**
 * 分析：这题和 1.3.10 思路基本类似，从标准输入中得到一个后序表达式然后求值，相当于将后序表达式
 * 转为中序表达式。只需要使用栈保存数值，然后碰到操作符的时候做计算然后将计算结果push进栈。重复操作
 * 直至遍历完整个后序表达式
 */
function evaluatePostfix (input) {
  const stack = []
  const operatorMap = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
  }
  for (const char of input) {
    if (operatorMap[char]) {
      const v1 = stack.pop()
      const v2 = stack.pop()
      switch (char) {
        case '+':
          stack.push(v2 + v1)
          break
        case '-':
          stack.push(v2 - v1)
          break
        case '*':
          stack.push(v2 * v1)
          break
        case '/':
          stack.push(v2 / v1)
          break
        default:
          break
      }
    } else if (!/\s/.test(char)) {
      stack.push(char * 1)
    }
  }
  return stack[0]
}

const usecases = ['1 2 + 3 4 - 5 6 - * *', '4 2 + 1 3 - *']
for (const usecase of usecases) {
  console.log(evaluatePostfix(usecase))
}