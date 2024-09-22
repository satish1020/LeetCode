

Linked Lists:
Before starting this chapter, you need to have a basic understanding of object-oriented programming concepts, including classes, objects, and attributes.

Let's start by introducing the concept of a node. A node can be thought of as an element, but with more information than just one piece of data like an integer or string. Nodes are an abstract idea - for example, let's say you had an array [1, 2, 3]. You could imagine each element as a node with two pieces of information: the integer, and the index. So the second element would be something like

data: 2
index: 1
Arrays are implemented under the hood in a way that the elements are stored contiguously in memory. Let's say you declared an array to hold 32 bit integers. Each element in the array is at an address that is 4 bytes (32 bits) away from its neighbors. This allows the programmer to access elements in an array with indexing (like arr[6] etc.).

A linked list is a data structure that is similar to an array. It also stores data in an ordered manner, but it is implemented using node objects (you will have a custom class that defines the node object). Each node will have a "next" pointer, which points to the node representing the next element in the sequence.

Here's some example code for creating a linked list to represent the data 1 --> 2 --> 3. As you can see, the class that defines a node has a field val which will hold the data, and a next pointer which references the next node. In the code, we are creating three nodes, one for each number, then setting the next pointers accordingly. You can try playing around with the code yourself in the interactive playground (you can edit the code and run it to see the console output).

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

(function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    one.next = two;
    two.next = three;
    let head = one;
    
    console.log(head.val);
    console.log(head.next.val);
    console.log(head.next.next.val);
}());

We call the node with the 1 the head because it is the start of the linked list. Usually, you will want to keep a reference to the head. This is because the head is the only node from where you can reach all elements in the linked list (you might have noticed that we can't go backward), so by keeping a reference to it, you ensure that you never "lose" any elements.

Advantages and disadvantages compared to arrays
To be honest, the advantages and disadvantages are not super relevant in terms of algorithm problems. This is because almost all the problems that involve linked lists will have the linked list as part of the input, so there isn't a decision on if you should use it, you're forced to. However, there are a few problems that use a linked list as part of the optimal algorithm, and you may be asked trivia in an interview, so it's still good to know the advantages and disadvantages.

The main advantage of a linked list is that you can add and remove elements at any position in 
O
(
1
)
O(1). The caveat is that you need to have a reference to a node at the position in which you want to perform the addition/removal, otherwise the operation is 
O
(
n
)
O(n), because you will need to iterate starting from the head until you get to the desired position. However, this is still much better than a normal (dynamic) array, which requires 
O
(
n
)
O(n) for adding and removing from an arbitrary position.

The main disadvantage of a linked list is that there is no random access. If you have a large linked list and want to access the 150,000th element, then there usually isn't a better way than to start at the head and iterate 150,000 times. So while an array has 
O
(
1
)
O(1) indexing, a linked list could require 
O
(
n
)
O(n) to access an element at a given position.

A few other notes that are less relevant for algorithm problems but may come up in an interview discussion - linked lists have the advantage of not having fixed sizes. While dynamic arrays can be resized, under the hood they still are allocated a fixed size - it's just that when this size is exceeded, the array is resized, which is expensive. Linked lists don't suffer from this. However, linked lists have more overhead than arrays - every element needs to have extra storage for the pointers. If you are only storing small items like booleans or characters, then you may be more than doubling the space needed.

Mechanics of a linked list
Understanding how to manipulate linked list nodes and pointers using code is essential not only to solve linked list interview questions, but the underlying concept of handling pointers is fundamental for any software engineer.

Assignment (=)

When you assign a pointer to an existing linked list node, the pointer refers to the object in memory. Let's say you have a node head:

let ptr = head;
head = head.next;
head = null;

let ptr = head;
head = head.next;
head = null;

After these lines of code, ptr still refers to the original head node, even though the head variable changed. This is the first important concept: variables remain at nodes unless they are modified directly (ptr = something is the only way to modify ptr).

Chaining .next

If you have multiple .next, for example head.next.next, everything before the final .next refers to one node. For example, given a linked list 1 -> 2 -> 3, if you have head pointing at the first node, and you do head.next.next, you are actually referring to 2.next, because head.next is the 2. We'll soon see that this is a very useful technique.

Traversal

Iterating forward through a linked list can be done with a simple loop. This is the usual code that you will use to do so: as an example let's get the sum of all values from an integer linked list:

let getSum = head => {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }

    return ans;
}

