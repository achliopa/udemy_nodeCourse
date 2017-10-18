const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
    // if(res !== 44) {
    //     throw new Error(`Expected 44 but got ${res}`);   
    // }
});

it('should return the square of a number', () => {
    var res = utils.square(10);
    expect(res).toBe(100).toBeA('number');
});

it('should expect some values', () => {
   //expect(12).toNotBe(12);
   //expect({name: 'Andrew'}).toBe({name: 'Andrew'});
   expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
   expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
});