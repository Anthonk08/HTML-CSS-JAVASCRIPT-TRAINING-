var num = ["1", "2", "3"];
var frutas = ["Manzana", "Pera", "Ceraza", "Uva"];
var colores = ["Azul", "Rojo", "Amarillo"];
let nombre = "Anthony";
let apellidos = "Tineo Cabreja";


console.log(num);
console.log(nombre + " " + apellidos);
console.log(frutas);
console.log("Me gustan las " + frutas[0]);
console.log(colores);
console.log("Mi color favorito es el " + colores[0]);

/*Uso de FOR*/
for (let num = 0; num < colores.length; num++) {
    const element = colores[num];
    console.log(element);
}

/*Uso de WHILE*/
let cant = 1;

while(cant <= 10){
    console.log(cant);
    cant++;
}

/*Uso de If, If else y If else if y else */
let numero1 = 2;
let numero2 = 3;
if (numero1 >= numero2) {
    console.log("El numero "+ numero1 + " es el numero de mierda que se te ocurren");
}else {
    console.log("El numero " + numero2 + " es las veces que haces una pendejada y eso que son pocas");
}

/*Uso de If en caso de... */
let numeroAlerta = 0;
if (numeroAlerta == 0){
    console.error("Error de sistema el resultado es "+numeroAlerta);
}else {
    console.log("Bienvenido el numero "+numeroAlerta+" es el numero correcto");
}

/*Uso de Switch*/
let numeros = 1;
switch(numeros) {
    case 1:
        console.log("EL numero es el "+ numeros);
        break;
    case 2: 
        console.log("El numero es el "+ numeros);
        break;
    default:
        console.log("El numero esta fuera de rango "+ numeros);
        break;
}

/*Uso de FUNCIONES*/
function saludo(nombre){
    console.log("Hola "+ nombre + " espero que hoy sea un dia maravilloso para tí");
}
saludo("Anthony");

function suma(num1, num2){
    console.log("El numero 1 es "+ num1);
    console.log("El numero 2 es "+ num2);
    let result = num1 + num2;
    return console.log("La suma de los numeros es "+result);
}

suma(2,3);