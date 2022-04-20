function Menu(){
    const btn = document.querySelector(".btn-menu")
    const menu = document.querySelector(".menu")
    btn.addEventListener("click", ()=>{
        menu.classList.toggle("menu-active")
    })
}
