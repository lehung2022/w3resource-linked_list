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

    size() {
        let current = this.Head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    //Delete the last item from the list
    deleteTail() {
        this.removeAt(this.size() - 1);
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
console.log("Singly Linked list:")
numList.displayList();
console.log("Remove the tail from the said Singly Linked list:")
numList.deleteTail();
numList.displayList();
console.log("Again remove the tail from the said Singly Linked list:")
numList.deleteTail();
numList.displayList();
