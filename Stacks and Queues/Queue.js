class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this.length;
  }
  dequeue(value) {
    if (!this.first) {
      return undefined;
    }
    let oldHead = this.first;
    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return oldHead.value;
  }
}
