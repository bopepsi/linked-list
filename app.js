// Singly Linked List
// Piece of data ---- val
// Reference to next node ---- next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Store Nodes in Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newVal = new Node(val);
        if (!this.tail) {
            this.head = newVal;
            this.tail = newVal;
        }
        if (this.tail) {
            this.tail.next = newVal;
            this.tail = newVal;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return;
        let pre = this.head;
        let temp = pre.next;
        while (temp.next) {
            pre = temp;
            temp = temp.next
        }
        pre.next = null;
        this.tail = pre;
        this.length--;
        return temp;
    }
    shift() {
        if (!this.head) return;
        let curr = this.head;
        this.head = curr.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return curr;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length || index < 0) return null;
        let temp = this.head;
        let counter = 0;
        while (counter < index) {
            temp = temp.next;
            counter++;
        }
        return temp;
    }
    set(index, val) {
        let node = this.get(index);
        if (node === null) return false;
        node.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return (this.unshift(val) ? true : false);
        if (index === this.length) return (this.push(val) ? true : false);
        let newNode = new Node(val);
        let preNode = this.get(index - 1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let pre = this.get(index - 1);
        let removedNode = pre.next
        pre.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    reverse() {
        let node = this.head;
        let i = 0;
        let next;
        let prev = null;
        while (i < this.length) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            i++;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }
}

//* Add test
let list = new SinglyLinkedList();
list.push('hi');
list.push('I');
list.push('am');
list.push('a');
list.push('list');