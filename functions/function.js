/*
    Function: genetic and reusable code fragments. 
    Example: Calculation of a percentage.

    Mapping: {Input     , Output    }
             {"Recursos","Necesidad"}

    Structure:
        "Keyword", "Name", "Parameters"

        function sum (a,b){   
            return a + b; // "Body"
        };
             "Arguments"
        sum (3,5); // Call
*/

//Example
function discounted (price, percent){
    price = price - (price * (percent/100));
    return price
};

const disc = discounted(500,20);
console.log("Discount: ",disc);


// Functions Capacities
/*
    //Callback: functions as arguments
    function a (){};
    function b (a){};
    b(a);

    //Return
    function c (){
        function d (){};
        return d;
    };

    //Assignment to variables
    const e = function (){};

    //Properties and methods
    function f (){};
    const obj = {}; //execution context
    f.call(obj);

    //Nesting
    function g (){
        function h (){
            function i (){

            };
        i();
        };
        g();
    };
    g();
*/
    //Object and Methods
    const person = {
       name:"Carlos",
        age: function age(yearBirth,currentYear){
            console.log(`${person.name} have ${currentYear - yearBirth} years old`);
        }
    }; 

    console.log(person.age(1956,2022));

//Pure and impure functions
    /*
        Pure(s)
         Characteristics:
            > Same entry, same exit.
            > Doesn´t produce side effects.
         
         Side effects:
            > Update Global Variables
            > Update parameters
            > HTTP Requets
            > Printing messages in screen or console
            > DOM handling
            > Time handling
    */
    //Structure
    function opt (p1,p2){
        return p1 - p2;
    };
        //Other examples 
            function square (x){
                return x * x;
            };

    //Function impure 
    function opt1(p3,p4){
        console.log(p3);
        return p3 - p4
    };

        //Other examples
            //Update Global Varible 
            let v1 = 0;
            function updateGV(){
                v1 = 1 + 1;
            };
