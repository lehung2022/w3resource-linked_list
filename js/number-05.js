class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }
    add(newNode) {
        let node = this.Head;
        if (node == null) {
            this.Head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    insertAt(index, newNode) {
        let node = this.Head;
        if (index == 0) {
            newNode.next = node;
            this.Head = newNode;
            return;
        }
        while (--index) {
            if (node.next !== null)
                node = node.next;
            else
                throw Error("Index Out of Bound");
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
    }
    insertFirst(value) {
        this.insertAt(0, value);
    }
    displayList() {
        let node = this.Head;
        var str = ""
        while (node) {
            str += node.data + "->";
            node = node.next;
        }
        str += "NULL"
        console.log(str);
    }
}
let numList = new SinglyLinkedList();
numList.add(new Node(12));
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
numList.displayList();
console.log("Insert 100 at first position:")
numList.insertFirst(new Node(100));
numList.displayList();
console.log("Insert 10 at first position:")
numList.insertFirst(new Node(10));
numList.displayList();

