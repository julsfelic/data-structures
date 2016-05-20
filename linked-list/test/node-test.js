'use strict';

const assert = require('assert');
const Node = require('../node');

describe('Node', function() {

  it('should exist', function() {
    assert.strictEqual(typeof Node, 'function');
  });

  it('should have a value', function() {
    let node = new Node(4);

    assert.strictEqual(node.val, 4);
  });

  it('should have a next node', function() {
    let nextNode = new Node(5);
    let node = new Node(4);
    node.next = nextNode;

    assert.strictEqual(node.next, nextNode);
  });

});
