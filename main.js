console.log("Estoy escribiendo en la consola");
console.info("ESTA ES INFORMACIÓN PARA LA CURSADA");
console.warn("Esta es una advertencia");
console.error("Este es un error");

/*Estos son cometarios
En varias líneas
Como podemos ver
No se ejecutarán
Esto se llama comentario de bloque*/
// Esto es un comentario de línea

document.write("Estoy escribiendo en el navegador");
document.write("<h1>Esto es un título en el navegador</h1>");
document.write("<h2>Esto es un subtítulo en el navegador</h2>");

alert("Hello World"); // Probando las alertas

console.log("Miren el resultado de esta suma: 5+7=", 5+7);

/* Requerir algún dato al usuario. 
El dato se guardará en variables. 
La variable se declara: var nombreVariable
Y luego se le asigna un valor con el signo = (igual)
En este caso, el valor es lo que ingresa el usuario*/ 
var nom=prompt("Ingrese nombre de usuario");
document.write("Hola ", nom + "<br>");

// Declarando var (con el var) y asignándoles un valor (c/ el =)
var str="jjh$ 8¡s" // String = cadena de caracteres
var num=5  // Variable con tipo de dato numérico

// Cómo hacer un salto de línea: + "<br>"
var edad=17
document.write("Edad:", edad + "<br>");
var estCivil="soltero"
document.write("Estado civil:", estCivil + "<br>");
var sum=7+9
document.write("Suma Misteriosa=", sum + "<br>");

//Constantes:
const IVA=21;
const PI= 3.141592; // Las const van en MAYÚSC. Si tiene 2 palabras, se coloca guión bajo _ entre ellas.

var iva=21
var iva=10.5
console.log(iva) // iva es una variable. Mostrará el valor 10.5 porque se le reasignó un valor distinto.

console.log(typeof(str)); // Me dice el tipo de dato que tiene la var str

/*Hasta el momento, cuando ingreso un número en 
una variable, me lo toma como si fuera siempre un string. 
Para que me lo reconózca como un número debo:*/
var num=parseInt( prompt("Ingrese un número"));   
document.write("Número ingresado: ", num + "<br>");
document.write(num + 1 + "<br>");
// parseInt para números enteros
// parseFloat para números decimales
var costo=parseFloat(prompt("Ingrese monto a pagar:"));
document.write("Impuesto IVA a pagar: ", IVA * costo / 100 + "<br>");

//Incremento:
document.write("Incremento: ", ++costo  + "<br>");
//Decremento:
document.write("Decremento: ", --costo  + "<br>"); // Muestra el num original porque le había sumado uno y cuando le resta 1, vuelve al número original

//While
let i=2           // let declara una variable local. var declara una variable global.
while(i<=10) {
    console.log(i);
    i=i+2;
}
console.log("fin");

//For (cuando tenemos un número fijo de repeticiones)
for (let i=2; i <=10; i+=3) {
    console.log(i);
}
console.log("Fin")

for (let i=1; i<=10; i++){
    document.write("<p>2 x ", i, " = ", (i*2),"</p>")
}


let tabla=parseInt(prompt("Ingrese la tabla que desea ver"));
for (let i=1; i<=10; i++){
    document.write("<p>", tabla, " x ", i, " = ", (tabla*i),"</p>") // Para concatenar elementos uso la coma con el document.write. Con el console.log puedo usar el +
}