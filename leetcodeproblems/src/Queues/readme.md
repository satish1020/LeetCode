While a stack followed a LIFO pattern, a queue follows FIFO (first in first out). In a stack, elements are added and removed from the same side. In a queue, elements are added and removed from opposite sides. Like with a stack, there are multiple ways to implement a queue, but the important thing that defines it is the abstract interface of adding and removing from opposite sides.

An example of a queue in the physical world is a line at a fast food restaurant. People leave the line when they finish ordering (from the front) and people enter the line from the back (opposite ends). The first people to enter the line will be the first ones that leave it (FIFO). An example of a queue in the practical software world would be any system that handles a job on a first come, first serve basis - for example, if multiple people are trying to use a printer at the same time.

Queues are trickier to implement than stacks if you want to maintain good performance. Like a stack, you could just use a dynamic array, but operations on the front of the array (adding or removal) are 
O
(
n
)
O(n), where 
n
n is the size of the array. Adding to a queue is called enqueue and deletions are called dequeue. If you want these operations to be 
O
(
1
)
O(1), you'll need a more sophisticated implementation.

One way to implement an efficient queue is by using a doubly linked list. Recall that with a doubly linked list, if you have the pointer to a node, you can add or delete at that location in 
O
(
1
)
O(1). A doubly linked list that maintains pointers to the head and tail (both ends, usually with sentinel nodes) can implement an efficient queue.

There is also a data structure called a deque, short for double-ended queue, and pronounced "deck". In a deque, you can add or delete elements from both ends. A normal queue designates adding to one end and deleting to another end.

For algorithm problems, queues are less common than stacks, and the problems are generally more difficult. The most common use of a queue is to implement an algorithm called breadth-first search (BFS), which we will learn about in a future chapter. Outside of BFS, unlike stack, there aren't many problems whose main focus is a queue - we'll still look at a few examples, but keep in mind that a queue is mostly used to implement BFS.

Note: if you're a beginner and struggle to grasp this article, don't be discouraged! This is one of the most difficult concepts taught in this course. Good news is, the concept is not super common in interviews, but still a good one to know. If you find yourself stuck, don't worry about moving on and coming back later.

Monotonic: (of a function or quantity) varying in such a way that it either never decreases or never increases.

A monotonic stack or queue is one whose elements are always sorted. It can be sorted either ascending or descending, depending on the algorithm. Monotonic stacks and queues maintain their sorted property by removing elements that would violate the property before adding new elements. For example, let's say you had a monotonically increasing stack, currently stack = [1, 5, 8, 15, 23]. You want to push 14 onto the stack. To maintain the sorted property, we need to first pop the 15 and 23 before pushing the 14 - after the push operation, we have stack = [1, 5, 8, 14].

Here's some pseudocode for maintaining a monotonic increasing stack over an input array:

Given an integer array nums

stack = []
for num in nums:
    while stack.length > 0 AND stack.top >= num:
        stack.pop()
    // Between the above and below lines, do some logic depending on the problem
    stack.push(num)

    As you can see, before we push a num onto the stack, we first check if the monotonic property would be violated, and pop elements until it won't be.

    As we discussed earlier in the sliding window chapter, despite the nested loop, the time complexity is still 
O
(
n
)
O(n), where 
n
n is the length of the array, because the inner while loop can only iterate over each element once across all for loop iterations, making the for loop iterations amortized 
O
(
1
)
O(1).

Monotonic stacks and queues are useful in problems that, for each element, involves finding the "next" element based on some criteria, for example, the next greater element. They're also good when you have a dynamic window of elements and you want to maintain knowledge of the maximum or minimum element as the window changes. In more advanced problems, sometimes a monotonic stack or queue is only one part of the algorithm. Let's look at some examples.