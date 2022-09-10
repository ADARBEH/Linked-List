'use strict';

const Node = require('../node');

describe('Testing Node class', () => {
  it('Test creating a new Node', () => {
    const val = ['test'];
    const node = new Node(val);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(['test']);
    expect(node.next).toBeNull();
  })
})