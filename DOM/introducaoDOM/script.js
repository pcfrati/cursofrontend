// Sript de Manipulação DOM

//? getElementById  |  variável simples
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "Outro Titulo"; // modifica o Id


//? getElementsByTagName  |  váriavel vetor(array)
let paragrafo = document.getElementsByTagName("p");
paragrafo[0].innerText = "Exemplo de Parágrafo Modificado por DOM";
// modificar style
paragrafo[1].style.color = "red";


//? getElementsByClassName  |  váriavel vetor(array)
let descricao = document.getElementsByClassName("descricao");
for(let i=0; i<descricao.length; i++){
    descricao[i].style.color = "blue"
};


//? querySelector  |  variável simples  >  seleciona o 1° elemento
let p = document.querySelector("p");
// modificação de fonte
p.style.fontWeight = "bold";


//? querySelectorAll  |  variável vetor(array)  >  seleciona todos os elementos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold";
});

//? eventos listener(ouvinte)
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

//? chamento direto no script o ouvinte
document.getElementById("btnColor").addEventListener("click",OutraCor);
function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}