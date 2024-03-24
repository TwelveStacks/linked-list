class LinkedList {
    constructor() {
        this.head = null
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }

    append(value) {
        // adds a new node containing value to the end of the list
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
    }

    size() {
        // Returns the total number of nodes in the list
    }

    head() {
        // Returns the first node in the list
    }

    tail() {
        // Returns the last node in the list
    }

    at(index) {
        // returns the node at the given index
    }

    pop() {
        // Removes the last element from the list
    }

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false.
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
    }

    toString() {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }
}