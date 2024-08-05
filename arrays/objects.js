
// Destructuring
const user = {
    name: "Kenny",
    username: "Kn77",
    email: "kenny77@mail.com"
};

const {name,username,email} = user;
console.log(name,username,email);

function destObj({name,username,email}){
    console.log(name,username,email);
};



