# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Arrays:

Common patterns:

Subarrays/substrings, subsequences, and subsets
Let's quickly talk about the differences between these types and what to look out for when encountering them in problems.

Subarrays/substrings

As a reminder, a subarray or substring is a contiguous section of an array or string.

If a problem has explicit constraints such as:

Sum greater than or less than k
Limits on what is contained, such as the maximum of k unique elements or no duplicates allowed
And/or asks for:

Minimum or maximum length
Number of subarrays/substrings
Max or minimum sum
Think about a sliding window. Note that not all problems with these characteristics should be solved with a sliding window, and not all sliding window problems have these characteristics. These characteristics should only be used as a general guideline.

If a problem's input is an integer array and you find yourself needing to calculate multiple subarray sums, consider building a prefix sum.

The size of a subarray between i and j (inclusive) is j - i + 1. This is also the number of subarrays that end at j, starting from i or later.

Subsequences

A subsequence is a set of elements of an array/string that keeps the same relative order but doesn't need to be contiguous.
For example, subsequences of [1, 2, 3, 4] include: [1, 3], [4], [], [2, 3], but not [3, 2], [5], [4, 1].

Subsets

A subset is any set of elements from the original array or string. The order doesn't matter and neither do the elements being beside each other. For example, given [1, 2, 3, 4], all of these are subsets: [3, 2], [4, 1, 2], [1]. Note: subsets that contain the same elements are considered the same, so [1, 2, 4] is the same subset as [4, 1, 2].

You may be thinking, what is the difference between subsequences and subsets if subsets with the same elements are considered the same? In subsequences, the order matters - let's say you had an array of integers and you needed to find a subsequence with 3 consecutive elements (like 1, 2, 3). This would be harder than finding a subset with 3 consecutive elements because, with a subset, the 3 elements simply need to exist. In a subsequence, the elements need to exist in the correct relative order.

Again, since we are only in the first chapter, it is hard to talk much about subsets. We will see subsets being used in the backtracking chapter.

One thing to note is that if a problem involves subsequences, but the order of the subsequence doesn't actually matter (let's say it wants the sum of subsequences), then you can treat it the same as a subset. A useful thing that you can do when dealing with subsets that you can't do with subsequences is that you can sort the input, since the order doesn't matter.


The time complexity of appending to the end of a dynamic array is: O(1) amortized

Sometimes the operation will cost O(n), but it doesn't happen often enough to make the average operation cost O(n).

Explanation:
Appending an element to the end of a dynamic array is said to have an amortized time complexity of O(1). This means that while individual append operations might not always run in constant time, the average time taken per operation over a sequence of operations is constant. Here's why:

Initial State: A dynamic array starts with an initial capacity. When elements are added, they are placed in the array until it reaches its capacity.

Doubling Strategy: Once the array reaches its capacity and a new element needs to be added, the dynamic array typically allocates a new array with double the previous capacity. It then copies all elements from the old array to the new one and adds the new element. This operation takes O(n) time, where n is the number of elements in the array before resizing.

Amortization: Although the resizing operation is costly (O(n)), it happens less frequently as the array grows. For example, after the first resize, you can add one more element without resizing, after the second resize, you can add three more, then seven, and so on. The cost of resizing is "spread out" over the insertions that don't require resizing.

Amortized Analysis: To understand the amortized cost, consider adding n elements to an empty dynamic array. Some inserts are O(1), and some are O(n) due to resizing. However, if you sum up all the work done for n insertions and divide by n, the average work per insertion (the amortized cost) tends towards O(1). This is because the doubling strategy significantly reduces the frequency of resizing as the array grows.

In summary, while any single append operation might take O(n) in the worst case (due to resizing), the amortized time complexity over a series of appends is O(1) because the cost of resizing is distributed across many operations, making the average cost per operation constant.

amortized
Constraints:


<!-- 
In JavaScript, for...of and for...in loops are used to iterate over data structures, but they serve different purposes and operate in distinct ways:

for(let char of s) iterates over iterable objects, such as arrays, strings, and other iterable objects, directly obtaining the values of the elements. In the context of a string s, each iteration of a for...of loop will give you one character of the string at a time, in order.

for(let char in s) iterates over the enumerable properties of an object, which means it is used to loop through the keys (property names) of an object. When used with an array or a string, the variable char will be assigned the index (position) of the element or character in the array or string, not the value at each iteration.

Given the context of your function reverseWordsAndCharacters(s), which iterates over a string to manipulate its characters, for(let char of s) is the appropriate choice because you are interested in working directly with the characters of the string s. Using for(let char in s) would give you the indices (numeric positions) of the characters in the string, which is not what you need for this operation. -->