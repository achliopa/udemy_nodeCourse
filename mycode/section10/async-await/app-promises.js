const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve,reject) => {
        // const user = users.find((user) => {
        //     return user.id === id;
        // });
        // one liner
        const user = users.find((user) => user.id === id);
        
        if(user) {
            resolve(user);
        } else {
            reject(`Unable to find User with id of ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
  return new Promise((resolve,reject) => {
      resolve(grades.filter((grade) => grade.schoolId === schoolId));
  });  
};


// getUser(21).then((user) => {
//     console.log(user);
// }).catch((e) => {
//     console.log(e);
// });

// getGrades(99).then((grades) => {
//     console.log(grades);
// }).catch((e) => {
//     console.log(e);
// });


// chaining promises, nesting
const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;
        if(grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;            
        }
        return `${user.name} has an average of ${average}%`;

    });
};

// async/await basics

// async functions always return promises

const getStatusAlt = async (userId) => {
    // return in an async function equal resolve
    // throw new error in an async function equals reject
    // throw new Error('This is an error');
    // return 'Mike';
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    let average = 0;
    if(grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;            
    }
    return `${user.name} has an average of ${average}%`;
};

// identical to

// const getStatusAlt = () => {
//     return new Promise((resolve,reject) => {
//         resolve('Mike');
//     });
// };

getStatusAlt(1).then((name) => {
    console.log(name);
}).catch((e) => {
    console.log(e);
});


// getStatus(1).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });