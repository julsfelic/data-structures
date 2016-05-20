'use strict';

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(node) {
    if (this.head === undefined) { this.head = node; }
    var foundNode = findNextNode(this.head);

    foundNode.next = node;
  }

  prepend(node) {
    node.next = this.head;
    this.head = node;
  }
}

function findNextNode(node) {
  if (node.next == null) { return node; }
  return findNextNode(node.next);
}

module.exports = LinkedList;

// Be able to add stuf to the list
  // Put in the middle
// Be able to check if a thing is on the list
// Get the length of the list
// Remove a node from the list
