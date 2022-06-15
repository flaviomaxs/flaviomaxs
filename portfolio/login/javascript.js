function logar(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if(email == "flaviomax.dv@gmail.com" && senha == "12345"){
        location.href="https://flaviomaxs.github.io/flaviomaxs/portfolio/home/index.html"
    } else {
        window.alert("[ERRO] email ou senha incorretos!")
    }
}
