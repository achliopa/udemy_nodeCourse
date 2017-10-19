const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number');
        // if(res !== 44) {
        //     throw new Error(`Expected 44 but got ${res}`);   
        // }
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(3,4,(sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            }) ;
        });    
    });
    
    describe('#square', () => {
        it('should return the square of a number', () => {
            var res = utils.square(10);
            expect(res).toBe(100).toBeA('number');
        });

        it('should async square a number', (done) => {
            utils.asyncSquare(3,(square) => {
                expect(square).toBe(9).toBeA('number');
                done();
            }) ;
        });
    });

    // should verify first and last names are set
    // assert it includes firstName and lastName with proper values

});

it('should verify first and last names are set', () => {
    var user = {
        age: 35,
        location: "Thessaloniki",
    };
    var fullName = "Athanasios Chliopanos";
    var res = utils.setName(user, fullName);
    expect(res).toBe(user);
    expect(res).toBeA('object'). toInclude({
        firstName: 'Athanasios',
        lastName: 'Chliopanos'
    });
});


// it('should expect some values', () => {
//   expect(12).toNotBe(11);
//   //expect({name: 'Andrew'}).toBe({name: 'Andrew'});
//   expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   expect([2,3,4]).toInclude(2);
//   expect([2,3,4]).toExclude(5);
//   expect({
//       name: 'Andrew',
//       age: 25,
//       location: 'Philadelphia'
//   }).toInclude({
//       age: 25
//   });
//   expect({
//       name: 'Andrew',
//       age: 25,
//       location: 'Philadelphia'
//   }).toExclude({
//       age: 23
//   })
// });