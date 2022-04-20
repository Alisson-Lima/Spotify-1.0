// Chamadas para as funções da lista de musicas
function ListMusic(){
    addMusics()
    addFunctionMusics()    
}

// Adiciona as musicas do album na tela principal
function addMusics(){
    const listContainer = document.querySelector(".list-musics")
    for(let i = 0; i < ThePerfectGuy.length; i++){
        listContainer.innerHTML += `<div class="music">
        <div class="container-music-event">
        <img src="img/${ThePerfectGuy[i].foto}" alt="" class="photo-music">
        <h3>${ThePerfectGuy[i].titulo}</h3>
        </div>
        <svg class="favorite" width="24" height="22" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="path" d="M10.104 2.8026L11 3.72371L11.896 2.80261C14.1519 0.483563 18.0165 0.888911 19.7891 3.18286C20.889 4.6062 21.1727 6.70021 19.9618 9.21373L19.9618 9.21379C18.7594 11.71 16.0806 14.6371 11.2306 17.8308L11.2303 17.8309C11.1648 17.8741 11.094 17.8929 11.0229 17.8916L11 17.8911L10.9771 17.8916C10.906 17.8929 10.8352 17.8741 10.7697 17.8309L10.7694 17.8308C5.91943 14.6371 3.24065 11.71 2.03816 9.21377C0.827303 6.70019 1.11095 4.60619 2.21083 3.18286C3.98349 0.888908 7.84818 0.483571 10.104 2.8026Z" stroke="#616161" stroke-width="2.5"/>
        </svg>
    </div>`; 
    }
}

// Adiciona as funções de reprodução de musica de forma manual
function addFunctionMusics(){
    const musics = document.querySelectorAll(".container-music-event")
    for(let i = 0; i < musics.length; i++){
        musics[i].addEventListener("click", ()=>{

            nextMusic(i)
            openPlayer()
            startSliderManual()
            ControlsAud();
        }, true)
    }

}