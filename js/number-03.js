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
  NodeCount() {
    let ctr = 0;
    let node = this.Head;
    while (node) {
      ctr++;
      node = node.next;
    }
    return ctr;
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
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
console.log("Original Linked list:")
numList.displayList();
var ctr = numList.NodeCount();
console.log("Number of elements in the said Linked list: " + ctr)

