
/*


Identical_Tree
Write a program to check if two binary trees are same or not; 
that is have the same number of nodes and the same values for each corresponding node.

Input
The first line of the input is a string containing values in the order of level
 order traversal of the tree where, numbers denote node values, and a character 
 “N” denotes NULL child for the first tree. The second line of the input is
  string containing space separated values. The values in the string are in 
  the order of level order traversal of the tree where, numbers denote node values, 
  and a character “N” denotes NULL child for the second tree.

Output
Return True if the trees are identical and False if they are not.

Example
Input:

1 2 3 4 5 6

1 2 3 4 5 6

Output: True

Explanation: Both trees look like below

     1                      
     / \                            
    2   3                          
   /\   /       
  4  5 6  
Input:

1 2 3 4 5 6 7

1 2 3 4 5 6

Output: False

Explanation: The first tree looks like this:

      1                         
     / \                            
    2   3                          
   /\   /\      
  4  5 6  7
The second tree looks like this:

        1                      
     / \                            
    2   3                          
   /\   /       
  4  5 6
*/
  

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertLevelOrder(arr, i, n) {
    if (i >= n) {
      return null;
    }
    let tree = new Node(arr[i]);
    tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
    tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
    return tree;
  }
}
function isIdentical(p,q) { // 11
    // write your code here
     if(p == null && q == null){
        return true
    }
    if(p==null || q==null){
        return false
    }
    console.log(p.data);
    if(p.data !== q.data){
        return false
    }
    return isIdentical(p.left, q.left) && isIdentical(p.right,q.right);
}
function convertToNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "N") {
      arr[i] = parseInt(arr[i]);
    } else {
      arr[i] = null;
    }
  }
}
let arr1 = readLine().split(" ");
let arr2 = readLine().split(" ");
convertToNumber(arr1);
convertToNumber(arr2);
let tree1 = new BinaryTree();
tree1.root = tree1.insertLevelOrder(arr1, 0, arr1.length);
let tree2 = new BinaryTree();
tree2.root = tree2.insertLevelOrder(arr2, 0, arr2.length);
if (isIdentical(tree1.root, tree2.root)) {
  console.log("True");
} else {
  console.log("False");
}