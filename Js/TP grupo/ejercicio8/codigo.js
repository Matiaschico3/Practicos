/*
8) Realice una página que permita al usuario cargar en un array una cantidad variable de
números. Una vez finalizada la carga la página debe mostrar un resumen estadístico

compuesto de los siguientes parámetros: Promedio, Mediana, Mínimo, Máximo y desviación
estándar.
*/
var control = false;
var mediana = 0;
var DE = 0;
do {
    var ingreso = parseInt(prompt("Ingrese el tamaño de el array de números - Debe ser un número entero"));
    if (isNaN(ingreso) || ingreso <= 0) {
        alert("Debe ingresar un número positivo ");
    } else {
        control = true;
    }

} while (!control);

                                    //Ingreso los valores númericos de el array
var elArray = new Array(ingreso);

for (let i = 0; i < elArray.length; i++) {
    let valor = Number(prompt("Ingrese el número de el índice " + (i + 1)));
    if (isNaN(valor)) {
        alert("Debe ingresar un número ");
        i--;
    } else {
        elArray[i] = valor;
    }
}

                                    //Calculo el promedio
var suma = 0;
var promedio = 0;
for (let k = 0; k < elArray.length; k++) {
    suma += elArray[k];
}
promedio = suma / elArray.length;
                                    //Calculo la mediana
/*
La mediana es el valor que ocupa el lugar central de todos los datos cuando éstos están ordenados de menor a mayor.
*/

if (elArray.length < 2) {
    alert("No se puede calcular la mediana - Queda en valor 0")
} else {
    //Ordenamos de menor a mayor el array
    var ordenado = elArray.sort((a, b) => (a - b));
    //Calculamos la mitad de la cantidad de elementos en el array
    var mitad = Math.floor(elArray.length / 2);
    //Vamos a calcular la mediana de el array ingresado
    if (mitad % 2 == 0) {
        let inferior = ordenado[mitad - 1];
        let superior = ordenado[mitad];
        //Sumamos los valores
        let suma = inferior + superior;
        mediana = suma / 2;
    } else {
        mediana = ordenado[mitad];
    }
}

                                    //Cálculo de la desviación standard
/*
La desviación estándar es una medida estadística que mide cuánto se dispersan los valores en torno a su promedio.
Fórmula DE = RAIZ[((∑|x – μ|²)/n-1)] Valores de prueba 6,2,3,1
*/

if (elArray.length < 2) {
    alert("No se peude calcular la desviación standard - Queda en valor 0")
} else {
    //Aramos un array con los resultados de |x – μ|²
    var distancia = [];
    for (let k = 0; k < ordenado.length; k++) {
        let valor = Math.pow((ordenado[k] - promedio), 2);
        distancia.push(valor);
    }

    //Hacemos la sumatoria de los valores de el array distancia
    var sumatoria = 0;
    for (let l = 0; l < distancia.length; l++) {
        sumatoria += distancia[l];
    }

    //Hacemos el cálculo final
    DE = Math.sqrt(sumatoria / (ordenado.length - 1));

}

                                        //Cálculo de los mínimos y maximos
var min = Math.min(...elArray);
var max = Math.max(...elArray);


                                        //Muestro los resultados pedidos
console.log("El promedio de los números ingresados es " + promedio);
console.log("La mediana de los números ingresados es " + mediana);
console.log("El valor mínimo ingresado es: " + min);
console.log("El valor mayor ingresado es: " + max);
console.log("La desviación standard es " + DE);