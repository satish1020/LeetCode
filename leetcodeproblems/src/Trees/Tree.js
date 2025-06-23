Binary trees
Report Issue
This entire chapter will make heavy use of recursion.If you aren't comfortable with recursion, please review the "Introduction to recursion" article in the first chapter before continuing.

Nodes and graphs
In this chapter, we will be learning about trees and graphs, which is probably the most common type of interview question(hash maps aren't really a "type" of question, and "array" or "string" is too broad). Trees and graphs are abstract data structures that show up everywhere in both the physical world and the software world. This is the longest chapter of the course, but for good reason. A huge amount of interview problems give trees or graphs as the input, and the entire problem is focused on them. As such, it is crucial that anyone going into a coding interview has a strong understanding of them.

Let's start by revisiting what a node is. We looked at nodes in the linked lists chapter - recall that a node is an abstract data type with two things. First, a node stores data. This data can be whatever you want - an integer, a boolean, a hash map, your own custom objects, or all of the above. Second, a node stores pointers to other nodes.

A graph is any collection of nodes and their pointers to other nodes.In fact, linked lists and trees are both types of graphs.As a topic, graphs are extremely broad.There is an entire field of study dedicated to graphs called graph theory.

Even though a tree is a type of graph, trees and graphs are considered different topics when it comes to algorithm problems.Because graphs are the more advanced / difficult topic, we will start by looking at trees.

// Tree Node Class
class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }


function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }


const depthFirstSearch = (node) => {
    if (node === null) {
        return;
    }
    depthFirstSearch(node.left);
    depthFirstSearch(node.right);
    return;
}

const preOrderDFS = (node) => {
    if (node === null) {
        return;
    }
    console.log(node.val);
    preOrderDFS(node.left);
    preOrderDFS(node.rigt);
    return;
}

const inOrderTraversal = (node) => {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
    return;
}

