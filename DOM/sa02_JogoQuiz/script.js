
let perguntas = [];
let perguntaAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

// carregar as perguntas do arquivo json
fetch("perguntas.json").then(response => response.json()).then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas: ", error));

//função para carregar as perguntas no html
function carregarPerguntas(){
    
}