The final node's next pointer is null. Therefore, after doing head = head.next at the final node, head becomes null and the while loop ends.

Moving to head.next is the equivalent of iterating to the next element in an array. Traversal can also be done recursively:

let getSum = head => {
    if (!head) {
        return 0;
    }

    return head.val + getSum(head.next);
}

The final node's next pointer is null. Therefore, after doing head = head.next at the final node, head becomes null and the while loop ends.

Moving to head.next is the equivalent of iterating to the next element in an array.
Traversal can also be done recursively:


let getSum = head => {
    if (!head) {
        return 0;
    }

    return head.val + getSum(head.next);
}

// Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head;
    
    while(fast && fast.next){
          fast = fast.next.next;
          slow = slow.next
    }
    return slow;
};


Reversing Linked list


While reversing a linked list is a common interview problem in itself, it is also a technique that can be a step in solving different problems. Elegantly performing the reversal requires a good understanding of how to move pointers around, which we will aim to achieve in this article.

Imagine that we have a linked list 1 -> 2 -> 3 -> 4, and we want to return 4 -> 3 -> 2 -> 1. Let's say we keep a pointer curr that represents the current node we are at. Starting with curr at the 1, we need to get the 2 to point to curr. The problem is, once we iterate (curr = curr.next) to get to the 2, we no longer have a pointer to the 1 because it is a singly linked list. To get around this, we can use another pointer prev that tracks the previous node.

At any given node curr, we can set curr.next = prev to switch the direction of the arrow. Then, we can update prev to be curr in preparation for the next node. However, if we change curr.next, we will lose that next node. To fix this, we can use a temporary variable nextNode to point to the next node before changing any of the other pointers.


let reverseList = head => {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextNode = curr.next; // first, make sure we don't lose the next node
        curr.next = prev;         // reverse the direction of the pointer
        prev = curr;              // set the current node to prev for the next node
        curr = nextNode;          // move on
    }

    return prev;
}

The time complexity of this algorithm is 
O
(
n
)
O(n) where 
n
n is the number of nodes in the linked list. The while loop runs 
n
n times, and the work done at each iteration is 
O
(
1
)
O(1). The space complexity is 
O
(
1
)
O(1) as we are only using a few pointers.

This exercise is a great one to practice operations on a linked list because it demonstrates the thought process needed. Solutions to linked list problems are usually simple and elegant - to get to them, think about what you need, and solve the problem one step at a time. In this example, we had the following thought process:

When we are at a node curr, we need to set its next pointer to the node we were at previously.
Use a prev pointer to track the previous node.
The prev pointer needs to also update every iteration.
After updating curr.next, set prev = curr in preparation for the next node.
If we set curr.next = prev, then we lose the reference to the original curr.next.
Use nextNode to keep a reference to the original curr.next.
From here, it's easy to convert these instructions into code, and we have created an efficient algorithm.

Let's look at another example.

Example: 24. Swap Nodes in Pairs

Given the head of a linked list, swap every pair of nodes. For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6, return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.

Again, let's break down what we need to do step by step, and how we can accomplish it. Consider the first pair of nodes as A -> B.

Starting with head at node A, we need node B to point here.

We can accomplish this by doing head.next.next = head
However, if we change B.next, we will lose access to the rest of the list.

Before applying the change in step 1, save a pointer nextNode = head.next.next.
head.next.next is used differently in steps 1 and 2. When it is before the assignment operator (=), it is changing head.next's next node. When it is after the assignment, it is referring to head.next's next node.

We now have B pointing at A. We need to move on to the next pair C, D. However, A is still pointing at B, which isn't what we want. If we move on to the next pair immediately, we will lose a reference to A, and won't be able to change A.next.

Save A in another pointer with prev = head (we haven't changed head yet so it's still pointing at A).
To move to the next pair, do head = nextNode.
Once we move on to the next pair C -> D, we need A to point to D.

