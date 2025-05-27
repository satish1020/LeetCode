Binary trees
Report Issue
This entire chapter will make heavy use of recursion. If you aren't comfortable with recursion, please review the "Introduction to recursion" article in the first chapter before continuing.

Nodes and graphs
In this chapter, we will be learning about trees and graphs, which is probably the most common type of interview question (hash maps aren't really a "type" of question, and "array" or "string" is too broad). Trees and graphs are abstract data structures that show up everywhere in both the physical world and the software world. This is the longest chapter of the course, but for good reason. A huge amount of interview problems give trees or graphs as the input, and the entire problem is focused on them. As such, it is crucial that anyone going into a coding interview has a strong understanding of them.

Let's start by revisiting what a node is. We looked at nodes in the linked lists chapter - recall that a node is an abstract data type with two things. First, a node stores data. This data can be whatever you want - an integer, a boolean, a hash map, your own custom objects, or all of the above. Second, a node stores pointers to other nodes.

A graph is any collection of nodes and their pointers to other nodes. In fact, linked lists and trees are both types of graphs. As a topic, graphs are extremely broad. There is an entire field of study dedicated to graphs called graph theory.

Even though a tree is a type of graph, trees and graphs are considered different topics when it comes to algorithm problems. Because graphs are the more advanced/difficult topic, we will start by looking at trees.

// Tree Node Class
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


const depthFirstSearch = (node)=>{
     if(node === null){
        return;
     }   
    depthFirstSearch(node.left);
    depthFirstSearch(node.right);
     return;
}

const preOrderDFS = (node) =>{
    if(node === null){
        return;
    }
    console.log(node.val);
    preOrderDFS(node.left);
    preOrderDFS(node.rigt);
    return;
}

const inOrderTraversal = (node) =>{
    if(node === null){
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
    return;
}

const postOrderTraversal = (node) =>{
    if(node === null){
        return;
    }
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.val);
    return;
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


(function main() {
    /*
    The following code builds a tree that looks like:
        0
      /   \
     1     2
    */
    let root = new TreeNode(0);
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    
    root.left = one;
    root.right = two;
    
    console.log(root.left.val);
    console.log(root.right.val);
}());

// function declaration of node and to build a tree;
function TreeNode(val){
this.val = val;
this.left = null;
this.right = null;
}

function buildTree(){
let rootNode = new TreeNode(0);
let leftNode = new TreeNode(1);
let rightNode = new TreeNode(2);
rootNode.left = leftNode;

rootNode.right = rightNode;
}

//max depth via post order
var maxDepth = (root) => {
    if (!root) {
        return 0;
    }
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}


// all three implementation.

// max depth via post-order traversal
var maxDepthPostOrder = (root) => {
    if (!root) {
        return 0;
    }

    const postOrder = (node) => {
        if (!node) {
            return 0;
        }
        let leftDepth = postOrder(node.left);
        let rightDepth = postOrder(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    };

    return postOrder(root);
};


// max depth via pre-order traversal
var maxDepthPreOrder = (root) => {
    if (!root) {
        return 0;
    }

    const preOrder = (node) => {
        if (!node) {
            return 0;
        }
        let leftDepth = preOrder(node.left);
        let rightDepth = preOrder(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    };

    return preOrder(root);
};

// max depth via in-order traversal
const maxDepthInOrder = (root) => {
    if (!root) {
        return 0;
    }

    const inOrder = (node) => {
        if (!node) {
            return 0;
        }
        let leftDepth = inOrder(node.left);
        let rightDepth = inOrder(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    };

    return inOrder(root);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthIterativeApproach = function(root) {
    if (!root) {
        return 0;
    }
    
    let stack = [[root, 1]];
    let ans = 0;
    
    while (stack.length) {
        let [node, depth] = stack.pop();
        ans = Math.max(ans, depth);
        
        if (node.left) {
            stack.push([node.left, depth + 1]);
        }
        if (node.right) {
            stack.push([node.right, depth + 1]);
        }
    }
    
    return ans;
};


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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    const dfs = (node, curr) => {
        // base case 
        if (!node) {
            return false;
        }
 // leaf node 
        if (!node.left && !node.right) {
            return curr + node.val === targetSum;
        }
        curr+= node.val;
        // if there exists a pathsum in left subtree or right subtree which would be boolean.
        let left = dfs(node.left, curr); 
        let right = dfs(node.right, curr);
        // if either left or right subtree has valid path then return true;
        return left || right;
    }
    return dfs(root, 0)
};

/**
 * Alternative Approach
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root){
    const dfs = (node, maxSoFar)=>{
        let good = node.val> maxSoFar? 1: 0;
        let maxSoFar = Math.max(maxSofar, node.val);

        return good + dfs(node.left, maxSofar) + dfs(node.right, maxSoFar);
    }
    return dfs(root, -Infinity);
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let dfs = (node, maxSoFar) => {
        if (!node) {
            return 0;
        }
        
        let nmberOfGoodNodesInLeftSubTree = dfs(node.left, Math.max(maxSoFar, node.val));
        let nmberOfGoodNodesInRightSubTree = dfs(node.right, Math.max(maxSoFar, node.val));
        let ans = nmberOfGoodNodesInLeftSubTree + nmberOfGoodNodesInRightSubTree;
        if (node.val >= maxSoFar) {
            ans++;
        }
        
        return ans;
    }
    return dfs(root, -Infinity);
};
