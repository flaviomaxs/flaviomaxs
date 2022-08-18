/* MUDAR COR DO HEADER */
window.addEventListener("scroll", () =>{
    document.querySelector("nav").classList.toggle("sticky", window.scrollY > 0)
})

/* SWIPER GALERIA */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          599: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 60
          }
        },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
/* EMAIL JS */
function validar(){
	let nome = document.querySelector(".nome")
	let email = document.querySelector(".email")
	let mensagem = document.querySelector(".mensagem")
	let button_enviar = document.querySelector(".button-enviar")

	button_enviar.addEventListener("click", (e) =>{
		e.preventDefault()
		if(nome.value == "" || email.value == "" || mensagem.value == ""){
			error()
		} else{
			enviaremail(nome.value, email.value, mensagem.value)
			sucesso()
		}
	})
}
validar()

function enviaremail(nome, email, mensagem){
	emailjs.send("service_83wngy4","template_8nfug8y",{
		from_name: email,
		to_name: nome,
		message: mensagem,
		});
}

function error(){
	swal({
		title: "ops...",
		text: "Preencha todos os campos!",
		icon: "error"
	  });
}

function sucesso(){
	swal({
		title: "E-mail enviado com sucesso!",
		text: "Em breve entraremos em contato!",
		icon: "success"
	  });
}

/* BOTÃO LISTA NAV */
const nav = document.querySelector(".nav_links")
const abrir = document.querySelector("#nav_menu_abrir")
const fechar = document.querySelector("#nav_menu_fechar")
/* ABRIR */
const abrirnav = () => {
	nav.style.display = "flex"
	abrir.style.display = "none"
	fechar.style.display = "inline-block"
}

abrir.addEventListener("click", abrirnav)

/* FECHAR */
const fecharnav = () => {
	nav.style.display = "none"
	abrir.style.display = "inline-block"
	fechar.style.display = "none"
}

fechar.addEventListener("click", fecharnav)

/* FECHAR NAV MENU */
if(document.body.clientWidth < 1024){
	nav.querySelectorAll("li a").forEach(navlink => {
		navlink.addEventListener("click", fecharnav)
	})
}