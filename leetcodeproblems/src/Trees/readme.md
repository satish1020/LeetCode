This entire chapter will make heavy use of recursion. If you aren't comfortable with recursion, please review the "Introduction to recursion" article in the first chapter before continuing.

Binary trees
Report Issue
This entire chapter will make heavy use of recursion. If you aren't comfortable with recursion, please review the "Introduction to recursion" article in the first chapter before continuing.

Nodes and graphs
In this chapter, we will be learning about trees and graphs, which is probably the most common type of interview question (hash maps aren't really a "type" of question, and "array" or "string" is too broad). Trees and graphs are abstract data structures that show up everywhere in both the physical world and the software world. This is the longest chapter of the course, but for good reason. A huge amount of interview problems give trees or graphs as the input, and the entire problem is focused on them. As such, it is crucial that anyone going into a coding interview has a strong understanding of them.

Let's start by revisiting what a node is. We looked at nodes in the linked lists chapter - recall that a node is an abstract data type with two things. First, a node stores data. This data can be whatever you want - an integer, a boolean, a hash map, your own custom objects, or all of the above. Second, a node stores pointers to other nodes.

A graph is any collection of nodes and their pointers to other nodes. In fact, linked lists and trees are both types of graphs. As a topic, graphs are extremely broad. There is an entire field of study dedicated to graphs called graph theory.

Even though a tree is a type of graph, trees and graphs are considered different topics when it comes to algorithm problems. Because graphs are the more advanced/difficult topic, we will start by looking at trees.

The nodes of a graph are also called vertices, and the pointers that connect them are called edges. In graphical representations, nodes/vertices are usually represented with circles and the edges are lines/arrows that connect the circles (we saw this in the linked lists chapter).


What is a tree?
Like a linked list, a tree is a type of graph. Also like a linked list, there are multiple types of trees. In this course, we will be focusing on binary trees. Let's take a look at what a binary tree is.

Recall that the start of a linked list was called the head. The start of a binary tree is called the root.

In a linked list, a node's pointer pointed to the next node. In a tree, a node has pointers to its children. If a node A is pointing to a node B, then B is a child of A, and A is the parent of B. The root is the only node that has no parent. Note that in a tree, a node cannot have more than one parent.

So what makes a binary tree "binary"? In a binary tree, all nodes have a maximum of two children. These children are referred to as the left child and the right child. Note that there isn't really a difference between a child being on the left or the right, it's just the convention used to refer to the children and convenient for graphical representations.

To summarize, a binary tree is a collection of nodes. Every node has between 0 to 2 children, and every node except the root has exactly one parent.

Here is an example of a binary tree:

binary tree

The node with value 3 is the root node. As you can see, every node has exactly one parent and at most 2 children. The 6 is the left child of 5 and the 4 is the right child of 2.

Trees (not just binary trees) are implemented all around us in real life. Some examples:

File systems
A comment thread on an app like Reddit or Twitter
A company's organization chart
In each of these examples, the respective root nodes and children would be:

The root directory, and subfolders/files
The original post/tweet, and the comments and replies
The CEO, and direct reports
To be more specific, let's look at the company example. If we modeled the company as a tree, then each person is a node, and an edge exists from A to B if A manages B. In that case, the CEO would be the root because they are at the "top" of the company and are not managed by any other employee. Let's say the CEO has 6 direct reports - the people in the C-Suite (like CFO, COO, CTO). This means the CEO has 6 "children", which also means that this is not a binary tree. Each of the people in the C-Suite will have people reporting to them, like VPs, and those VPs will have directors reporting to them, and so on.

The important characteristics of the company that makes it a tree are that each person only has 1 manager (parent), and the entire tree is connected (if you start at anyone and continuously trace their managers, you will always end up at the CEO).

Tree terminology
There is some tree-specific terminology that you will need to learn.

The root node is the node at the "top" of the tree. Every node in the tree is accessible starting from the root node. In most tree questions, the root of the tree will be given as the input, just like how in linked lists, the head was given as the input.

If you have a node A with an edge to a node B, so A -> B, we call A the parent of node B, and node B a child of node A.

If a node has no children, it is called a leaf node. The leaf nodes are the leaves of the tree.

The depth of a node is how far it is from the root node. The root has a depth of 0. Every child has a depth of parentsDepth + 1, so the root's children have a depth of 1, their children have a depth of 2, and so on.

Lastly, perhaps the most important thing to understand: a subtree of a tree is a node and all its descendants. Trees are recursive - you can treat a subtree as if it was its own tree with the chosen node being the root. What do we mean by this? Let's look at the company example again. The entire company is represented by the tree rooted at the CEO. But what if we only cared about the engineering department? Let's say the CTO has a direct report who is an SVP (Senior Vice President) of engineering, and all engineers are under this person. Take this SVP, and separate them from the rest of the company (remove their connection to the CTO). What are you left with? It's still a valid tree, but now the SVP is the root! This subtree now represents the engineering department instead of the entire company. This is the most fundamental idea for solving tree problems - you can take any given node and treat it as its own tree, which allows you to solve problems in a recursive manner.

To illustrate the concept of a subtree, take a look at the following image:


Enclosed in the green box is the subtree rooted at the node with value 1. This can be called the right subtree of the node with value 3 (the root). Notice that this subtree is a binary tree itself.

Code representation
Just like with a linked list, binary trees are implemented using objects of a custom class. This is the typical class definition that will be provided to you in algorithm problems:

javascript
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


java
class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode(int val){
    this.val = val;
  }
}

