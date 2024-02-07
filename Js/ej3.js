var num1 = Number(prompt("Ingrese el primer numero:"));
var num2 = Number(prompt("Ingrese el segundo numero:"));
var num3 = Number(prompt("Ingrese el tercer numero:"));

if (num1 === num2 && num2 === num3) {
alert("Los tres números son iguales: " + num1);
} else {
mayor = Math.max(num1,num2,num3);
}
 alert("El numero mayor ingresado fue "+ mayor)
