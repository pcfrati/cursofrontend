// calculadora simples em js

var prompt = require("prompt-sync")();

//?funções de cálculo

function adi(a, b){
    return (a+b);
}


function sub(a, b){
    return (a-b);
}


function multi(a, b){
    return (a*b);
}


function div(a, b){
    return (a/b);
}



//? menu

function menu(){
    let operacao;
    let resultado;
    let numero1;
    let numero2;
    console.log("  ======== Calculadora ========");
    console.log("| Escolha a operação desejada: |");
    console.log("| 1. Adição                    |");
    console.log("| 2. Subtração                 |");
    console.log("| 3. Multiplicação             |");
    console.log("| 4. Divisão                   |");
    console.log("  ============= ♡ =============");
    operacao = prompt();
    numero1 = Number(prompt("Informe o nº1: "));
    numero2 = Number(prompt("Informe o nº2: "));
    switch (operacao) {
        case "1":
            resultado = adi(numero1, numero2);
            break;

        case "2":
            resultado = sub(numero1, numero2);
            break;

        case "3":
            resultado = multi(numero1, numero2);
            break;

        case "4":
            if (numero2==0) {
                console.log("Não é possível dividir por zero!");
                resultado = null;
            } else {
                resultado = div(numero1, numero2);
            }
            break;
    
        default:
            console.log("Operação Inválida!")
            resultado = null;
            break;
    } //fim do switch

    console.log("O resultado é "+resultado)

}

// aplicar a função menu

var continuar = true;
while (continuar) {
    menu();
    let escolha = prompt("1. Continuar   |   2. Sair ");
    if (escolha == 2) {
        continuar = false;
        console.log("Obrigada por usar a calculadora!");
    }
}