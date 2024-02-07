let result = 0;
           let x=prompt("Ingrese un número");
            while(x != -1){
                result += parseInt(x);
                console.log(result);
                //el console.log es para comprobar que vaya tomando los valores
                x=prompt("Ingrese un número");
            }
            alert(result);

           var suma=0;
do {
    var valor = Number(prompt("Ingrese un número para sumar - Sale de el programa ingresando -1"));
        if (valor != -1){
            suma += valor;
        }
        //agregar si ingresa una letra

} while (valor != -1);

alert("La suma de los números ingresados es "+suma);