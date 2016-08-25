'use strict';

let mocha = require('mocha');
let chai = require('chai');
let assert = chai.assert;

let LinkedList = require('../lib/LinkedList');

describe('Constructor test', function() {
  it('should start empty', function() {
    let list = new LinkedList();
    assert.equal(list.size(), 0);
  });
});

describe('Increment list test', function() {
  it('Should increment size', function() {
    let list = new LinkedList();
    list.add(1);
    assert.equal(list.size(), 1);
  });
});
describe('Peek first test', function() {
  it('Peek first and last values', function() {
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    assert.equal(list.peekFirst(),2);
    assert.equal(list.peekLast(), 1);
  });
});
describe("Get first test", function(){
    it("should remove the first value",function(){
    let list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    assert.equal(list.size(), 3);
    assert.equal(list.getFirst(), 3);
    assert.equal(list.size(),2);
    });
});

describe("Get last test", function(){
    it("should get and remove the last value",function(){
        let list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        assert.equal(list.size(), 3);
        assert.equal(list.getLast(), 1);
        assert.equal(list.size(),2);
    });
});

