const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let parent = null;
    let curr = this.rootNode;
    while(curr) {
      if (curr.data === data) {
        return curr;
      }
      parent = curr;
      curr = (data < curr.data) ? curr.left : curr.right;
    }
    const node = new Node(data);
    if (!parent) {
      this.rootNode = node;
      return node;
    }
    parent[(data < parent.data ? 'left' : 'right')] = node;
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let curr = this.rootNode;
    while(curr) {
      if (curr.data === data) {
        return curr;
      }
      curr = (data < curr.data) ? curr.left : curr.right;
    }
    return null;
  }

  remove(data) {
    const isLeaf = this.isLeaf;

    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (isLeaf(node)) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    let curr = this.rootNode;
    if (!curr) {
      return null;
    }
    while(curr.left) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.rootNode;
    if (!curr) {
      return null;
    }
    while(curr.right) {
      curr = curr.right;
    }
    return curr.data;
  }

  isLeaf(node) {
    return node.left === null && node.right === null;
  }
}

module.exports = {
  BinarySearchTree
};
