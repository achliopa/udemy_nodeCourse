const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    
    beforeEach(() => {
       users = new Users();
       users.users = [{
           id: '1',
           name: 'Mike',
           room: 'Node Course'
       },{
            id: '2',
           name: 'Bob',
           room: 'React Course'
       },{
            id: '3',
           name: 'Carlos',
           room: 'Node Course'
       }];
    });
    
    
   it('should add new user', () => {
        var users = new Users();
        var user =  {
           id: 123,
           name: 'Andrew',
           room: 'Freenode'
        }
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
   });
   
   it('should remove user', () => {
       var user = users.removeUser('1');
       expect(users.users).toNotInclude(user);
       expect(users.users.length).toBe(2);
       expect(user.name).toBe('Mike');
   });
   
    it('should not remove user', () => {
       var user = users.removeUser('44');
       expect(user).toNotExist();
       expect(users.users.length).toBe(3);
   });
   
   it('should find a user', () => {
        var user = users.getUser('1');
        expect(user).toEqual(users.users[0]);
   });
   
    it('should not find a user', () => {
        var user = users.getUser('44');
        expect(user).toNotExist();
   });
   
    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Carlos']);
   });
   
    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Bob']);
   });
});