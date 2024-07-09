const numbers = [4, 2, 5, 1, 3];

// ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]


//descending order
numbers.sort((a, b) => b-a);