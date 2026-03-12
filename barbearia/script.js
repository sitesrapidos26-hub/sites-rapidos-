// animações ao aparecer
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
},{threshold:.2})

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el)
})


// MENU MOBILE

const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show")
})

// fechar menu ao clicar fora

document.addEventListener("click", (e) => {

    if(!menu.contains(e.target) && !menuBtn.contains(e.target)){
        menu.classList.remove("show")
    }

})


// SCROLL SUAVE

const links=document.querySelectorAll("nav a")

links.forEach(link=>{
link.addEventListener("click",e=>{

e.preventDefault()

const target=document.querySelector(link.getAttribute("href"))

target.scrollIntoView({
behavior:"smooth"
})

menu.classList.remove("show")

})
})
