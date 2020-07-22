/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //역순으로 추가가 되어야 한다.
    let current = head
    const arr = [];
    while(current !== null ){
          arr.push(current.val)
          current = current.next
    }
    let start = 0
    let end = arr.length - 1
    let answer = true
    while(start <= end){
        if(arr[start++] !== arr[end--]){
            answer = false
        }
    }
    return answer
};