
// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


function insertNodeAtPosition(head, data, position) {
    const newNode = new SinglyLinkedListNode(data)
    
    const leader = traverseToIndex(position-1)
    
    const follower = leader.next

    leader.next = newNode
    newNode.next = follower

    
    function traverseToIndex(leaderIndex) {
        let counter = 0
        let currentNode = head
        while (leaderIndex != counter) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    return head

}
insertNodeAtPosition(3, 1, 2)