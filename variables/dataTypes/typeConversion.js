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
    //Implicit 
        const tCI = [5,true,'10'];

            // JS Convenience
            // Number + Number 
                console.log(tCI[0] + tCI[0]); // Operation 
            // Number + Boolean
                console.log(tCI[0] + tCI[1]); // Operation
            // Number + String 
                console.log(tCI[0] + tCI[2]); // Concatenation

            // Boolean + Number
                console.log(tCI[1] + tCI[0]); // Operation
            // Boolean + Boolena 
                console.log(tCI[1] + tCI[1]); // Operation
            // Boolean + String 
                console.log(tCI[1] + tCI[2]); // Concatenation

            // String + Number 
                console.log(tCI[2] + tCI[0]); // Concatenation
            // String + Boolean 
                console.log(tCI[2] + tCI[1]); // Concatenation 
            // String + String
                console.log(tCI[2] + tCI[2]); // Concatenation 

    //Explicit
        const tCE = {
            eG1:'52',
            eG3: '5.55',
            eG5: '101101'
        }; 

        //Number
        tCE.eG2 = parseInt(tCE.eG1); // Convertion by the programmer
        console.log(typeof(tCE.eG2)); 

        tCE.eG4 = parseFloat(tCE.eG3); 
        console.log(typeof(tCE.eG4)); 

            //Binary
            tCE.eG6 = parseInt(tCE.eG5,2);
            console.log(tCE.eG6, typeof(tCE.eG6));

        