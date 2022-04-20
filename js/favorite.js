function Favorite(){
    const favorite = document.querySelectorAll(".favorite")
    const path = document.querySelectorAll(".path")
    for(let i = 0; i < favorite.length; i++){
        favorite[i].addEventListener("click", ()=>{
            path[i].classList.toggle("favoriteAnimate")
            path[i].style.transition = 0.2+"s"
        })
    }
}