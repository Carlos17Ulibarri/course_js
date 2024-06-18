// Programming languages

const pL = {
    type1: technologies = { // Compiled
        t: ['C','C++','Rust','Go','Swift']
        }, 
    /*
        Code translation before execution
        Type checking: { Static }

    */
    type2: technologies = { // Interpreted
        t: ['JS','Python','Ruby','PHP']
        }
    /*
        Code translation as it runs
        Type checking: { Dynamic,
            JS: {
                Weak typing: "Identification of data types until execution"
            }
        }
    */
};

// Dynamic execution
    const eG1 = 'My';
        console.log(eG1);
    const eG2 = 'My';
        console.log(eG2);
    //const eG3 = 'My
        //console.log(eG3); // Error 
    const eG4 = 'My';
        console.log(eG4);


//Type casting in JS
    const eGTC = [5,true];
    //Implicit 
        console.log(eGTC[0] + eGTC[1]) // Conversion to JS convenience

    //Explicit
        // Convertion by the programmer 