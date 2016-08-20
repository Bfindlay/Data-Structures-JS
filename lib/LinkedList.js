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
        var  size = 0;
        let head = new Node(null,null,null);
        let tail = new Node(null,this.head,null);
        head.next = tail;
    }
    //add data to the front of the linked list
    add(data){
        let insertionNode = new Node(data,this.head.next,this.head);
        
        

        this.size++;
    }
    size(){
        return this.size;
    }
}



module.exports = LinkedList;