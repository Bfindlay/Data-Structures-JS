'use strict';

let LinkedList = require('./lib/LinkedList');

let list = new LinkedList();

console.log(list.head);
list.add(2);
console.log(list.head);
list.add(3);
console.log(list.head);
list.add(4);
console.log(list.head);
list.add(5);

console.log(list.head);