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
