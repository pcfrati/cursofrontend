var prompt = require("prompt-sync")();

let idade;

idade = Number(prompt("Informe sua idade: "));

if (idade<18) {
    console.log("Você ainda é menor de idade!");
}
else if (idade>=60){
    console.log("Você já é idoso!")
}
else {
    console.log("Você já é adulto!")
};