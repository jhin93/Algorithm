/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //function ListNode의 this.next 가 null인 이유는 처음엔 아직 아무것도 없기 때문. 이후 추가, 검색, 삭제등의 메서드가 필요함.
    //https://www.zerocho.com/category/Algorithm/post/58008a628475ed00152d6c4d
    //해당 노드를 리스트 안에서 삭제한다.
    node.val = node.next.val;
    node.next = node.next.next;
};