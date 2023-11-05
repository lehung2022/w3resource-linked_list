class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head;
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

    index_of(el) {
        let index = 0;
        let node = this.Head;
        while (node) {
            if (node.data === el) {
                return index;
            }
            node = node.next;
            index++;
        }
        return -1;
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
numList.add(new Node(16));
console.log("Singly Linked list:")
numList.displayList();
result = numList.index_of(12);
console.log("Index of 12 in the said link list: " + result);
result = numList.index_of(13);
console.log("Index of 13 in the said link list: " + result);
result = numList.index_of(14);
console.log("Index of 14 in the said link list: " + result);
result = numList.index_of(16);
console.log("Index of 16 in the said link list: " + result);
