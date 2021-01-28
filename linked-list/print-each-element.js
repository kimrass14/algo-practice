
// This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's data element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

const linkedList = new SinglyLinkedList()
linkedList.insertNode(16)
linkedList.insertNode(13)
//[16,13]

function printLinkedList(head) {
    while (head) {
        console.log(head.data)
        head = head.next
    }
}
