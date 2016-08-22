'use strict';

let mocha = require('mocha');
let chai = require('chai');
let assert = chai.assert;

let LinkedList = require('../lib/LinkedList');

describe('LinkedList', function() {
  it('should start empty', function() {
    let list = new LinkedList();
    assert.equal(list.size(), 0);
  });
});

describe('LinkedList', function() {
  it('Should increment size', function() {
    let list = new LinkedList();
    list.add(1);
    assert.equal(list.size(), 1);
  });
});
