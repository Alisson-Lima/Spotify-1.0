(function(){

    setTimeout(()=>{
        document.querySelector(".container").style.display = "block"
        document.querySelector(".loading").style.display = "none"
    }, 5500)

    Menu();
    ListMusic();
    Favorite();
    Navigation();
})();