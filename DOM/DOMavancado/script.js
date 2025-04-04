///? construir header com DOM
let header = document.createElement("header");
header.style.backgroundColor = "lightblue";
header.style.height = "8vh";
document.body.appendChild(header);
document.body.style.margin = "0";

let divNav = document.createElement("div");
header.appendChild(divNav);
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "white";
divNav.style.height = "100%"
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Arial";

let itensNav = ["Home", "Produtos", "Contato"];
itensNav.forEach(element => {
    let item = document.createElement("a")
    item.innerText = element;
    divNav.appendChild(item);
})




//? footer
let footer = document.createElement("footer");
footer.style.backgroundColor = "lightblue";
footer.style.height = "10vh";
footer.style.bottom = "0";
footer.style.width = "100%";
footer.style.position = "fixed";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.display = "flex";
divFooter.style.justifyContent = "space-between";
divFooter.style.height = "100%";
divFooter.style.width = "90%";
divFooter.style.margin = "0 auto";
divFooter.style.alignContent = "start";
divFooter.style.color = "white";
divFooter.style.fontSize = "2vh";
divFooter.style.fontFamily = "Comic Sans MS";
footer.appendChild(divFooter);

// texto footer
let menuFooter = ["End. Rua Orquídea, 444", "Tel. 19 9999-99999", "Email: oba@gmail.com", "@CopyRight 2025"];

menuFooter.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    divFooter.appendChild(p);
});




//? Clonando Elementos com DOM
let card = document.createElement("div");
card.classList.add("card"); // adiciona a classe card no elemento divcard
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "blue";

let container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap";

let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";

document.body.appendChild(btnClonar);
document.body.appendChild(container);
container.appendChild(card);

btnClonar.addEventListener("click", () =>{
    let clone = card.cloneNode(true); 
    container.appendChild(clone);
})




//? criar modo escuro
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";
document.body.appendChild(chave);

// evento
chave.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");
})




//? Eventos avançados com DOM
// previsão de palavra
document.addEventListener("keydown", (event)=>{
    console.log("Tecla pressionada: " +event.key);
});

// função para sugestão de texto
let input = document.createElement("input");
input.type = "text";
input.id = "busca";
input.placeholder = "Digite para buscar...";
document.body.appendChild(input);

// lista de sugestões
let lista = document.createElement("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);
let sugestoes = [
    "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Kotlin"
];

// evento para capturar e sugerir
document.getElementById("busca").addEventListener("keyup", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach( sugestao => {
        if(sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");

            // selecionando sugestão
            item.style.cursor = "grab";
            item.addEventListener("click",()=>{
                input.value = sugestao;
                lista.innerHTML = "";
            })
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    });
});




//? criação de formulário e evento de verificação
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.id = "nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu email";
inputEmail.id = "email";
form.appendChild(inputEmail);

let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

document.getElementById("formCadastro").addEventListener("submit", (event) =>{
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");
    
    // condição
    if(nome ==="" || email ===""){
        mensagem.innerText = "Preencha os campos vazios!";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Cadastro realizado com sucesso!"
        mensagem.style.backgroundColor = "green";

        // limpar campos
        nome = "";
        email = "";
    }
})