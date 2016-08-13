'use strict';

let Node = require('./LLNode');

class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    add(data){
        let current = new Node(data);
        if(this.head === null || this.length === 0){
            this.head = current;
            this.tail = current;
        }else{
            this.tail.next = current;
            current.prev = this.tail;
        }
        this.tail = current;
        this.length++;
    }
}



module.exports = LinkedList;