Now that head is at C, and prev is at A, we can do prev.next = head.next.
The first pair A, B is fully completed. B points to A and A points to D. When we started, we had head pointing to A. After going through steps 1 - 4, we completed A, B. Right now, we have head pointing to C. If we go through the steps again, we will have complete C, D, and be ready for the next pair. We can just repeat steps 1 - 4 until all pairs are swapped. But what do we return at the end?

Once all the pairs are finished, we need to return B. Unfortunately, we lost the reference to B a long time ago.
We can fix this by saving B in a dummy node before starting the algorithm.
What if there is an odd number of nodes? In step 4, we set A.next to C.next. What if there were only 3 nodes, so C.next was null?

Before moving on to the next pair, set head.next = nextNode. This is setting A.next to C.
Note that this effect will be overridden by step 4 in the next swap if there is still a pair of nodes remaining.
Since in step 2 we do head.next.next, we need our while loop condition to check for both head and head.next. That means if there is only one node left in the list, the while loop will end after the current iteration. As such, this effect wouldn't be overridden.
For example, consider the list A -> B -> C -> D. At some point, we have B <-> A C -> D. Here, we perform step 6, and we get B -> A -> C -> D. When we start swapping the pair C, D, step 4 will set A.next to D, which overrides what we just did with step 6. But if D didn't exist, then the iteration would have just ended. In that scenario, we would have B -> A -> C, which is what we want.
To summarize the steps:

Performs an edge swap from A -> B -> C -> ... to A <-> B C -> ....
Make sure we can still access the rest of the list beyond the current pair (saves C).
Now that A <-> B is isolated from the rest of the list, save a pointer to A to connect it with the rest of the list later. Move to the next pair.
Connect the previous pair to the rest of the list. In this case connecting A -> D.
Use a dummy pointer to keep a reference to what we want to return.
Handle the case when there's an odd number of nodes.
The order of the steps here is not chronological. It's just an order that we might think of when we are trying to consider the requirements of the problem.

The time complexity of this algorithm is 
O
(
n
)
O(n) where 
n
n is the number of nodes in the linked list. The while loop runs 
n
n times, and the work done at each iteration is 
O
(
1
)
O(1). The space complexity is 
O
(
1
)
O(1) as we are only using a few pointers.

Whenever you face a linked list problem, break the problem down. List all the things you need to accomplish and what you need to do to achieve them. As you can see from this example, the order in which you think of the steps will not necessarily be the same as the order in which the steps should happen.

On LeetCode, you may miss a few steps initially, and a wrong answer submission will point that out. In an interview setting, be vocal about your thought process and your interviewer should help you fill any gaps. Having an example test case like 1 -> 2 -> 3 -> 4 in front of you while you work through the logic will be extremely helpful, especially if you have a pen and paper.

Reversal as only part of an algorithm
We mentioned that reversing a linked list is "also a technique that can be a step in solving different problems". Before we move on, let's quickly see an example of this.

2130. Maximum Twin Sum of a Linked List asks for the maximum pair sum. The pairs are the first and last node, second and second last node, third and third last node, etc.

The trivial solution would be to convert the linked list into an array, that way you can access the pairs easily by indexing. The more elegant 
O
(
1
)
O(1) space solution is as follows:

Find the middle of the linked list using the fast and slow pointer technique from the previous article.
Once at the middle of the linked list, perform a reversal. Basically, reverse only the second half of the list.
After reversing the second half, every node is spaced n / 2 apart from its pair node, where n is the number of nodes in the list which we can find from step 1.
With that in mind, create another fast pointer n / 2 ahead of slow. Now, just iterate n / 2 times from head to find every pair sum slow.val + fast.val.
Try to implement the code for this algorithm yourself as an exercise.

Unlike the previous examples, the reversal is not the entire point of the problem, but just a tool used to arrive at a better solution. Notice how we also used the fast and slow pointers from the previous article.

There are a few more uses of linked lists that we haven't talked about.

For example, when we talked about hashing, we mentioned that collisions can be handled using a technique called chaining, which makes use of linked lists. Later, we'll talk about a data structure called a deque, which can be implemented with a linked list. In the meantime, try these practice problems using the same process that we used in this chapter: break down what you need to do and how you can do it, step by step.

Most linked list problems don't have tricks, you just need a strong understanding of how to move pointers around. The best way to train this skill is to practice.