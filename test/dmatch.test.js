var mocha = require('mocha');
var assert = require('chai').assert;

var $match = require('../src/dmatch');

describe('$match', function () {
    
    it('should be a function', function () {
        assert(typeof $match === 'function');
    });
    
    it('should return a function when called', function () {
        assert(typeof $match() === 'function');
    });
    
    describe('pattern', function () {
        
        it('should be a function', function () {
            assert(typeof $match.pattern === 'function');
        });
        
        describe('boolean', function () {
            
            it('should be a function', function () {
                assert(typeof $match.pattern.boolean === 'function');
            });
            
            it('should return a matcher object', function () {
                assert($match.pattern.boolean() instanceof $match.Matcher);
            });
            
            it('should return a boolean matcher', function () {
                assert.equal($match.pattern.boolean().matchType, 'boolean');
            });
            
        });

    });
    
});