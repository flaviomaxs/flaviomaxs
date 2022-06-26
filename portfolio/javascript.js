/* HEADER*/
window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})

/* BOTÃO DOWNLOAD CURRÍCULO */
let cv_button = document.querySelector(".cv")
cv_button.addEventListener("click", () =>{
	cv_button.classList.add("cv-ativo")

	setTimeout(() =>{
		cv_button.classList.remove("cv-ativo") //REMOVER class="cv-ativo" DEPOIS DE 6s
		document.querySelector("svg").classList.replace("bi-file-earmark-arrow-down-fill", "bi-check-circle-fill")
		document.querySelector(".cv-texto").innerHTML = "Download Completo"
	},6000) //1s = 1000ms
})

/* IMAGENS */
function ativaNoScroll() {
	document.querySelectorAll('img').forEach((img, index) => {
		if(img.getBoundingClientRect().top < window.innerHeight) {
			img.src = img.getAttribute('data-src')
		}		
	})
}
window.addEventListener('scroll', ativaNoScroll);

/* MENU LATERAL*/
let Imenu = document.querySelector(".icone-menu")
let menu = document.querySelector(".menu")

Imenu.onclick = () => {
	menu.classList.toggle("abrir-menu")
	Imenu.classList.toggle("move")
}
window.onscroll = () =>{
	menu.classList.remove("abrir-menu")
	Imenu.classList.remove("move")
}

/* REVIEWS SWIPER */
let swiper = new Swiper(".review-box", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 5000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  })

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

/* SCROLL TOPO */
window.addEventListener("scroll", function(){
    let scrollTopo = document.querySelector(".scroll-topo")
    scrollTopo.classList.toggle("scroll-ativo", window.scrollY >= 400)
})

/* EXPERIÊNCIA */
const abas = document.querySelectorAll("[data-target]"),
	  abascontent = document.querySelectorAll("[data-content]")

	  abas.forEach(aba =>{
		  aba.addEventListener("click", () =>{
			  const target = document.querySelector(aba.dataset.target)

			  abascontent.forEach(abascontent =>{
				  abascontent.classList.remove("experience-ativo")
			  })

			  target.classList.add("experience-ativo")


			  abas.forEach(aba =>{
				aba.classList.remove("experience-ativo")
			})

			aba.classList.add("experience-ativo")
		  })
	  })


/* POP-UP ATIVO */
const popUp = document.querySelectorAll(".services-pop"),
	  popUpButton = document.querySelectorAll(".button-services"),
	  popUpFechar = document.querySelectorAll(".services-pop-fechar")

let pop = function(popClick){
	popUp[popClick].classList.add("ativo-pop")
}
/* ABRIR POP-UP */
popUpButton.forEach((button_services, svg) => {
	button_services.addEventListener("click", () => {
		pop(svg)
	})
})
/* FECHAR POP-UP */
popUpFechar.forEach((popUpFechar) => {
	popUpFechar.addEventListener("click", () => {
		popUp.forEach((popUp) => {
			popUp.classList.remove("ativo-pop")
		})
	})
})
