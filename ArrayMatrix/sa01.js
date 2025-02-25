//? Crie um programa que receba várias notas e calcule a média

const prompt = require("prompt-sync")();

let vetorNotas = [];
let contador =  0;
let continuar = true;
while (continuar) {
    console.log("1. Inserir Nota");
    console.log("2. Calcular Média");
    console.log("3. Sair");
    let operacao = prompt("Escolha a opção desejada: ")
    switch (operacao) {
        case "1":
            contador++;
            let nota = Number(prompt("- - Digite a nota do aluno "  +contador+  ": "));
            vetorNotas.push(nota);
            break;

        case "2":
            let media = vetorNotas.reduce((x,y) => x+y, 0)/contador;
            console.log("- -  A média da sala é: "  +media+  "  - -");
            break;

        case "3":
            console.log("Saindo...")
            continuar = false;
            break;
    
        default:
            break;
    }
}