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
    removeAt(index_pos) {
        let nodes = this.Head;
        if (index_pos === 0) {
            if (nodes !== null) {
                nodes = nodes.next;
                this.Head = nodes;
            }
            else
                throw Error("Index Out of Bound");

            return;
        }
        while (--index_pos) {
            if (nodes.next !== null)
                nodes = nodes.next;
            else
                throw Error("Index Out of Bound");
        }
        nodes.next = nodes.next.next;
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
numList.add(new Node(14));
numList.displayList();
console.log("Remove the node where index position is 0:")
numList.removeAt(0)
numList.displayList();
console.log("Remove the node where index position is 3:")
numList.removeAt(3)
numList.displayList();
console.log("Remove the node where index position is 2:")
numList.removeAt(2)
numList.displayList();
