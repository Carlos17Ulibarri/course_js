const data = [1,2,3,4,5,6,7];

//console.log(data.length); // Number of elements of the Array 

//Mutable methods 

const result = data.push(8); // Add a new element in the end
//console.log(data);
//console.log(result);

const result1 = data.pop();// Delete a element in the end
//console.log(data);
//console.log(result);

//Non-mutable methods 

const newData = data.concat(["One","Two","Three"]);
//console.log(newData);

    //With iteration
    /*
            map: Allow to apply a function to each element of a Array and build a new Array with the results
            
            Syntax:
                var nuevo_array = arr.map(function callback(currentValue, index, array) {
                // Elemento devuelto de nuevo_array
                }[, thisArg])
    */
    const squaredNumbers = data.map(num => num * num);
    console.log(squaredNumbers);

    /*
            forEach: Iterates about each element of a Array and execute a function to each element
            , without create a new Array
    */
    const colors = ["Blue","White","Red"];
    const iterateArray = colors.forEach(color => console.log(color));
    console.log(iterateArray); //Doesn't return a Array 

    /* 
        filter: Creates a new Array with elements that comply a given condition by a function
    */

    const findColors = colors.filter(color => color.match('i'));
    console.log("findColors: ",findColors);

    /*
        reduce: Execute a reducing function  about each element of the Array, 
        returning a single value as a result.
    */
                                // accumulator, current value
    const reduceData = data.reduce((acc,cV) => cV % 2 === 0 ? acc + cV : acc = acc,0);
    console.log(reduceData);

        

  


console.log(`The Array newData is a Array?..... : ${Array.isArray(newData)}`); //Array truthfulness