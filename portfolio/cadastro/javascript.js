let nome = document.querySelector("#nome")
let span_nome = document.querySelector("#span-nome")

let usuario = document.querySelector("#usuario")
let span_usuario = document.querySelector("#span-usuario")

let email = document.querySelector("#email")
let span_email = document.querySelector("#span-email")

let telefone = document.querySelector("#email")
let span_telefone = document.querySelector("#span-telefone")

let senha = document.querySelector("#senha")
let span_senha = document.querySelector("#span-senha")

let confirmar = document.querySelector("#confirmar-senha")
let span_confirmar_senha = document.querySelector("#span-confirmar")

//validar nome completo
nome.addEventListener("keyup", ()=>{
    span_nome.setAttribute("style", "color:green")
    span_nome.innerHTML = "Nome Completo:"
    nome.setAttribute("style", "border-color:green")
})

//validar nome de usuário
usuario.addEventListener("keyup", ()=>{
    if(usuario.value.length <= 4){
        span_usuario.setAttribute("style", "color:red")
        span_usuario.innerHTML = "Nome do Usuário: <br>*Insira no mínimo 5 caracteres!"
        usuario.setAttribute("style", "border-color:red")
    } else {
        span_usuario.setAttribute("style", "color:green")
        span_usuario.innerHTML = "Nome do Usuário:"
        usuario.setAttribute("style", "border-color:green")
    }
})


//validar email
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

email.addEventListener("keyup", ()=>{
    if(email.value.length <= 4){
        span_email.setAttribute("style", "color:red")
        email.setAttribute("style", "border-color:red")
    } else {
        span_email.setAttribute("style", "color:green")
        span_email.innerHTML = "Email:"
        email.setAttribute("style", "border-color:green")
    }
})
