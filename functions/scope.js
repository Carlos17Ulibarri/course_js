// Scope Chain
/*
    Keyword  Scope     Hoisting  Reassignment  Re-statement
     var     Function     ✓          ✓              ✓
     let     Block        X          ✓              X
     const   Block        X          X              X   
*/

// Block
/*
    Something to contain a {...}

    Examples:
        function nameFunction(){...};
        for(expressions){...};
        while(condition){...};
        if(condition){...};
*/

// Execution context
/*
    - From Global context cannot access a variables of Local context.
    - From Local context can access a variables of Global context.
    - From Local context cannot access a variables of another Local context of the same level.
*/

//============================ Global context ============================ 
const sN = 108778;
const name = "Shirt";
const prize = 50;
//============================ Global context ============================ 

    //============================ Local context ============================
    function print (){

        const sN = 108779;
        const name = "Pants";
        
        console.log("Ticket: \n",`${sN}    ${name}    ${prize}`);
    };
    //============================ Local context ============================

//============================ Global context ============================ 
    print();
//============================ Global context ============================ 

 


