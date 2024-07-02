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