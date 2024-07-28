// IF 
/*
    IF the conditional is correct, execution this. IF not, execution this.

    Structure

    if(conditional){
        // Instructions 
    }else if(conditional){
        // Instructions
    }else{
        // Instructions
    };
*/

    const secretNumber = Math.floor(Math.random() * 10 + 1);
    const insertNumber = 10;
    console.log(secretNumber);
    if(secretNumber === insertNumber){
        console.log('Numbers are equals');
    }else if(secretNumber > insertNumber){
        console.log('The Number is low')
    }else if(secretNumber < insertNumber){
        console.log('The Number is big')
    };

// Switch

/*
    Compare expressions with different options.

    Structure

    switch(expression){
        case valor1
            // Instructions
            break; -- Stop execution code
        case valor2
            // Instructions
            break;
        case n...
            // Instructions
            break;
        default:
            // Instructions
    }
*/

    const input = 'Argentin';

    //Review the continent of the country **Only of America

    switch(input){
        case "Argentina":
            console.log("The country belongs a America");
            break;
        case "México":
            console.log("The country belongs a America");
            break;
        case "Canada":
            console.log("The country belongs a America");
            break;
        default:
            console.log("The country belongs a another continent");
    };

// Loop
/* Repetitive code */

    // for

    /* 
        Increment Parameters 

        for(variable; conditional; increment){
            //instructions
        };
    */

    const list = ['One','Two','Three'];

    for(let i = 0; i < list.length; i++){
        console.log(list[i]);
    };

    // for of 

    /* 
        Something Parameters (Arrays & Strings)
            **Iteration over values

        for(arrayExtern of arrayIntern){
            //instructions
        };
    */

    for(list1 of list){
        console.log(list1);
    };

    // for of 

    /* 
        Something Parameters (Objects)
            **Iteration over properties

        for(objectIntern in objectExtern){
            //instructions
        };
    */

    const person = {
        id: 1,
        age: 19,
        name: "kiri",
    };

    for(person1 in person){
        console.log(`${person1} : ${person[person1]}`);
    };

    // while
    /*
        while(condition){ // Execution this code while the condition it's true 
            //instructions
        };
    */

    let i = 0;
    while(i < 2){
        console.log(i);
        i++;
    };

    // do while

    /*
        do{
            // Instructions
        }while(condition)

        ** Unlike of while, do while always execute the code at least once
    */
    let j = 1;
    do{
        console.log("do while,",j);
        j++;
    }while(j < 1);