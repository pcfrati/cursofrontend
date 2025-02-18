//? Desafio 1
var prompt = require("prompt-sync")();

let idade;

console.log(".");
console.log(".");
idade = Number(prompt("Informe sua idade: "));

if (idade<18) {
    console.log("Você ainda é menor de idade!");
}
else if (idade>=60){
    console.log("Você já é idoso!");
}
else {
    console.log("Você já é adulto!");
};

console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log("====================================");



//? Desafio 2
console.log("Tabuada do Cinco:");

for(let i = 0; i<=10; i++){ 
    console.log("5 x "+i,"= "+i*5);
}

console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log("====================================");



//? Desafio 3
console.log("Números pares de 1 a 20:")
for(let i=1; i<=20; i++){
    let resto = (i%2);
    if(resto==0){
        console.log(i);
    }
}
console.log(".");
console.log(".");