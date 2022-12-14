'use strict';

const LinkedList = require('../ll');

describe('Testing linked list', () => {
    it('Test creating a linked list', () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    })
})

describe('Insert to the beginning of the linked list', () => {
    it('Add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    });

    it('Add to a non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    })
})

describe('Append to the end of the Linked List', () => {
    it('Append to an empty LL', () => {
        const ll = new LinkedList();
        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })

    it('Append to non-empty LL', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');

        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })
})

describe('Delete the middle node', () => {
    it('deletemiddle() to a empty LL', () => {
        const ll = new LinkedList();
        ll.deletemiddle();
        expect(ll.head).toBeNull();
    })
    it('deletemiddle() to a non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.deletemiddle();
        expect(ll.head.value).toEqual('c');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    })
})

describe('Insert at a specific index', () => {
    it('insertAt() to an empty LL', () => {
        const ll = new LinkedList();
        ll.insertAt('a', 0);
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })
    it('insertAt() to a non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insertAt('c', 0);
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('c');
        expect(ll.head.next.next.value).toEqual('a');
        expect(ll.head.next.next.next).toBeNull();
    })
})