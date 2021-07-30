class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.length++;
    return this.length;
  }
  pop() {
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
