// JavaScript doesn't have any built-in efficient queue
// We'll just have to use a normal array
let queue = [];

// If you want to initialize it with some initial values:
let queue = [1, 2, 3];

// Enqueueing/adding elements:
queue.push(4);
queue.push(5);

// Dequeuing/removing elements:
queue.shift(); // 1
queue.shift(); // 2

// Check element at front of queue (next element to be removed)
queue[0]; // 3

// Get size
queue.length; // 3

(function main() {
  let queue = [];

  queue.push(1);
  queue.push(2);
  queue.push(3);

  while (queue.length) {
    console.log(queue.shift());
  }

  if (!queue.length) {
    console.log("Queue is empty!");
  }
})();


// Example: 933. Number of Recent Calls
// Implement the RecentCounter class. It should support ping(int t), which records a call at time t, and then returns an integer representing the number of calls that have happened in the range [t - 3000, t]. Calls to ping will have increasing t.
// t will be 1 then 100 then 3000 and then 4000
// queue = [1,100, 3000] --> pops 1, 100 and then pushes 4000 since 4000 -3000 is less than 3000.
// ans [1, 2,3,2] ---> length of the queue is number of calls happened in lat 3000 units of time.
// We have a stream of increasing integers, and every time we add an integer to the stream, we need to find how many numbers are in the stream within 3000. The brute force method would be to put all the integers in an array, and iterate over the array each time to count how many integers are within 3000. This would be very inefficient - let's say we have a value x. Once t goes beyond x + 3000, every future call to ping would have to iterate over x, even though we already know that x won't be included. We should get rid of x as soon as it is outdated.

// To do this with a dynamic array, we could just remove values less than t - 3000 from the front. However, this is still inefficient because removing from the front of an array is 
// O
// (
// n
// )
// O(n), where 
// n
// n is the size of the array. If we use an efficient queue instead, then those removals become 
// O
// (
// 1
// )
// O(1)! Let's use a queue to store the numbers, and at each call to t remove all the outdated elements before returning the count.
function RecentCounter() {
  this.queue = [];
  this.ping = function (t) {
    while (this.queue.length && 3000 < t - this.queue[0]) {
      this.queue.shift();
    }
    this.queue.push(t);
    return this.queue.length; // Return the length of the queue
  };
}

// or approach2


var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while (this.queue.length && this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    
    this.queue.push(t);
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */