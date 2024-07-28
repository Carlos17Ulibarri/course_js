/*
    Clousure: function has a access a variables of extern ambit, even after his execute.

    lexic ambit: every time that function is declare, create his lexic ambit, and can access to variables inside of this ambit and others superiors

*/

//Example
function father(){
    let f = 'TTTTTTTTTT';
    function child(){
        console.log(f);
    };
    return child;
};

const execute = father();
execute();

//Considerations 

function counter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
};

const excute1 = counter();


const excute2 = counter();

excute1(); //Memory space 1
excute1(); //Memory space 1

excute2(); //Memory space 2

// **No exceed the use of Clousures, because they can consume a lot of memory.

function outer(name){
    const msg = "Hi, ";
    function inner(/*name*/){  //Pending: cannot obtain the parameter
        console.log(msg + name);
    };
    return inner;
}

const cA = outer("Carlos");
const cB = outer("Alberto");
cA();
cB();
