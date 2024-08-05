
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
    console.log(id,name,email);
}));


