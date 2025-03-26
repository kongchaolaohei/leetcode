/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const alist = a.split('') || []
  const blist = b.split('') || []
  let result = ''
  let carry = 0
  while (alist.length || blist.length) {
    let va = alist.pop()
    let vb = blist.pop()
    let isCarryed = !!carry
    if (va === '1' && vb === '1') {
      carry = 1
      result = (isCarryed ? '1' : '0') + result
      continue
    } else if (va === '1' || vb === '1') {
      if (isCarryed) {
        carry = 1
        result = '0' + result
      } else {
        carry = 0
        result = '1' + result
      }
      continue
    } else {
      carry = 0
      result = (isCarryed ? '1' : '0') + result
      continue
    }
  }
  if(carry) {
    result = '1' + result
  }
  return result
};
// @lc code=end

// console.log(addBinary("1010", "1011"))
// console.log(addBinary("11010", "1011"))
// console.log(addBinary("11010", "0"))