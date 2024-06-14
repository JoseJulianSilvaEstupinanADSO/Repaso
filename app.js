let win = window;
let dom = document
let body = dom.body
let divs = dom.querySelectorAll("div")
let div = dom.querySelector("div")
let form = dom.forms
let porIdnuevo = dom.querySelector("#documento")
let porId = dom.getElementById("documento")
let porClase = dom.querySelectorAll(".container")
let atributo = dom.getElementsByName("search")
let oldclass = dom.getElementsByClassName("search")
let item = dom.querySelectorAll("ul.list > li.item")


/**
 * Pasar a mayuscula
 */

const api = dom.getElementById("api")

console.log(api)

const nueva = api.innerHTML = "¿QUE ES API?"

// console.log(win)
// console.log(dom)
// console.log(dom.doctype)
// console.log(dom.head)
// console.log(body)
// console.log(body.children)
// console.log(body.children[1])

// const lista = [... body.children]
// console.log(lista)
// console.log(div)
// console.log(divs)
// console.log(form)
// console.log(dom.links)
// console.log(dom.images)
// console.log(porId)
// console.log(porIdnuevo)
// console.log(porClase)
// console.log(atributo)
// console.log(oldclass)
// console.log(item)


console.log(nueva)
console.log(body.childNodes)