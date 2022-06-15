let estrelas = document.getElementById("estrelas")
let lua = document.getElementById("lua")
let montanha_fundo = document.getElementById("montanha-fundo")
let titulo = document.getElementById("titulo")
let botao = document.getElementById("botao")
let montanha_frente = document.getElementById("montanha-frente")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    estrelas.style.left = value * 0.25 + "px";
    estrelas.style.marginLeft = value * 0.25 + "px";
    montanha_fundo.style.top = value * 0.25 + "px";
    montanha_frente.style.top = value * 0 + "px";
    lua.style.marginBlock = value * 0.25 + "px";
    lua.style.left = value * 0.5 + "px";
})
