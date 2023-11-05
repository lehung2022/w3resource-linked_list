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
    indexOf(data) {
        let ind = -1;
        let node = this.Head;
        while (node) {
            ++ind;
            if (node.data === data) return ind;
            node = node.next;
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
numList.displayList();
console.log("Find the first index that matches the value 14:")
console.log(numList.indexOf(14))
console.log("Find the first index that matches the value 5:")
console.log(numList.indexOf(5))

