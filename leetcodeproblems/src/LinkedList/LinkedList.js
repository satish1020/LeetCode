// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

const ListNode = (value = 0, next = null) => {
    this.value = value;
    this.next = next;
  };
  
  const doublyLinkedList = (value = 0, next = null, tail = null) => {
    this.value = value;
    this.next = next;
    this.tail = tail;
  };
  
  // (function main() {
  //     let one = new ListNode(1);
  //     let two = new ListNode(2);
  //     let three = new ListNode(3);
  //     one.next = two;
  //     two.next = three;
  //     let head = one;
  
  //     console.log(head.val);
  //     console.log(head.next.val);
  //     console.log(head.next.next.val);
  // }());
  
  const main = () => {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
  
    one.next = two;
    two.next = three;
    let head = one;
    let tail = three;
  
    console.log("***had val", head.val);
    console.log("***head next", head.val.next);
    console.log("***Tail", tail);
  };
  
  // get sum
  const getSumLinkedList = (head) => {
    let ans = 0;
    while (head) {
      ans += head.val;
      head = head.next;
    }
    return ans;
  };
  
  // recursive sum
  const getSumRecursiveLinkedList = (head) => {
    if (!head) {
      return 0;
    }
  
    return getSumRecursiveLinkedList(head);
  };
  
  // Let prevNode be the node at position i - 1
  const addLinkedListNode = (prevNode, nodeToAdd) => {
    prevNode.next = nodeToAdd;
    nodeToAdd.next = prevNode.next;
  };
  
  // Let prevNode be the node at position i - 1
  const deleteLinkedListNode = (prevNode) => {
    prevNode.next = prevNode.next.next;
  };
  
  // Note: it is unusual that you will have a pointer to the node at the position before where you want to perform an operation, but we are writing these functions as a demonstration. Typically you will be doing these operations on the fly, as you iterate through the list. If you don't have a pointer to the desired position at all, you will need to iterate from the head until you are at the desired position, which means the operation would be
  // O
  // (
  // n
  // )
  // O(n). If you have the pointer already, it's
  // O
  // (
  // 1
  // )
  // O(1).
  
  const addDoublyLinkedListNode = (node, nodeToAdd) => {
    const prevNode = node.prev;
    const nextNode = node.next;
  
    // creating links for node to add
    nodeToAdd.next = nextNode;
    nodeToAdd.prev = prevNode;
  
    // deleting links for the existing node.
    prevNode.next = nodeToAdd;
    nextNode.prev = nodeToAdd;
  };
  
  const deleteDoubleLinkedListNode = (node) => {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  };
  
  const getMiddleNode = (head) => {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.nextl;
    }
  
    return slow.val;
  };
  
  const hasCycle = (head) => {
    let slow = head;
    let fast = head;
    let hasCycle = false;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        hasCycle = true;
      }
    }
    return hasCycle;
  };
  
  
  // [{v:11, n: 1}, {v: 12, n:2}, {v: 13, n:0}, {v: 14, n: null}];
  // { 11: 1, 12: 2, }
  const hasCycle = function(head) {
    let seen = new Set();
    while (head) {
        if (seen.has(head)) {
            return true;
        }
        
        seen.add(head);
        head = head.next;
    }
    
    return false;
  };
  
  
  const kNode = (head, k) =>{
  
   let slow, fast = head;
  
   for(var i =0; i< k;i++){
     fast = fast.next;
   }
  
    while(fast && fast.next){
     slow = slow.next;
     fast = fast.next;
    }
  
    return slow;
  }
  
  
  
  const reverseLinkedList = (head) =>{
    let curr = head;
    let prev = null;
  
    while(curr){
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    head = prev;
    return head;
  }
  
  
  var swapPairs = (head) =>{
  let prev = null;
  
  if(!head && !head.next){
    return head;
  }
    
   const dummy = head.next;
    while(head){
      if(prev){
        prev.next = head.next;
      }
      prev = head;
      let nextNode = head.next.next;
      head.next.next = head;
      head.next = head;
      head.next = nextNode;
      head = nextNode;
    }
    return dummy;
  }
  
  
  const findMiddle =(head)=>{
  
  }
  
  
  const reverseSecondLinkedList = (head) =>{
  
  }
  
  //Maximum Twin Sum of a Linked List
  
  function findMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  
  
  function reverseLinkedList(head) {
    let current = head;
    let prev = null;
    let nextNode = null;
    while (current) {
      nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    return prev;
  }
  
    // prev null
    //curr 1 // dummy2 //head 3
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
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
  var swapPairs = function(head) {
    // Check edge case: linked list has 0 or 1 nodes, just return
    if (!head || !head.next) {
        return head;
    }
    
    let dummy = head.next;              // Step 5
    let prev = null;                    // Initialize for step 3
    while (head && head.next) {
        if (prev) {
            prev.next = head.next;      // Step 4
        }
        prev = head;                    // Step 3
        
        let nextNode = head.next.next;  // Step 2
        head.next.next = head;          // Step 1
        
        head.next = nextNode;           // Step 6
        head = nextNode;                // Move to next pair (Step 3)
    }
    
    return dummy;
  };
  
  function pairSum(head) {
    // Find the middle of the linked list
    let middle = findMiddle(head);
    // Reverse the second half of the linked list
    let reversedSecondHalf = reverseLinkedList(middle);
  
    // Calculate the maximum pair sum
    let maximumSum = 0;
    let start = head;
    while (reversedSecondHalf) {
      maximumSum = Math.max(maximumSum, start.val + reversedSecondHalf.val);
      reversedSecondHalf = reversedSecondHalf.next;
      start = start.next;
    }
  
    return maximumSum;
  }


  var reverseBetween = function (head, m, n) {
    let left = head,
        stop = false;
    const recurseAndReverse = (right, m, n) => {
        if (n == 1) return;
        right = right.next;
        if (m > 1) left = left.next;
        recurseAndReverse(right, m - 1, n - 1);
        if (left == right || right.next == left) stop = true;
        if (!stop) {
            [left.val, right.val] = [right.val, left.val];
            left = left.next;
        }
    };
    recurseAndReverse(head, m, n);
    return head;
};

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

//[1,2,,3,4,5], m = 2, n = 4
// [1,4,3,2,5]
var reverseBetween = function (head, m, n) {
    if (head === null) {
        return null;
    }
    let cur = head,
        prev = null;
    while (m > 1) {
        prev = cur;
        cur = cur.next;
        m--;
        n--;
    }
    let con = prev,
        tail = cur;
    let third = null;
    while (n > 0) {
        third = cur.next;
        cur.next = prev;
        prev = cur;
        cur = third;
        n--;
    }
    if (con !== null) {
        con.next = prev;
    } else {

        head = prev;
    }
    tail.next = cur;
    return head;
};