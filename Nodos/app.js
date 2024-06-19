import { datos } from "./datos.js";
// identificamos el elemento
const padre = document.querySelector(".container")

//creamos un nodo

const nodo = document.createElement("p")
const nodo2 = document.createElement("p")
const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odio quidem omnis ipsum et tenetur vel maxime repellat minima aut!";
const text2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, cum.";
nodo.innerText = text;
nodo2.innerText = text2


padre.appendChild(nodo);
padre.appendChild(nodo2);

const lista = document.querySelector("div.container > div.card > ul.list")

console.log(lista)

datos.map(a => {
  const li = document.createElement("li")
  li.innerText = a.name
  lista.appendChild(li)
  li.classList.toggle("item")
})