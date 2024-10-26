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