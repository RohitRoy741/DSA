class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
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
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.length--;
    if (!this.length) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    return current.value;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return oldHead.value;
  }
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
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
    if (index < 0) {
      return false;
    }
    if (index == 0) {
      return !!this.unshift(value);
    }
    if (index >= this.length) {
      return !!this.push(value);
    }
    let node = new Node(value);
    let prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index == 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    let prev = this.get(index - 1);
    let node = prev.next;
    prev.next = node.next;
    this.length--;
    return node.value;
  }
  print() {
    for (let current = this.head; current; current = current.next) {
      console.log(current.value);
    }
  }
  reverse() {
    if (!this.head) {
      return this;
    }
    let current = this.head,
      prev = null,
      next = this.head.next;
    this.head = this.tail;
    this.tail = current;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}
