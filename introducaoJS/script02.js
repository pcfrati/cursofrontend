//? estrutura de dados

// condicionais (if, else / switch case)

//? if
var precoProduto = 150;

if (precoProduto >=100) {
    console.log("Valor a pagar é: "+ (precoProduto*0.9)) // 135
}
else {
    console.log("Valor a pagar é: "+ (precoProduto)) // 150
};

//? switch case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro!");
        break;

    case 2:
        console.log("Fevereiro!");
        break;

    case 3:
        console.log("Março!");
        break;

    default:
        console.log("Mês não identificável!")
        break;
}



//  estrutura de repetição

//? for (contável)

for(let i = 0; i<=100; i++){  // i++ adiciona mais um    i+=2 adiciona mais dois
    console.log(i);
}



//? while (incontável)

var continuar = true; // condição de parada
var numeroEscolhido = Math.round(Math.random()*10);
var contador = 0;
while(continuar){ // parada acontece quando continuar = false
    contador++;
    let numeroSorteado = Math.round(Math.random()*10);  // math round arredonda o número
    console.log("O número sorteado foi: "+numeroSorteado)

    if(numeroEscolhido==numeroSorteado){
        continuar = false;
        console.log("Parbéns, acertou! O número era: "+numeroEscolhido)
        console.log("Tentativas: "+contador);
    }
}



//? funções (ações especificas) podendo ser chamada a qualquer momento do código

function ola (nome){ // function retorn
    return "Olá, "+nome; 
}

function hello (nome){ // function void
    console.log("Hello, "+nome)
}

console.log(ola("Paula"));

hello("Paula");