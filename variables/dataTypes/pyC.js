// Primitive 

/*
Los datos primitivos son valores simples y se almacenan directamente en la variable. 
Cuando asignas un valor primitivo a una variable, la variable almacena el valor real.
 Los datos primitivos son inmutables, lo que significa que una vez que se asigna un valor a una variable, 
 no puedes cambiar el valor real almacenado en esa variable. Cualquier operación que parezca modificar un 
 valor primitivo, en realidad crea un nuevo valor.
*/

let primitiveData = { //Datos inmutables ==> 'No cambia el valor original' -- Paso por Valor 
    pD1:'string',
    pD2:'number',
    d3:'boolean',
    d4:'null',
    d5:'undefined',
    d6:'symbol',
    d7:'bigint'
};
//Ejemplo de inmutabilidad
let d1 = 'Carlos';
let d2 = d1;
d1 = 'Oluuuu';
console.log(d2);//Mostrara el primer valor asignado de d1, a pesar de que este haya cambiado posteriormente.

//Complex
/*
Los datos complejos, como objetos y arreglos, son estructuras más avanzadas que contienen 
referencias a ubicaciones en la memoria, no los valores reales directamente. Cuando asignas 
un objeto a una variable, la variable realmente almacena una referencia a la ubicación en la memoria 
donde se encuentra ese objeto.
*/
let complexData ={  //Datos mutables -- Paso por referencia
    cD1:'object',
    cD2:'array',
    cD3:'function'
};

//Ejemplo de mutabilidad 
let dataObj = {
    dO1:55,
    dO2:0
};
let dataObj2 = dataObj;// Asignación de la misma referencia de memoria a ambos objetos
dataObj.dO1 = 99;
console.log(dataObj2); // Al tener ambos objetos la misma referencia de memoria, el dato cambia en ambos