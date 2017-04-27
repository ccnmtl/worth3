/* eslint-env mocha, node */

var assert = require('assert');
var utils = require('../src/utils.js').utils;

var sessionLengths = [10, 5, 15, 10, 20];

describe('id2idx', function() {
    it('returns an accurate index', function() {
        assert.equal(utils.id2idx('s0105', sessionLengths), 5);
        assert.equal(utils.id2idx('s0401', sessionLengths), 31);
        assert.equal(utils.id2idx('s0204', sessionLengths), 14);
        assert.equal(utils.id2idx('s0312', sessionLengths), 27);
        assert.equal(utils.id2idx('s0205', sessionLengths), 15);
    });
});

describe('idx2id', function() {
    it('returns an accurate id', function() {
        assert.equal(utils.idx2id(5, sessionLengths), 's0105');
        assert.equal(utils.idx2id(31, sessionLengths), 's0401');
        assert.equal(utils.idx2id(14, sessionLengths), 's0204');
        assert.equal(utils.idx2id(27, sessionLengths), 's0312');
        assert.equal(utils.idx2id(15, sessionLengths), 's0205');
    });
});
