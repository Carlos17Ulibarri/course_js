//Create
const stringOpt = {
    firtsOpt: 'Comillas simples',
    secondOpt: "Comillas dobles",
    thirdOpt: `Comillas invertidas`
};

//Concatenation
    //Firts Option (+)
        console.log(stringOpt.firtsOpt + ' ' + stringOpt.secondOpt);

    //Second Option (Template literals)
        console.log(`Firts Option: ${stringOpt.firtsOpt}`);

    //Third Option (Array Method join())
        const copyStringOpt = [stringOpt.firtsOpt,stringOpt.secondOpt]
        console.log(copyStringOpt.join(' '));
                                      //Value between strings
    
    //Fourth Option (Method concat())
        console.log('String options: '.concat(stringOpt.firtsOpt,', ',stringOpt.thirdOpt));

    //Escape characters
    /*
    -- Erro situación:
                        const ejm = 'I'm Sorry'
    */
        
            const eC = {
                eC1: "I'm Sorry",  //1. Alternative escape
                eC2: 'I\'m Sorry', //2. Backslash
                eC3: `I'm Sorry`   //3. Template literals
            };

//Literals and Values
    const lV = "string";
            /* 
                "string" -- Literal 
                 string  -- Value
            */

//Long Strings
    //Line breaks
            const lB = {
            opt1: 'Enunciado 1\n' + 'Enuncuiado 2 \n' + 'Enuncuiado 3', //With concatenation
            opt2: 'Enunciado 1,\n\Enuncuiado 2,\n\Enuncuiado 3',        //Without concatenation
            };
            console.log(lB.opt1,lB.opt2); 

//String manipulation
    //Primitive
        const stringP = 'string primitive'; console.log(typeof(stringP));
    //Complex
    const stringC = new String ('String complex'); // Object 
    console.log(typeof(stringC));

    //Character access
        //Firts Option
        console.log(stringP[5]);
        //Second Option 
        console.log(stringP.charAt(5));

        //Index Location
        const stringP1 = 'Hello Hello Hello';
        console.log(stringP1.indexOf('e'));
        console.log(stringP1.lastIndexOf('e')); // Last appearance of the word/character
        /* **If you search for a word or character, that does not exist, the result will be -1 */

    //Other Methods
        console.log(stringP1.slice(6,9)); //Search word/character in a range
        console.log(stringP1.length); //String size
        console.log(stringP1.toLocaleUpperCase()); //String to UPPERCASE
        console.log(stringP1.toLocaleLowerCase()); //Strign to lowercase

        //String division
        const partsStringP1 = stringP1.split(' ');
        console.log(partsStringP1);

        //Elimination of excess spaces
        const stringP2 = "  Hello, i'm Carlos   ";
        const elmEStringP2 = stringP2.trim();
        console.log(elmEStringP2);

        //Replace words/character
        const replaceStringP1 = stringP1.replace('Hello','Hi');
        console.log(replaceStringP1);

        //String union with separated 
          const eS = ['Hot', 'Hot', 'Hot'];
          console.log(eS.join(', '));