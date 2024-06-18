// Null
const dP = {
    dP1: null
};

console.log(typeof(dP.dP1)); // JS error when printing null as object/complex data type 

// Undefined
dP.dP2; // Declaration without assignment
console.log(dP.dP2);

// Symbol 
/*
It is a type of data whose values ​​are unique and immutable. 
Symbols are useful for creating unique properties for objects.
*/
dP.dP3 = {
    sL1: Symbol('id'),
    sL2: Symbol(1),
    sL3: Symbol(1),
};
console.log(dP.dP3);
console.log(dP.dP3.sL2 === dP.dP3.sL3); // Same values ​​with different identifier

const user = [];
user[dP.dP3.sL1] = 'kjfbkjbjkf52';
console.log(user);

//BigInt 
/*
It is a built-in object that provides a way to represent integers larger than 2^53 - 1, 
which is the upper limit for the Number data type in JavaScript.
*/
const bIN = {
    n1: 545448946444664894894894564n,
    n2: 545448946444664894894894564  // n e +/-n
};
console.log(bIN.n2);