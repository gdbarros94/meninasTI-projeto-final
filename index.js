/* // this is a js file

/* var condicao1 = true;
var condicao2 = false;

if(condicao1){
    console.log("condicao 1");
}
if(condicao2){
    console.log("condicao 2");
} 

var num1 = 10;
var num2 = 23;
if(num1 === num2){
    console.log("São iguais");
}else{
    if(num1 > num2){
        console.log("São diferentes e num1 maior");
    }else{
        console.log("São diferentes e num2 maior");
    }
}

var paisDeOrigem = "sdfsdf";

switch (paisDeOrigem) {
    case "brasil":
        console.log("brasileiro");
        break;
    case "EUA":
        console.log("Americano");
        break;
    default:
        console.log("desconhecido");
        break;
}

var pokemon = "Bulbasauro";

switch (pokemon) {
    case "Bulbasauro":
        console.log("Planta e Veneno");
        break;
    case "Charmander":
        console.log("Fogo");
        break;
    case "Squirtle":
        console.log("Agua");
        break;
    default:
        console.log("desconhecido");
        break;
}
if (pokemon === "Bulbasauro") {
    console.log("Planta e Veneno");
} else if (pokemon === "Charmander") {
    console.log("Fogo");
} else if (pokemon === "Squirtle") {
    console.log("Agua");
} else {
    console.log("desconhecido");
} */


var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

/* lista.forEach(element => {
    console.log(element);
});

for (const element of lista) {
    console.log(element);
}

for (let index = 0; index < 10; index++) {
    const element = lista[index];
    console.log(element);
} */

/* var i = 0;
while(i < 11){
    console.log(i);
    i = i +1;
} */


/* function calcularArea(altura = 10, largura = 20) {
    var area = altura * largura;
    return (area); 
}
function somaArea(largura1, largura2, altura1, altura2){
    var area1 = calcularArea(largura1, altura1);
    var area2 = calcularArea(largura2, altura2);
    return (area1 + area2);
}

console.log(somaArea(10,20,30,40)); */


/* function imprimeNomes(nome) {
    console.log(nome);
}
imprimeNomes("nome1");
imprimeNomes("nome2");
imprimeNomes("nome3");

function imprimeNomesComReturn(nome) {
    return nome;
}
console.log(imprimeNomesComReturn("nome1"));
console.log(imprimeNomesComReturn("nome2"));
console.log(imprimeNomesComReturn("nome3")); */

/* function recebeArray(lista = []){
    var arrayFinal = [];
    arrayFinal[0] = lista[lista.length -1];
    arrayFinal[1] = lista[0];
    console.log(arrayFinal);
}
var lista = [1,2,3,4,5,6,7,8,9];
recebeArray(lista); */



// Declaração de variáveis
const header = document.createElement("header");
const content = document.createElement("main");
const footer = document.createElement("footer");

// Adiciona conteúdo ao cabeçalho
header.innerHTML = `
  <h1>Cabeçalho</h1>
  <p>Este é o cabeçalho da página.</p>
`;
// Adiciona conteúdo ao conteúdo
content.innerHTML = `
  <h2>Conteúdo</h2>
  <p>Este é o conteúdo da página.</p>
`;

// Adiciona conteúdo ao rodapé
footer.innerHTML = `
  <p>Rodapé</p>
`;

// Adiciona os elementos à página
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

/*****************************/

// Aplica estilos ao cabeçalho
header.style.backgroundColor = "#ccc";
header.style.padding = "10px";

// Aplica estilos ao conteúdo
content.style.backgroundColor = "#fff";
content.style.padding = "20px";

// Aplica estilos ao rodapé
footer.style.backgroundColor = "#ccc";
footer.style.padding = "10px";




const container = document.querySelector("main");
const linhas = [];
const cores = ["#fff", "#ccc"];

for (let i = 0; i < 10; i++) {
  const linha = document.createElement("div");
  linha.classList.add("linha");
  linha.innerHTML = `
    <h3>Linha ${i + 1}</h3>
    <p>Este é o conteúdo da linha ${i + 1}.</p>
  `;
  container.appendChild(linha);

  linhas.push(linha);
}
// Alterna as cores das linhas
function alternarCores() {
  for (let i = 0; i < linhas.length; i++) {
    linhas[i].style.backgroundColor = cores[i % 2];
  }
}
alternarCores();
// Define um evento para alternar as cores
//container.addEventListener("click", alternarCores);