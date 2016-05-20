'use strict';

const assert = require('assert');
const LinkedList = require('../linked-list');
const Node = require('../node');

describe('LinkedList', function() {

  it('should exist', function() {
    assert(LinkedList);
  });

  it('should be a function', function() {
    assert.strictEqual(typeof LinkedList, 'function');
  });

  it('should have a head attribute', function() {
    let linkedList = new LinkedList();

    assert.strictEqual(linkedList.head, undefined);
  });

  it('should have a tail attribute', function() {
    let linkedList = new LinkedList();

    assert.strictEqual(linkedList.tail, null);
  });

  it('can take in a node for the head', function() {
    let node = new Node(2);
    let linkedList = new LinkedList(node);

    assert.strictEqual(linkedList.head.val, 2);
  });

  it('can append a node when head is undefined', function() {
    let node1 = new Node(6);
    let node2 = new Node(7);
    let linkedList = new LinkedList(node1);

    linkedList.append(node2);

    assert.strictEqual(linkedList.head.val, 6);
  });

  it('can append a node when head is occupied', function() {
    let node = new Node(6);
    let nextNode = new Node(7);
    let linkedList = new LinkedList(node);

    linkedList.append(nextNode);

    assert.strictEqual(linkedList.head.next.val, 7);
    assert.strictEqual(linkedList.tail.val, 7);
  });

  it('can append a node when there is a list', function() {
    let node1 = new Node(6);
    let node2 = new Node(7);
    let node3 = new Node(8);
    let linkedList = new LinkedList(node1);

    linkedList.append(node2);
    linkedList.append(node3);

    assert.strictEqual(linkedList.head.next.next.val, 8);
    assert.strictEqual(linkedList.tail.val, 8);
  });
});
