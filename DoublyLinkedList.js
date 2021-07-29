class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let node = this.tail;
    if (this.head == this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    node.prev = null;
    return node.value;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    oldHead.next = null;
    return oldHead.value;
  }
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, value) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.value = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index == 0) {
      return !!this.unshift(value);
    }
    if (index == this.length) {
      return !!this.push(value);
    }
    let node = new Node(value);
    let prev = this.get(index - 1);
    node.next = prev.next;
    node.prev = prev;
    prev.next.prev = node;
    prev.next = node;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prev = this.get(index - 1);
    let node = prev.next;
    prev.next = node.next;
    node.next.prev = prev;
    node.next = null;
    node.prev = null;
    this.length--;
    return node.value;
  }
  reverse() {
    let current = this.head,
      prev = null,
      next = null;
    this.head = this.tail;
    this.tail = current;
    while (current) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
