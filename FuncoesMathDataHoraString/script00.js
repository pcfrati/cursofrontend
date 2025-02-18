// funçoes matemáticas

//? sqrt, pow (quadrado, potência
console.log(Math.sqrt(25)); // √25=5
console.log(Math.pow(2, 3)); // 2³
console.log(Math.pow(27, 1/3));  // ³√27=3  (raiza cúbica)


//? funções de arredondamento (round, ceil, floor)
console.log(Math.round(4.7)); // Retorna 5 (arredondamento para o inteiro mais próximo)
console.log(Math.round(4.4)); // Retorna 4 (arredondamento para o inteiro mais próximo)
console.log(Math.ceil(4.1)); // Retorna 5 (arredonda para cima)
console.log(Math.floor(4.9)); // Retorna 4 (arredonda para baixo)


//? random
console.log(Math.random()); // Retorna um número decimal entre 0 e 1
console.log(Math.round(Math.random() * 100)); // Retorna um número aleatório entre 1 e 10


//? valor absoluto
console.log(Math.abs(-10)); // Retorna 10 (valor absoluto)


//? valor minimo e maximo
console.log(Math.min(5, 2, 9, 3)); // Retorna 2 (o menor valor da lista)
console.log(Math.max(5, 2, 9, 3)); // Retorna 9 (o maior valor da lista)
