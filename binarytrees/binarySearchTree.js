class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }

    setLeft(value) {
        let node = new TreeNode(value);
        this.left = node;
        node.parent = this;
    }

    setRight(value) {
        let node = new TreeNode(value);
        this.right = node;
        node.parent = this;
    }

}

//      12
//   6      20
//     8  14   29
//   7  9

let root = new TreeNode(12);
root.setLeft(6);
root.setRight(20);
let rootLeft = root.getLeft();
let rootRight = root.getRight();
rootLeft.setRight(8);
rootRight.setLeft(14);
rootRight.setRight(29);
let rootLeftRight = rootLeft.getRight();
rootLeftRight.setLeft(7);
rootLeftRight.setRight(9);

// T.C -> O(n) 
// S.C -> O(n) 

let nodes = [];
function inOrder(root) {
    if (root == null) {
        return nodes;
    }
    inOrder(root.left);
    nodes.push(root.value);
    inOrder(root.right);
}

// TC -> O(n)
function toCheckSortedArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

inOrder(root);
console.log(nodes);
console.log(toCheckSortedArray(nodes));

// check BST (inorder + checkSorted ) -> O(n+n) = O(2n) = O(n) <- TC
// check BST (inorder + checkSorted ) -> O(n) <- SC


// TC -> O(n) -> n : no of nodes
// SC -> O(height of the tree)
// function isBST(root, min, max) {
//     if (root == null) { return true; }
//     if (root.value < min || root.val > max) { return false; }
//     return isBST(root.left, min, root.value - 1) && isBST(root.right, root.value + 1, max);
// }

// console.log(isBST(root, -Infinity, +Infinity));
//This paste expires in < 1 day.Public IP access.Share whatever you see with others in seconds with Context.Terms of ServiceReport this