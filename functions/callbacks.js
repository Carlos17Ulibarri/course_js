
// Callback
const getUser = (id,callback)=>{
    const user = {
        id,           // Avoid redundancy {id:id}
        name:"user1",
        email:"user1@email.com"
    };

    setTimeout(()=>{
        callback(user);
    },3000);
};

getUser(10000111,(user=>{
    const {id,name,email} = user; // Destructuring
    //console.log(id,name,email);
}));

// Callback hell
const users = [
    {
        id:1,
        name:"user1"
    },
    {
        id:2,
        name:"user2"
    },
    {
        id:3,
        name:"user3"
    }
];

const dataUsers = [
    {
        id:1,
        email:"user1@mail.com"
    },
    {
        id:2,
        email:"user2@mail.com"
    },
    {
        id:3,
        email:"user3@mail.com"
    }
];

const getUser1 = (id,callback)=>{
    const user = users.find((u)=> u.id === id);

    if(user){
        callback(null,user);
    }else{
        callback(`User with ID: ${id} not exist`);
    };
};

const getDataUser = (id,cB)=>{ 
    // IF this !null or !undefined =>> execute this
const data = dataUsers.find(dU => dU.id === id)?.email;
                                        //(?)Null check operator
    if(data){
        cB(null,data);
    }else{
        cB(`Data User with ID: ${id} not exist`);
    };
};

getUser1(3,(err,user)=>{
    if(err){
        console.log("ERROR");
        return console.log(err);
    };

    getDataUser(3,(err,data)=>{
        if(err){
            console.log("ERROR");
            return console.log(err);
        };
        const {id,name} = user;
        console.log(`User:\n{\nid:${id}\nname:${name}\nemail:${data}\n}`);
    });
});

