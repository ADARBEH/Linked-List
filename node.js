'use strict';
// create a new Node class that has properties for the value stored in the Node.
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

module.exports = Node;