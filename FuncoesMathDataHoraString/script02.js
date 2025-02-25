//? Manipulação de String (cadeia de caracteres)

let texto = "Aula de Javascript";

// contar quantos carcteres tem a variavel
console.log(texto.length); // retorna 18

// MAIÚSCULAS e minúsculas
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// partes da String
console.log(texto.substring(0,4)); // retorna aula
console.log(texto.substring(8,18)); // retorna javascript
console.log(texto.slice(-10)); // retorna javascript

// substituição partes da string
let texto2 = texto.replace("Java", "Type"); // retorna Aula de Typescript
console.log(texto2); 

// tesoura(trim)
let texto3 = "   Javascript  ";
console.log(texto3);
console.log(texto3.trim());

//separação de string
let linguagens = "Javascript, Pyhton, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);  // retorna vetores


//? desafio
// quantidade de caracteres sem espaço
let desafio = "Bom Dia Com Muita Alegria";
let solucaoDesafio = desafio.replaceAll(" ", "");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);