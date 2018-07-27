// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (let i = 1; i < 101; i++) {
    if (((i % 3)===0) && ((i % 5)===0)){
        console.log('GEEKSHUBS')
    } else if ((i % 5)===0){
        console.log('HUBS');
    } else if ((i%3)===0) {
        console.log('GEEKS');
    } else {
        console.log(i)
    }
}

/* 
let result;

for (let i = 1; i <= 100; i++) {

    if (!(i%3)) {
        result += 'GEEKS';
    }
    
    if (!(i % 5)){
        result += 'HUBS';
    }
    
    console.log(result || i);
    result = '';
}
*/

/*
let result = '';
for (let i = 0; i <= 100; i++) {
    console.log((i%3?'':'Geeks')+(i%5?'':'hubs')||i);
}
*/

/*
let i = 100;
while(i--){
    console.log((i%3?'':'Geeks')+(i%5?'':'hubs')||i);
}
*/

/*
let fizzBuzz = (i) => {
    if (i>100) {
        console.log((i%3?'':'Geeks')+(i%5?'':'hubs')||i);
        fizzBuzz(i+1);
    }
}
fizzBuzz(1);
*/