/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // '('，')'，'{'，'}'，'['，']'
  let stack = []
  for(let i = 0; i < s.length; i++) {
    switch(s[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(s[i])
        break
      case ')':
        if(stack.pop() !== '(') return false
        break
      case '}':
        if(stack.pop() !== '{') return false
        break
      case ']':
        if(stack.pop() !== '[') return false
        break
    }
  }
  return !stack.length
};
// @lc code=end

// console.log(isValid("([)]")); // false
// console.log(isValid("()[]{}")); // true
// console.log(isValid("{[]}")); // true
// console.log(isValid("]")); // false
// console.log(isValid("[")); // false