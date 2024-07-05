/*
    this: execution context
        > Can use properities and methods inside the object (Implicit binding)
*/

const car = {
    name: "TIIDA",
    brand:"Nissan",
    getBrand: function(){
        console.log(`${this.name} is of ${this.brand}`);
    }
};

car.getBrand();

//Association of object with external function (Explicit binding)
function getBrand(){
    console.log(`${this.name} is of ${this.brand}`);
};

const newCar = {
    name: "Fiesta",
    brand:"Ford"
};

getBrand.call(newCar);

    //With parameters
    function getNewBrand(year,status){
        console.log(`Name: ${this.name}\nBrand: ${this.brand}\nYear: ${year}\nstatus: ${status}`);
    };
    getNewBrand.call(newCar,2020,'Seminuevo');

//Handling exectuion context 

    //Methods
        //Call
        function getClient(product,antiquity){
            console.log(`The client ${this.username} has been with us for ${antiquity} years,\n`+
                        `with this ${product}`);
        };

        const client = {
            id:"0001SA",
            name: "Jonh Smith",
            username:"jsmith_14"
        };

        getClient.call(client,"Desktop",2);

        //Apply    -- Array arguments
        const extraDataClient = ["MousePad",5];
        getClient.apply(client,extraDataClient);

        //Bind 
        const getC = getClient.bind(client,'Laptop',3);
        //console.log(getC);
        getC();

        //Other resources 
        /*
            https://www.youtube.com/watch?v=bS71_W_BDFE&ab_channel=LaCocinadelC%C3%B3digo
        */


//Window Object and Strict Mode

    //Correct use "this" on the web
    window.name = 'Carlos'; //Global Object 

    function print (){
        console.log(this.name);
    };

    // Use Strict 
    /*
        Syntax in console: "use strict"

        "Necessary when working with the web and execution is correct with syntax errors"
    */

    /*
    Binding en JavaScript se refiere a cómo la palabra clave this está vinculada o asociada en una función. Así que, entender los diferentes tipos de “binding” es esencial para comprender cómo se comporta this en diferentes situaciones. Veamos los cinco tipos principales de “binding”:

    Implicit Binding:
    Ocurre cuando se invoca un método de un objeto, y this se vincula al objeto que contiene el método.

    Ejemplo:

    const person = {
    name: 'Adam',
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
    };

    person.greet(); // Output: Hello, I'm Adam

    Explicit Binding:
    Ocurre cuando se usan métodos como call, apply, o bind para establecer explícitamente el valor de this.

    Ejemplo:

    function greet() {
    console.log(`Hello, I'm ${this.name}`);
    }

    const adam = { name: 'Adam' };

    greet.call(adam); // Output: Hello, I'm Adam
    New Binding:
    Ocurre cuando una función se invoca con la palabra clave new, creando así un nuevo objeto y vinculando this a ese objeto.

    Ejemplo:

    function Person(name) {
    this.name = name;
    }

    const adam = new Person('Adam');
    console.log(adam.name); // Output: Adam
    Lexical Binding:
    Ocurre cuando se utiliza this en una función dentro de otra función. En este caso, this se vincula al contexto léxico de la función exterior.

    Ejemplo:

    const person = {
    name: 'Adam',
    greet: function() {
        const innerFunction = () => {
        console.log(`Hello, I'm ${this.name}`);
        };
        innerFunction();
    }
    };

    person.greet(); // Output: Hello, I'm Adam

    Window Binding:
    Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador).

    Ejemplo (ejecutar en el navegador):

    function showName() {
    console.log(this.name);
    }

    window.name = 'Adam';
    showName(); // Output: Adam
    */