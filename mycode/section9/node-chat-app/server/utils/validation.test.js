var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
       var input = true;
       var res = isRealString(input);
       expect(res).toBe(false);
       input = 423424;
       res = isRealString(input);
       expect(res).toBe(false);
    });
    
    it('should reject string with only spaces', () => {
      var input = '     ';
       var res = isRealString(input);
       expect(res).toBe(false);
    });
    
    it('should allow string with non-space characters', () => {
       var input = '  Lord of the Rings   ';
       var res = isRealString(input);
       expect(res).toBe(true);
    });
});