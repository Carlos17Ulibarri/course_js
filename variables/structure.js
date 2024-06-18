//Varible Structure
/*
Type + Declaration = assigment;
       varName     = value
*/
let var1 = 5515651;


//Variable Types      //Differences
// var
var x = 10;
var x = 20;          // Can be redeclared
x = 30;              // Can be reassigned

// let
let y = 10;
// let y = 20;      // Cannot be redeclared
y = 30;             // Can be reassigned

// const
const z = 10;
// const z = 20;    // Cannot be redeclared
// z = 30;          // Cannot be reassigned


/*
//Recomendaciones:
Nombres Descriptivos: Elige nombres significativos para tus variables. 
Esto hace que tu código sea más legible y comprensible para ti y para otros programadores que puedan revisarlo.

CamelCase: Es común usar la convención de camelCase para nombrar variables en JavaScript. 
Comienza con minúscula y las palabras subsecuentes empiezan con mayúscula (por ejemplo: nombreUsuario, edadPersona).

Declaración de Variables: Siempre declara tus variables antes de usarlas. Esto ayuda a evitar errores y a tener un código más organizado.
Cosas que no están permitidas (malas prácticas):

Reutilizar Nombres de Variables: Evita reutilizar el mismo nombre de variable para diferentes propósitos en diferentes 
partes de tu código. Esto puede causar confusiones y errores difíciles de depurar.

Declarar Variables sin Palabras Clave: Evita declarar variables sin usar las palabras clave let, const o var. 
Esto puede llevar a variables globales no intencionadas y potenciales conflictos en el código.

Usar Nombres Reservados: No uses nombres reservados de JavaScript (por ejemplo: let, const, for, function, etc.) 
como nombres de variables. Pueden generar comportamientos inesperados o errores.

//Buenas Prácticas:

Usar const siempre que sea posible: Si sabes que el valor de la variable no cambiará, utiliza const. Esto ayuda a prevenir 
cambios accidentales en el código y hace que sea más fácil entender su propósito.

Limitar el Alcance de las Variables: Intenta mantener el alcance de tus variables lo más pequeño posible. Esto significa 
declarar las variables donde realmente las necesitas y evitar que sean accesibles desde cualquier parte del código.

Evitar Variables Globales: Las variables globales pueden causar conflictos y efectos no deseados. Intenta limitar su uso 
al mínimo necesario para evitar problemas de mantenimiento.
 */
