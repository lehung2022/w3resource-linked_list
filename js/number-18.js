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

    is_present(val) {
        let current = this.Head;
        while (current) {
            if (current.data === val) {
                return true;
            }
            current = current.next;
        }
        return false;
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
result = numList.is_present(12);
console.log("Is 12 present in the said link list: " + result);
result = numList.is_present(14);
console.log("Is 14 present in the said link list: " + result);
result = numList.is_present(17);
console.log("Is 17 present in the said link list: " + result);
result = numList.is_present(19);
console.log("Is 19 present in the said link list: " + result);
