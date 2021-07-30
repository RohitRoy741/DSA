class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }
  search(value) {
    function recursive(node) {
      if (!node) return null;
      if (node.value === value) {
        return node;
      } else if (node.value < value) {
        return recursive(node.right);
      } else if (node.value > value) {
        return recursive(node.left);
      }
    }
    return recursive(this.root);
  }
  levelOrder() {
    if (!this.root) {
      return [];
    }
    let queue = [],
      result = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      result.push(node.value);
    }
    return result;
  }
  preOrder() {
    let result = [];
    function traverse(node) {
      if (!node) {
        return;
      }
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    function traverse(node) {
      if (!node) {
        return;
      }
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    function traverse(node) {
      if (!node) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
}

let tree = new BST();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(15);
tree.insert(25);
tree.insert(35);
console.log(tree.postOrder());
