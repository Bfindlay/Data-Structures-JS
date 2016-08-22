'use strict';

class Node{
    constructor(data, prev, next){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this._size = 0;
        this.head = new Node(null,null,null);
        this.tail = new Node(null,this.head,null);
        this.head.next = this.tail;

    }
    //add data to the front of the linked list
    add(data){
        // create new node and set its connections to the head
        let node = new Node(data,this.head, this.head.prev);
        this.head.next.prev = node;
        this.head.next = node;
        //Connect the current head to the new node
        this._size++;
    }
    size(){
        return this._size;
    }
    peekFirst(){
        return this.head.next.data;
    }
     peekLast(){
        return this.tail.prev.data;
    }
}



module.exports = LinkedList;