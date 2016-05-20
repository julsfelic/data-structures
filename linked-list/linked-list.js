'use strict';

const Node = require('./node');

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = null;
  }

  append(node) {
    if (this.head === undefined) { this.head = node; }
    var foundNode = findNextNode(this.head);

    foundNode.next = node;
    this.tail = node;
  }
}

function findNextNode(node) {
  if (node.next == null) { return node; }
  return findNextNode(node.next);
}


module.exports = LinkedList;
// Be able to add stuf to the list
  // Prepend
  // Put in the middle
// Be able to check if a thing is on the list
// Get the length of the list
// Remove a node from the list
