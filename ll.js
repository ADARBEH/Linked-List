'use strict';

const Node = require('./node');

// Create a new Node class that has properties for the value stored in the Node.
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert a new node at the head of the list
    insert(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.size++;
        } else {
            node.next = this.head;
            this.head = node
            this.size++; // increment the size of the list
        }
    }


}

module.exports = LinkedList;

