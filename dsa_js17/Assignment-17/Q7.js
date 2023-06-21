//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

class ListNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class FrontMiddleBack {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    pushFront(val) {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    pushMiddle(val) {
      const newNode = new ListNode(val);
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else if (this.size % 2 === 0) {
        const middleNode = this.getNodeAtIndex(this.size / 2 - 1);
        newNode.prev = middleNode;
        newNode.next = middleNode.next;
        middleNode.next.prev = newNode;
        middleNode.next = newNode;
      } else {
        const middleNode = this.getNodeAtIndex(Math.floor(this.size / 2));
        newNode.prev = middleNode.prev;
        newNode.next = middleNode;
        middleNode.prev.next = newNode;
        middleNode.prev = newNode;
      }
      this.size++;
    }
  
    pushBack(val) {
      const newNode = new ListNode(val);
      if (this.tail === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    popFront() {
      if (this.head === null) {
        return -1;
      }
  
      const frontVal = this.head.val;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
  
      return frontVal;
    }
  
    popMiddle() {
      if (this.head === null) {
        return -1;
      }
  
      const middleIndex = Math.floor(this.size / 2);
      const middleNode = this.getNodeAtIndex(middleIndex);
  
      if (middleNode === this.head) {
        return this.popFront();
      } else if (middleNode === this.tail) {
        return this.popBack();
      } else {
        middleNode.prev.next = middleNode.next;
        middleNode.next.prev = middleNode.prev;
        this.size--;
        return middleNode.val;
      }
    }
  
    popBack() {
      if (this.tail === null) {
        return -1;
      }
  
      const backVal = this.tail.val;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
  
      return backVal;
    }
  
    getNodeAtIndex(index) {
      let current = this.head;
      let i = 0;
      while (current !== null && i < index) {
        current = current.next;
        i++;
      }
      return current;
    }
  }
  
  const queue = new FrontMiddleBack();
  const methodCalls = [
    "pushFront",
    "pushBack",
    "pushMiddle",
    "pushMiddle",
    "popFront",
    "popMiddle",
    "popMiddle",
    "popBack",
    "popFront"
  ];
  const methodArgs = [
    [1],
    [2],
    [3],
    [4],
    [],
    [],
    [],
    [],
    [],
  ];
  console.log(methodArgs);
  