In binary tree problems, you will be given a reference to the root of a binary tree as the input. You can access the root's left subtree with root.left and the root's right subtree with root.right. Like with linked lists, each node will also carry a value val as data. In a linked list, the tail (last node) has its next pointer as null. In a binary tree, if a node does not have a left child, then node.left will be null, and vice-versa with the right child. Remember that if both children are null, then the node is a leaf.

In the next article, we're going to learn how to traverse through binary trees and solve problems related to them. Binary trees are among the most common problems and it is important that you fully understand their nature and how they are represented in code before continuing. As such, please review this article as many times as you need until you are comfortable.

Before starting this article, please make sure you have a complete understanding of what a binary tree is and how it is represented in code, as well as a solid understanding of recursion.

In this article, we'll talk about how to traverse binary trees. Tree traversal is how we access the elements of a tree, and thus is mandatory for solving tree problems.

Recall that in the linked list chapter, we traversed a linked list using the following code:

let getSum = head => {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }

    return ans;
}

The above code starts at the head and visits each node to find the sum of all values in the linked list.

For each node, there is a moment in the code execution where the head variable is referencing the node. We traverse by using the .next attribute.

Traversing a binary tree follows the same idea. We start at the root and traverse by using the child pointers .left and .right. When traversing linked lists, we usually do it iteratively. With binary trees, we usually do it recursively.

There are two main types of tree traversals. The first is called depth-first search (DFS). For binary trees specifically, there are 3 ways to perform DFS - preorder, inorder, and postorder (don't worry though, the type you choose rarely matters). The other main type of traversal is called breadth-first search (BFS). Let's start by looking at DFS.

Depth-first search (DFS)

Recall that the depth of a node is its distance from the root.
In a DFS, we prioritize depth by traversing as far down the tree as possible in one direction (until reaching a leaf node) before considering the other direction. For example, let's say we choose left as our priority direction. We move exclusively with node.left until the left subtree has been fully explored. Then, we explore the right subtree.

Trees are named as such because they resemble real-life trees. You can think of the paths of a binary tree as branches growing from the root. DFS chooses a branch and goes as far down as possible. Once it fully explores the branch, it backtracks until it finds another unexplored branch.

Because we need to backtrack up the tree after reaching the end of a branch, DFS is typically implemented using recursion, although it is also sometimes done iteratively using a stack. Here is a simple example of recursive DFS to visit every node:

Each call to dfs(node) is visiting that node. As you can see in the code, we visit the left child before visiting the right child.

let dfs = node => {
    if (!node) {
        return;
    }

    dfs(node.left);
    dfs(node.right);
    return;
}