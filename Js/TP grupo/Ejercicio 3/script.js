var lista = new Array ('a','b','c','1','x','9','d','4');
var item = 0

for (; item < lista.length; item++) {
    if (lista[item] == '1' || lista[item] == '4' || lista[item] == '9') {
        continue;
    } 

    console.log(lista[item]);
    
}