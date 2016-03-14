var $match = (function () {
    'use strict';
    
    function Matcher (matchType) {
        this.setMatchType(matchType);
    }
    
    Matcher.prototype = {
        matchType: '',
        
        setMatchType: function (matchType) {
            this.matchType = matchType;
        }
    };
    
    function pattern () {
        throw new Error('Functionality not yet implemented');
    }
    
    pattern.boolean = function () {
        return new Matcher('boolean');
    };
    
    function dmatch () {
        return function () {};
    }
    
    dmatch.pattern = pattern;
    dmatch.Matcher = Matcher;
    
    if(typeof module !== 'undefined' && !!module.exports) {
        module.exports = dmatch;
    }
    
    return dmatch;
})();