///? construir header com DOM

let header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header);
document.body.style.margin = "0";

let divNav = document.createElement("div");
header.appendChild(divNav);
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
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