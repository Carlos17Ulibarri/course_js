/*
  Array characteristics:
    - Can save many values {v1,v2,v3,.....,vn}
    - it´s considered an object
*/

//Structures 

const numbers = Array(1,2,3,4,5); //Create with values
console.log(numbers);

const numbers1 = Array(10); //Create with positions 
console.log(numbers1);

const colors = new Array('Blue','Red','Black'); //Second form to create with values
console.log(colors);

const numbers2 = [5,6,7,8,9];  //Syntax literal

const emptyArray = [] //Empty array initialization

//Mixted arrays 
const mixArray = [true,'Data',3,
    {
        otherData: 'data2'
    }
];

console.log(mixArray[3].otherData); //Array access 


// Destructuring
const technologies = ["Node.js","Nest.js","React.js"];

const [t1,t2,t3] = technologies;

console.log(t1,t2,t3);


const [,,t4] = technologies;
console.log(t4);

