/* MUDAR COR DO HEADER */
window.addEventListener("scroll", () =>{
    document.querySelector("nav").classList.toggle("sticky", window.scrollY > 0)
})