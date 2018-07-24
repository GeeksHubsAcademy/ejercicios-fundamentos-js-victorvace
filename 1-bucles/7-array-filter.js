// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
// utilizando el método filter de los arrays
// y muéstralo por consola.


let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]
var J40 = new Array();
const result = gente.filter(persona => persona.nombre.substr(0,1) === 'J');

for(i=0;i<result.length;i++){
    if (result[i].edad < 40) {
        J40.push(result[i]);
    }
}

for(i=0;i<J40.length;i++){
    console.log(J40[i]); 
}