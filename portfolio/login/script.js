function logar(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if(email == "flaviomax.dv@gmail.com" && senha == "12345"){
        location.href="http://127.0.0.1:5500/portfolio/home/home.html"
    } else {
        window.alert("[ERRO] email ou senha incorretos!")
    }
}
