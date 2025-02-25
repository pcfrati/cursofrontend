//? declaração de uma array "[]"
let array = []; //array dinâmico

let arrayNumeros = [1,2,3,4,5,6,7,8,9];
let arrayTexto = ["Sapato","Caixa","Meia"];
let arrayMisto = [1,"José",true];

// tamanho de um array
console.log(arrayNumeros.length); // 9

// acessar elemento do array
console.log(arrayTexto[1]); //? Caixa
console.log(arrayTexto[0]); //? Sapato

// adicionar elementos em uma array
//? start (unshift)
console.log(arrayTexto);
arrayTexto.unshift("Tênis");
console.log(arrayTexto);
//? end (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

// trocar um elemento
arrayTexto[2] = "Bota";
console.log(arrayTexto);

// remover elemento
//? start (shift)
arrayTexto.shift();
console.log(arrayTexto);
//? end (pop)
arrayTexto.pop();
console.log(arrayTexto);

//? percorrer um array (laços de repetição)
for(let i = 0;i<arrayNumeros.length;i++){
    console.log("Índice ["  +i+  "] = "+[arrayNumeros[i]])
}
// forEach
arrayTexto.forEach(elemento => {
    console.log("- "+elemento)
});

//? métodos úteis
// indexof
console.log(arrayNumeros.indexOf(5)); // 4
console.log(arrayNumeros.indexOf(12)); // não existe | -1
// splice (remove elemento da posição)
console.log(arrayMisto);
arrayMisto.splice(1,2); // primeiro nº é onde começa a remover  |  segundo nº quantas vezes o elemento com aquele valor será removido
console.log(arrayMisto);
arrayMisto.splice(0,4);

//? operações avançadas
// map - novos valores
let valores = [10,20,30,40,50];
console.log(valores);
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);
// filter - comparação
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);


//? desafio (filtro x<35) && (tripliquem o valor de x)
let valoresDesafio = valores.filter(x => x<35);
console.log(valoresDesafio);
let valoresDesafio2 = valoresDesafio.map(x => x*3);
console.log(valoresDesafio2);
// ou
let valoresDesafio3 = valores.filter(x => x<35).map(x => x*3);
console.log(valoresDesafio3);


// reduce ( reduz elementos)
let soma = valores.reduce((x,y) => x+y); // x = resultado  |  y = próximo número
console.log(soma);

// sort (organizar)
let aleatorio = [7,4,2,9,1,5,8,3,6]
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);