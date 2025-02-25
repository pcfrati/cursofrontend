//? Exercício 1
let frutas = ["maçã", "banana", "laranja", "uva"];

console.log("- - -  Exercício 1  - - -")

console.log("Questão A - -");
console.log(frutas[1]);

frutas.push("melancia");
console.log("Questão B - -");
console.log(frutas);

frutas.shift();
console.log("Questão C - -");
console.log(frutas);

console.log("Questão D - -");
console.log(frutas.length);


//? Exercício 2
console.log("- - -  Exercício 2  - - -")

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Questão A - -");
for(let i = 0;i<arrayNumeros.length;i++){
    console.log(arrayNumeros[i])
}

console.log("Questão B - -");
arrayNumeros.forEach(elemento => {
    console.log(elemento)
});


//? Exercício 3
console.log("- - -  Exercício 3  - - -")