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


// 