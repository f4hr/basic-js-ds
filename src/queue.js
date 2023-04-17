const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = null;
    this.head = this.queue;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }

    let curr = this.tail;
    while(curr.next) {
      curr = curr.next;
    }

    curr.next = node;
  }

  dequeue() {
    const headValue = this.head.value;

    this.head = this.head.next;

    return headValue;
  }
}

module.exports = {
  Queue
};
