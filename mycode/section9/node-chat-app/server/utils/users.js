// [{
//     id: 'dsf234$#$2',
//     name: 'Andrew',
//     room: 'The node society'
// }]

// addUser(id,name,room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// class Person {
//     constructor(name,age) {
//         this.age = age;
//         this.name = name;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// }

// var me = new Person('Sakis',35);
// console.log(me.getUserDescription());

class Users {
    constructor() {
        this.users = [];
    }
    addUser(id,name,room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        // return user that was removed
        var user = this.getUser(id);
        
        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        
        return user;
    }
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    
    getUserList(room) {
        var users = this.users.filter((user) => user.room === room );
        var namesArray = users.map((user) => user.name);
        
        return namesArray;
    }        
}

module.exports = {Users};