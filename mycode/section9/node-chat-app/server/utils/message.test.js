var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', ()=> {
        var from = 'Andrew';
        var text = 'Hello there';
        var res = generateMessage(from,text);
        // expect(res.from).toBe(from);
        // expect(res.text).toBe(text);
        expect(res).toInclude({from,text});
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
       var from = 'Sakis';
       var latitude = 40.7128;
       var longitude = 74.0060;
       var res = generateLocationMessage(from, latitude, longitude);
       expect(res).toInclude({from});
       expect(typeof res.createdAt).toBe('number');
       expect(res.url).toInclude(latitude,longitude);
    });
})