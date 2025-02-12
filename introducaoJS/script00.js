//? introdução javascript

// tipo de dados (escopo, tipagem)

//? STRING - texto
var nome = "João"; // variavel de escopo global
nome = "José"; // possível de redefinir valor
var nome = "Pedro"; // possível de redeclarar

//? NUMBER
let idade = 25; // variavel de escopo local
idade = 26; // possível de redefinir valor
// let idade = 30; - impossível de redeclarar

//? NUMBER
const PI = 3.1415; // constante
// PI = 4.1415; - impossível de redefinir valor
// const PI = 5.1415; - impossível de redeclarar

//? BOOLEAN
var aprovado = true;

//? UNDEFINED
var media;

//? NULL
var info = null;

console.log("Nome: "+nome);
console.log("Idade: "+idade);
console.log("PI: "+PI);
console.log("Aprovação "+aprovado);
console.log("Média: "+media);
console.log("Informações: "+info);