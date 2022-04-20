var inter; // Loading do Slider
var interManual; 
var musicNow; // Index da musica que está tocando agora
var playMusic = true; // Indica se a musica está tocando
var AutoManual = "Auto" // Indica se a reprodução está no modo manual ou automático

// Adiciona funções no botão principal "Tocar Playlist" e no botão voltar
function Navigation(){
    const btnTocarPlaylist = document.querySelector(".btn-play");
    const btnVoltar = document.querySelector(".btn-voltar");

    btnTocarPlaylist.addEventListener("click", ()=>{
        openPlayer()
        ControlsAud();
        tocarPlaylistInicio();
    })

    btnVoltar.addEventListener("click", ()=>{
        closePlayer();
    })
}

// Estarta slider de forma automática na musica do index 0
function tocarPlaylistInicio(){
    nextMusic();
    startSliderAuto();
}

// Passa para a musica do index do seu parâmetro
function nextMusic(i=0){

    musicNow = i

    if(musicNow >= ThePerfectGuy.length){
        musicNow = 0
    }else if(musicNow === "last"){
        musicNow = ThePerfectGuy.length -1
    }

    const bgPage = document.querySelector(".photo-music-bg")
    const cpMusic = document.querySelector(".photo-music-front")
    const title = document.querySelector(".title-music")
    const liryc = document.querySelector(".lyrics")
    bgPage.src = "img/"+ThePerfectGuy[musicNow].foto
    cpMusic.src = "img/"+ThePerfectGuy[musicNow].foto
    title.innerText = ThePerfectGuy[musicNow].titulo
    liryc.innerHTML = `${ThePerfectGuy[musicNow].letra}`

}

// Abre a página do player
function openPlayer(){
    const sPage = document.querySelector(".second-page");
    sPage.scrollTop = 1;
    sPage.style.left = 0;
    sPage.style.transition = .8 + "s";
}

// Fecha a página do player e para a reprodução por completo
function closePlayer(){
    const sPage = document.querySelector(".second-page");
    sPage.style.left = 100 + "%";  
    resetAll()
}

function resetAll(){
    pauseSlider()
    playMusic = false
    AutoManual = null
    toggleBtnPlayPause("play");
}
