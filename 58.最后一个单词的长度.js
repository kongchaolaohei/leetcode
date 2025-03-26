/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === ' ' && count !== 0) {
      return count
    }
    if(s[i] !== ' ') {
      count++
    }
  }
  return count
};
// @lc code=end

// console.log(lengthOfLastWord('Hello World')) // 5
// console.log(lengthOfLastWord('a ')) // 1
// console.log(lengthOfLastWord('a')) // 1