const postOrderTraversal = (node) => {
    if (node === null) {
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
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function buildTree() {
    let rootNode = new TreeNode(0);
    let leftNode = new TreeNode(1);
    let rightNode = new TreeNode(2);
    rootNode.left = leftNode;

    rootNode.right = rightNode;
}

// Example 1: 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, find the length of the longest path from the root to a leaf.

// Suppose your tree is:

//       1
//      / \
//     2   3
//    /
//   4
// Step-by-step Execution
// 1. Start at the root (node 1)
// Call: maxDepth(1)
// root is not null, so continue.
// 2. Recurse left to node 2
// Call: maxDepth(2)
// root is not null, so continue.
// 3. Recurse left to node 4
// Call: maxDepth(4)
// root is not null, so continue.
// 4. Recurse left from node 4 (null)
// Call: maxDepth(null)
// root is null, so return 0.
// 5. Recurse right from node 4 (null)
// Call: maxDepth(null)
// root is null, so return 0.
// 6. Calculate for node 4
// leftDepth = 0, rightDepth = 0
// Return Math.max(0, 0) + 1 = 1
// 7. Recurse right from node 2 (null)
// Call: maxDepth(null)
// root is null, so return 0.
// 8. Calculate for node 2
// leftDepth = 1 (from node 4), rightDepth = 0
// Return Math.max(1, 0) + 1 = 2
// 9. Recurse right from node 1 to node 3
// Call: maxDepth(3)
// root is not null, so continue.
// 10. Recurse left from node 3 (null)
// Call: maxDepth(null)
// root is null, so return 0.
// 11. Recurse right from node 3 (null)
// Call: maxDepth(null)
// root is null, so return 0.
// 12. Calculate for node 3
// leftDepth = 0, rightDepth = 0
// Return Math.max(0, 0) + 1 = 1
// 13. Calculate for root node 1
// leftDepth = 2 (from node 2), rightDepth = 1 (from node 3)
// Return Math.max(2, 1) + 1 = 3

// maxDepth(1)
//   -> maxDepth(2)
//       -> maxDepth(4)
//           -> maxDepth(null) // returns 0
//           -> maxDepth(null) // returns 0
//       // returns 1 to maxDepth(2)
//   -> maxDepth(null) // returns 0
// // returns 2 to maxDepth(1)
// -> maxDepth(3)
//     -> maxDepth(null) // returns 0
//     -> maxDepth(null) // returns 0
// returns 1 to maxDepth(1)


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


// Step-by-Step Execution

//   1
//    / \
//   2   3
//  /
// 4
// Initialization

// [stack = [[1, 1]]]
// ans = 0
// First Iteration

// Pop [1, 1] → node = 1, depth = 1
// Update: ans = Math.max(0, 1) = 1
// Push [2, 2] (left child), [3, 2] (right child)
// Stack: [[2, 2], [3, 2]]
// Second Iteration

// Pop [3, 2] → node = 3, depth = 2
// Update: ans = Math.max(1, 2) = 2
// Node 3 has no children, so nothing is pushed
// Stack: [[2, 2]]
// Third Iteration

// Pop [2, 2] → node = 2, depth = 2
// Update: ans = Math.max(2, 2) = 2
// Push [4, 3] (left child)
// Stack: [[4, 3]]
// Fourth Iteration

// Pop [4, 3] → node = 4, depth = 3
// Update: ans = Math.max(2, 3) = 3
// Node 4 has no children, so nothing is pushed
// Stack: []
// Stack is Empty

// Loop ends
// Return

// Return ans, which is 3
// This approach uses a stack to simulate recursion and keeps track of the depth at each node. The maximum depth found during traversal is returned at the end.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthIterativeApproach = function (root) {
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
        curr += node.val;
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
// For this tree:

// Start at root (3, -Infinity): 3 >= -Infinity → good (1), newMax = 3
// Left child (1, 3): 1 < 3 → not good (0), newMax = 3
// Right child (4, 3): 4 >= 3 → good (1), newMax = 4
// Left (1, 4): 1 < 4 → not good (0)
// Right (5, 4): 5 >= 4 → good (1)
// Total good nodes: 3 (nodes 3, 4, 5)

// Summary:

// The function uses DFS to traverse the tree.
// It keeps track of the max value seen so far on the path.
// It counts nodes that are greater than or equal to all previous nodes on their path.
// Remember to fix the base case and typo for correct results!
var goodNodes = function (root) {
    const dfs = (node, maxSoFar) => {
        let good = node.val > maxSoFar ? 1 : 0;
        let maxSoFar = Math.max(maxSofar, node.val);

        return good + dfs(node.left, maxSofar) + dfs(node.right, maxSoFar);
    }
    return dfs(root, -Infinity);
}


var test = (root) => {
    const dfsGoodNode = (node, maxSoFar) => {
        let good = node.val > maxSoFar ? 1 : 0;
        let maxSoFar = Math.max(maxSoFar, node.val);

        return good + dfsGoodNode(node.left, maxSoFar) + dfsGoodNode(node.right, maxSoFar);
    };
    return dfsGoodNode(root, -Infinity);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
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


/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
    if (!root) {
        return 0;
    }

    let stack = [[root, -Infinity]];
    let ans = 0;

    while (stack.length) {
        let [node, maxSoFar] = stack.pop();
        if (node.val >= maxSoFar) {
            ans++;
        }

        if (node.left) {
            stack.push([node.left, Math.max(maxSoFar, node.val)]);
        }
        if (node.right) {
            stack.push([node.right, Math.max(maxSoFar, node.val)]);
        }
    }

    return ans;
};


// Example 2: 112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if there exists a path from the root to a leaf such that the sum of the nodes on the path is equal to targetSum, and return false otherwise.
const hasPathSum = (root, targetSum) =>{
    const dfs  = (node, curr) =>{
        if(!node){
            return false;
        }
        
        curr += node.val;

        if(!root.left && !root.right){
            return curr === targetSum;
        }

        let leftNodes = dfs(node.left);
        let rightNodes = dfs(node.right);
        return leftNodes || rightNodes;
    }   
    return  dfs(root, 0);
}

// Example 4: 100. Same Tree
// Given the roots of two binary trees p and q, check if they are the same tree. Two binary trees are the same tree if they are structurally identical and the nodes have the same values.


// recurssively call same funciton
const dfsSameTres = (p, q) => {
     // base case both nodes are null
    if (p === null && q === null) return true;
    // if either of them are null return false
    if (p === null || q === null) return false;
    // if they are not equal return false.
    if (p.val !== q.val) return false;
    return dfsSameTres(p.left, q.left) && dfsSameTres(p.right, q.right);
};

// same tree with inner funciton
const dfsSameTresInnerFunction = (p, q) => {
    const isSameTree = (p, q) => {
        // both nodes are null
        if (p === null && q === null) return true;
        // if either of the nodes are null return false
        if (p === null || q === null) return false;
        // if the nodes are not the same return false
        if (p.val !== q.val) return false;
        // recursively check left and right subtrees
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
    return isSameTree(p, q);
};

var isSameTree = function(p, q) {
    let stack = [[p, q]];
    while (stack.length) {
        let [p, q] = stack.pop();
        if (p == null && q == null) {
            continue;
        }
        if (p == null || q == null) {
            return false;
        }
        if (p.val != q.val) {
            return false;
        }
        stack.push([p.left, q.left]);
        stack.push([p.right, q.right]);
    }
    return true;
};

// Question:

// We have only kept it in the course as a "bonus" since it is a classic problem.

// Bonus example: 236. Lowest Common Ancestor of a Binary Tree

// Given the root of a binary tree and two nodes p and q that are in the tree, return the lowest common ancestor (LCA) of the two nodes. The LCA is the lowest node in the tree that has both p and q as descendants (note: a node is a descendant of itself).

//      3
//      / \
//     5   1
//    / \ / \
//   6  2 0  8
//     / \
//    7   4

// Certainly! Here’s a step-by-step explanation of the lowestCommonAncestor function for a binary tree:

// Step-by-Step Explanation
// 1. Base Case
// If root is null, return null.
// (This means we've reached the end of a branch without finding p or q.)
// 2. If root is p or q
// If the current node (root) is either p or q, return root.
// (This means we've found one of the nodes we're looking for.)
// 3. Recursive Search
// Recursively search for p and q in the left subtree:
// let left = lowestCommonAncestor(root.left, p, q);
// Recursively search for p and q in the right subtree:
// let right = lowestCommonAncestor(root.right, p, q);
// 4. If both left and right are non-null
// If both recursive calls return non-null, it means p and q are found in different subtrees of the current node.
// So, the current node (root) is their lowest common ancestor.
// Return root.
// 5. If only one side is non-null
// If only one of left or right is non-null, return that non-null value.
// This means both p and q are located in the same subtree, or only one of them exists in the tree.
// 6. If both sides are null
// If both are null, return null.
// (Neither p nor q found in this subtree.)

// If p = 5 and q = 1, the function will:

// Find 5 in the left subtree and 1 in the right subtree of 3.
// Both left and right are non-null at 3, so 3 is the lowest common ancestor.

// Summary:

// The function works recursively, bubbling up the found nodes.
// The first node where both left and right are non-null is the LCA.
// If only one is found, it keeps returning that node up the call stack.

var lowestCommonAncestor = function(root, p, q) {
    // Base case: if root is null, return null (end of branch)
    if (!root) {
        return null;
    }

    // If root is either p or q, we've found one of the nodes
    if (root == p || root == q) {
        return root;
    }

    // Recursively search for p and q in the left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null, p and q are found in different subtrees
    // So, root is their lowest common ancestor
    if (left && right) {
        return root;
    }

    // If only one side is non-null, return that side (either p or q found below)
    if (left) {
        return left;
    }

    // If neither side has p or q, return right (could be null)
    return right;
};

// this is the dfs from intuit udemy
// resources https://replit.com/@ZhangMYihua/Matrix-traversal-DFS#index.js

const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const traversalDFS = function(matrix) {
  const seen = 
    new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
}

const dfs = function(matrix, row, col, seen, values) {
  if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
  
  seen[row][col] = true;
  values.push(matrix[row][col]);

  for(let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
}

console.log(traversalDFS(testMatrix));

// gemini.
// Example Usage:
// const myMatrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
//
// const initialRow = 0; // Starting row for DFS
// const initialCol = 0; // Starting column for DFS
//
// // Initialize the 'seen' array to keep track of visited cells.
// // It should have the same dimensions as the matrix and be filled with 'false' initially.
// const seenNodes = new Array(myMatrix.length)
//   .fill(0) // Fill with a placeholder (e.g., 0) before mapping
//   .map(() => new Array(myMatrix[0].length).fill(false));
//
// // Initialize the 'values' array to store the traversal order.
// const traversalValues = [];
//
// // Start the DFS traversal
// dfsTraversal(myMatrix, initialRow, initialCol, seenNodes, traversalValues);
//
// // The 'traversalValues' array now contains the elements in DFS order
// console.log("DFS Traversal Order:", traversalValues);

// Example with a different starting point or larger matrix:
// const anotherMatrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 100, 110, 120]
// ];
// const anotherSeen = new Array(anotherMatrix.length)
//     .fill(0)
//     .map(() => new Array(anotherMatrix[0].length).fill(false));
// const anotherValues = [];
// dfsTraversal(anotherMatrix, 1, 1, anotherSeen, anotherValues); // Starting from (1, 1)
// console.log("DFS Traversal Order (from 1,1):", anotherValues);
const dfsTraversal = (matrix, row, col, seen, values) => {
    // Directions for up, right, down, left
    const directions = [
        [-1, 0], // up
        [0, 1],  // right
        [1, 0],  // down
        [0, -1]  // left
    ];

    // Base cases for stopping the recursion:
    // 1. Out of bounds (row or col is less than 0 or exceeds matrix dimensions)
    // 2. Cell has already been visited (seen[row][col] is true)
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) {
        return;
    }

    // Mark the current cell as visited
    seen[row][col] = true;

    // Add the current cell's value to our results array
    values.push(matrix[row][col]);

    // Recursively call DFS for all valid neighboring cells
    for (let i = 0; i < directions.length; i++) {
        const currDir = directions[i];
        const nextRow = row + currDir[0];
        const nextCol = col + currDir[1];
        dfsTraversal(matrix, nextRow, nextCol, seen, values);
    }
};
