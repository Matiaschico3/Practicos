/*
 2) Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura
especificada por el usuario.
*/

var control = false;
var vector = [];

for(let i = 0;i < 2;i++){
    var ingreso = parseInt(prompt("Ingrese el primer número para crear el rectángulo"))
    if(isNaN(ingreso)){
        alert("debe ingresar un número entero")
        i--;
    } else {
        vector[i] = ingreso;
    }
}
//muestro el rectángulo
var asteriscos = '';
for(let j = 0;j < vector[1];j++){
    for(let m = 0;m< vector[0];m++){
        if(j==0 || j == vector[1]-1){
            asteriscos+=' *';
        } else {
            if(m==0 || m == vector[0]-1){
                asteriscos+=' *';
            } else {
                asteriscos+='  ';
            }
        }
    }
    asteriscos+='\n';
}

console.log(asteriscos);