class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    append(value) {
        // adds a new node containing value to the end of the list
        let newNode = new Node(value);
        let currentNode;

        if (this.head === null) {
            this.head = newNode;
        } else {
            currentNode = this.head;

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            }

            currentNode.nextNode = newNode;
        }

        this.size++
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        this.head = new Node(value, this.head)
        this.size++
    }

    listSize() {
        // Returns the total number of nodes in the list
        return this.size
    }

    listHead() {
        // Returns the first node in the list
        return this.head
    }

    listTail() {
        // Returns the last node in the list
        if (!this.head) {
            return null
        }

        let currentNode = this.head

        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode
        }

        return currentNode
    }

    at(index) {
        // returns the node at the given index
        let counter = 0;
        let currentNode = this.head;

        while (currentNode && counter < index) {
            currentNode = currentNode.nextNode;
            counter++
        }

        return currentNode
    }

    pop() {
        // Removes the last element from the list
        if (!this.head) {
            return
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode
        }
        previousNode.nextNode = null;

        this.size--
    }

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false.
        if (!this.head) {
            return false
        }

        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode
        }
        return false;
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
    }

    toString() {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        if (!this.head) {
            console.log('null');
        }

        let result = '';
        let currentNode = this.head;

        while (currentNode) {
            result += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        console.log(result)
    }

    insertAt(value, index) {

    }

    removeAt(index) {

    }
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

const ll = new LinkedList()

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);

console.log(ll.contains(400))