const users = [
    { id:1,name:"user1" },
    { id:2,name:"user2" },
    { id:3,name:"user3" }
];

const dataUsers = [
    { id:1,email:"user1@mail.com" },
    { id:2,email:"user2@mail.com" },
   // { id:3,email:"user3@mail.com" }
];

const getUser = (id) => {
    return new Promise ((resolve,reject)=>{         // Callbacks:                                       
        const user = users.find((u)=> u.id === id); //     - revolve: execute when all makes correct.
                                                    //     - reject: execute when something generate a error
        (user)
        ? resolve(user)
        : reject(`User with ID: ${id} not exist`);
    });

    
};

const getEmail = (id) => {
    return new Promise ((res,rej) => {
        const email = dataUsers.find((dU) => dU.id === id)?.email;    

        (email)
        ? res(email)
        : rej(`Email doesn't exist`);
    });
};

const id = 4;
/*
getUser(id)
    .then((user) => {
        getEmail(id)
            .then((email) => {
                user.email = email;
                console.log(user);
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
*/
let user1 = {};
// In chain
/*
getUser(id)
    .then((user) =>{
        user1 = user;
        return getEmail(id);
    })
    .then((email) => console.log(user1,email))
    .catch((err) => console.log(err));
*/

// aysnc - await 

const getUser1 = async (id) => {
    try {                              //** 
        const gU = await getUser(id);  //** 
        const gE = await getEmail(id); //** Resolve
        gU.email = gE;                 //** 
        return gU;                     //** 
    } catch (error) {
        throw error                    //Reject
    }
};

getUser1(id).then((res) => console.log(res)).catch((err) => console.log(err));


