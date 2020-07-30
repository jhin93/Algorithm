/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levelNum = 0
    let solution = [];
    if (!root) return solution;
    let que = [root];
    while (que.length > 0) {
        let level = [];
        let newQue = [];
        for (let node of que) {
            level.push(node.val);
            if (node.left) newQue.push(node.left);
            if (node.right) newQue.push(node.right);
        }
        solution[levelNum] = level;
        que = newQue;
        levelNum++;
    }
    return solution;  
};