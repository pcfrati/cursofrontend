
let perguntas = [];
let perguntaAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do arquivo json
fetch("perguntas.json").then(response => response.json()).then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas: ", error));

//função para carregar as perguntas no html
function carregarPerguntas(){
    resultadoElement.innerText = "";
    proximaElement.disabled = true;

    if(perguntaAtual>=perguntas.length){ //quando o index for + ou = ao número de perguntas
        perguntaElement.innerText = "Quiz Finalizado!";
        opcoesElement.innerHTML = "";
        proximaElement.style.display = "none";
        return;
    }
    //escrever código para mostrar as perguntas
    let p = perguntas[perguntaAtual]; //coleção referente ao índice
    perguntaElement.innerText = p.pergunta;
    opcoesElement.innerHTML = "";
    // preencher as opções
    p.opcoes.forEach(opcao => {
        let btnOpcao = document.createElement("button");
        btnOpcao.innerText = opcao;
        btnOpcao.classList.add("opcao")
        btnOpcao.addEventListener("click",() => verificarResposta(opcao, btnOpcao));
        opcoesElement.appendChild(btnOpcao);
    });

    function verificarResposta(opcao, btnOpcao){
        let respostaCorreta =  perguntas[perguntaAtual].resposta;

        if(opcao === respostaCorreta){
            btnOpcao.classList.add("correta");
            resultadoElement.innerText = "Acertou!";
        }else{
            btnOpcao.classList.add("errada");
            resultadoElement.innerText = "Errou! A resposta correta é " +respostaCorreta;
        }
        document.querySelectorAll(".opcao").forEach( botao => botao.disabled = true);
        proximaElement.disabled = false;
    }

    proximaElement.addEventListener("click", () =>{
        perguntaAtual++;
        carregarPerguntas();
    });
}