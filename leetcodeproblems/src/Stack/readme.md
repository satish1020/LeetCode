// String Problems where we use stack
String questions involving stacks are popular. Normally, string questions that can utilize a stack will involve iterating over the string and putting characters into the stack, and comparing the top of the stack with the current character at each iteration. Stacks are useful for string matching because it saves a "history" of the previous characters. Let's look at some examples.

Example 1: 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid if all open brackets are closed by the same type of closing bracket in the correct order, and each closing bracket closes exactly one open bracket.

For example, s = "({})" and s = "(){}[]" are valid, but s = "(]" and s = "({)}" are not valid.

The "correct" order is determined by whatever the previous opening bracket was. Whenever there is a closing bracket, it should correspond to the most recent opening bracket. For example, if the string starts "({[", and the next 3 characters are closing brackets, then they should be in the order of how recently their opening bracket appeared: "]})" (otherwise we would end up with something like "[)" occurring). The order is last in, first out (LIFO) - the last opening bracket we saw is the first one we should close, which is perfect functionality for a stack to provide.

As we iterate over the string, if we see an opening bracket, we should put it on the stack. If we see a closing bracket, we can check the most recent unclosed opening bracket by popping it from the top of the stack. If it matches, then continue, if it doesn't, or there is no opening bracket on the stack at all (this would occur in a case like "{}]"), then we know the string is invalid. In the end, there should be no unmatched open brackets (like in the case of "(){"), so the stack should be empty for the string to be valid.

How can we associate the opening and closing brackets together? We can use a hash map to map each opening bracket to its closing bracket. Then, when we see a closing bracket, we can use the top of the stack as a key and check if the value is equal to the current character.

Click here for a more detailed explanation if needed
We iterate over the string and try to process each bracket. At any given time, a stack holds all opening brackets we have seen so far that has not yet been closed. Every time we see an opening bracket, we push it onto the stack.

When we see a closing bracket, the most recent unmatched opening bracket must match. Otherwise, you would have a case of (} etc. somewhere. The top of the stack is the most recent unmatched opening bracket. If we have a match, we can just pop from the stack and move on. If we have a mismatch, the string is invalid. If the stack is empty, it means there is no available opening bracket - the string is also invalid in this case.

By using a stack, we can easily keep a history of unmatched opening brackets. If the stack is empty at the end, it means we matched all opening brackets.

The tricky part of this problem is that not all removals are necessarily available at the start. As you can see in the example, deleting the "aa" is only possible after deleting the "bb". We don't need to delete the first character until we have already iterated quite a bit past it. What if the input was s = "abccba"? We have the same problem with the b now as well, and the a is two layers back. The deletion order is c -> b -> a. This follows the LIFO pattern, where the last (most recent) character is the first one to be deleted (the first half of characters being deleted is "abc", and we need to delete the c, then b, then a).

When we recognize a LIFO pattern, we know we can use a stack. Iterate over the input and put characters in the stack. At each step, if the top of the stack is the same as the current character, we know that they are adjacent (at some point in time) and can be deleted.

Remember that stacks are defined by their interface - we just need to add and remove from the same end. Because strings in C++ are mutable, we can just use a string as a stack and return the answer directly. In Java, we can use StringBuilder as a stack as its a convenient way to get the answer in string format at the end. This algorithm has a time and space complexity of 
O
(
n
)
O(n), where 
n
n is the length of the input. This is because the stack operations in all implementations above are 
O
(
1
)
O(1), and the stacks themselves can grow to 
O
(
n
)
O(n) size.

Example 3: 844. Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".

Once again, we can recognize that the backspace follows the LIFO pattern, where the first character to be deleted is the one that was most recently typed. We can just simulate the typing of the strings using a stack, and then compare them at the end.

When typing characters, push them onto a stack. Whatever character is at the top of the stack is the most recently typed character, so when we backspace, we can just pop. Make sure to be careful of the edge case where we backspace on an empty string.