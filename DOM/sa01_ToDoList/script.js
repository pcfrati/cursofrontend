//? script usando DOM

document.body.style.backgroundColor = "lightpink";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa"); // inpu
tarefa.style.width = "50%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "5px";
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "aliceblue";
btnEnviar.style.color = "lightblue";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";

let btnCor = document.getElementById("btnCor");
btnCor.style.padding = "6px 10px";
btnCor.style.border = "none";
btnCor.style.background = "aliceblue";
btnCor.style.color = "lightblue";
btnCor.style.borderRadius = "5px";
btnCor.style.cursor = "pointer";
btnCor.style.margin = "10px";

btnCor.addEventListener(
    "click", mudarCor
)

function mudarCor(){
    let cores = ["lightblue", "rgb(255, 211, 211)", "aliceblue", "rgb(255, 112, 112)", "lightpink"];
    
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    container.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    btnCor.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    btnEnviar.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    btnEnviar.style.color = cores[Math.floor(Math.random() * cores.length)];
    btnCor.style.color = cores[Math.floor(Math.random() * cores.length)];
}

//? lógica de funcionamento

// criar  ouvinte
btnEnviar.addEventListener(
    "click", criarTarefa
);

function criarTarefa(){
    let texto = tarefa.value.trim();
    if (texto === ""){ // se vazio
        return;
    }
    // se cheio
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removeTarefa(this)" class="btnRemover">Remover</button';
    // adicionar li -> ul
    let ul = document.getElementById("listaTarefas");
    ul.appendChild(li)
     // apaga o campo do input
    tarefa.value = "";
}

function removeTarefa(botao){
    botao.parentElement.remove();
}