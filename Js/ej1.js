let sum=0
for(i=0;i<3;i++){
 x = Number(prompt("Ingrese un numero"))
 if(isNaN(x)){
    alert("Debe ingresar un numero");
    i--;
 }else{
 sum+=x;
}
}
let result = sum/3;
console.log("El promedio de los numeros ingresados es de "+result)