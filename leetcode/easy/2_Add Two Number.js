/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let answer = new ListNode();
    let cur = answer;
    
    while (l1 || l2) {
        let sum = cur.val
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        cur.val = sum % 10
        if ((l1 || l2) || sum > 9) {
            cur.next = new ListNode(sum > 9 ? 1 : 0)
            cur = cur.next
        }
    }
    return answer
};