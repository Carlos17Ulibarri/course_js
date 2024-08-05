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
        const name = (arg1,arg2,...) =>{
            ///body
        };
*/

/*
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

/*
// 1. Funciones Declarativas (o con nombre):

Se definen con la palabra clave function
Pueden ser referenciadas antes de su declaración.

    function suma(a, b) { return a + b; } 

// 2. Funciones Expresivas (o anónimas):
Se asignan a variables.
A menudo se utilizan para asignar funciones como valores a variables.

    const suma = function(a, b) { return a + b; };

// 3. Funciones Flecha:
Introducidas en ES6, proporcionan una sintaxis más concisa.
Tienen un comportamiento ligeramente diferente con respecto al valor de this.

    const suma = (a, b) => a + b; 

// 4. Funciones Constructoras:
Utilizadas para crear objetos con new.
Utilizan this para asignar propiedades al nuevo objeto.

    function Persona(nombre, edad) { 
        this.nombre = nombre; this.edad = edad; } 
    const persona1 = new Persona('Juan', 25); 

// 5. Funciones de Orden Superior (Higher-Order Functions):
Aceptan funciones como argumentos o devuelven funciones.

    Ejemplos incluyen map, filter, reduce.

// 6. Funciones Recursivas:
Llamadas a sí mismas durante la ejecución.
Útiles para problemas que se pueden dividir en subproblemas más pequeños.

function factorial(n) { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
// 7. Funciones Anidadas (Nested Functions):

Definidas dentro de otra función.
Pueden acceder a las variables de la función contenedora (closure).
    function exterior() { 
        let variableExterior = 'Exterior'; 
        function interior() { 
            console.log(variableExterior); 
        } 
        interior(); 
    } 
    exterior(); 

// 8. Métodos de Objeto:

Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto 
de ese objeto.

    const objeto = { 
        metodo: function() { 
            console.log('Hola desde el método'); 
        } 
    }; 
    objeto.metodo(); 

// 9. Funciones Asincrónicas:
Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await.
    async function fetchData() { 
        const response = await fetch('<https://api.example.com/data>'); 
        const data = await response.json(); console.log(data); 
    } 

// 10. Funciones Puras:
Dado el mismo conjunto de entradas, siempre producirán el mismo resultado sin causar efectos 
secundarios observables. No dependen de ni modifican estados externos.

    function suma(a, b) { return a + b; }  


*/