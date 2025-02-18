//? tipos de operações

// operadores aritméticos (+,-,*,/,%)

var a = 10;
var b = 3;

console.log("Adição: "+ (a+b));  //? 13
console.log("Subtração: "+ (a-b));  // 7
console.log("Multiplicação: "+ (a*b));  //? 30
console.log("Divisão: "+ (a/b));  // 3.333
console.log("Resto: "+ (a%b));  //? 1


// operadores relacionais (>, >=, <, <=, ==, ===)

var a = 10;
var b = 20;
var c = "10";

console.log("Relacionais: "+ (a>b)); //? retorno: false
console.log("Igualdade Simples: "+ (a==c)); // retorno: true
console.log("Igualdade Estrita: "+ (a===c)); //? retorno: false


// operadores lógicos (&& - E, || - OU, ! - NÃO)

var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: "+ nota1>7 && nota2>7); //? retorno: false
console.log("Aprovação: "+ nota1>7 || nota2>7); // retorno: true
console.log(!false); //? retorno: true (NÃO falso)