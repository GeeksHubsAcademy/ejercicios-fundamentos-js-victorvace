
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        matriz[i][j] = i.toString()+j.toString();
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let e = 0; e < matriz[i].length; e++) {
        console.log(matriz[i][e]);
    }
}

console.log(matriz);