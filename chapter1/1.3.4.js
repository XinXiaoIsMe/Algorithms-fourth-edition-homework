function validate (input) {
  const stack = []
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const reverseMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (const char of input) {
    if (map[char] && map[char] !== stack.pop()) return false
    if (reverseMap[char]) stack.push(char)
  }
  if (stack.length) return false
  return true
}

const usecases = ['({[})', '[](){}', '[', '()', '']
usecases.forEach(usecase => {
  console.log(validate(usecase))
})
// false true false true true
