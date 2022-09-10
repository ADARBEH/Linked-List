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

    // insert a new node at the end of the list
    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.size++; // increment the size of the list
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
                this.size++; // increment the size of the list
            }
            currentNode.next = node;
        }
    }

    // delete a node from the list
    deletemiddle() {
        if (!this.head) {
            return;
        } else {
            let currentNode = this.head;
            let counter = 0;
            while (currentNode.next) {
                if (counter === Math.floor(this.size / 2) - 1) {
                    currentNode.next = currentNode.next.next;
                    return;
                    this.size--; // decrement the size of the list
                }
                counter++;
                currentNode = currentNode.next;
            }
        }
    }

    // insert a new node before a specific location in the list
    insertAt(val, index) {
        const node = new Node(val);
        if (!this.head) {
          this.head = node;
          this.size++;
        } else {
          let currentNode = this.head;
          let counter = 0;
          while (currentNode.next) {
            if (counter === index) {
              node.next = currentNode.next;
              currentNode.next = node;
              this.size++; // increment the size of the list
              return;
            }
            counter++; // counter to keep track of the index
            currentNode = currentNode.next;
          }
        }
      }


}

module.exports = LinkedList;

