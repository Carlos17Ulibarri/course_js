/*
    *Traditional functions
        function name (){
            //body
        };

    *Reasons for use other functions types;
        - Code reduction
        - Avoidance of the this of the context and do not have any type of linkage
*/

//Arrow functions
/*
    Structure 
        const name = (arg1,arg2,...){
            //body
        };

    Arrow function
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, 
pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.
*/

    //Implicit return 
    const getName = name => `His/Her name is ${name}`;
    // *It's necesary to use "()", when have more parameters.

    //Lexical Binding (Bonding with "this")
    const user = {
        name:'Marco',
        email:'marc@email.com',
        username:'ma88cc',
        getEmailUser: function(email){
            console.log(`Email of the user ${this.name} is ${email}`);
        },
        getUserName: uN => {
            console.log(`Username of the user ${this.name} is ${uN}`); //Doesnt's exist bonding with "this"
        }
    };

    user.getEmailUser('marco@emaill.com');
    user.getUserName('maro222');

//Construction functions
/*
    *Object literal notation
    const objName = {
        pror1: "",
        meth1: function (arg1){
            //body
        }
    };

    *Design principle:
        - DRY (Dont´ Repeat Yourself): Modular code
*/

function Users (name,age){ //Naming convention
    this.name = name;
    this.ageUser = age;
    this.getName = function () {
        console.log(`Name: ${this.name} and has ${this.ageUser} years old`);
    };
};

const ageUser = () => 56;  //Arrow function as parameter
console.log(ageUser);
const newUser = new Users ('Jonny',ageUser());
newUser.getName();

    //Arrow functions as construction function
    /*
        *Cannot use the keywor "new"
    */
    const Car = (name,brand) => ({
        name:name,
        brand:brand
    });

    const newCar = Car ('DX3','Mazda');
    console.group(newCar);
    console.log(newCar);

