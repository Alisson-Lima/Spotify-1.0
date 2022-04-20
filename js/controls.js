// Atribuição das funções para os botões de controle
function ControlsAud(){
    const btnLeft = document.querySelector(".arrow-left")
    const btnRight = document.querySelector(".arrow-right")
    const btnPause = document.querySelector(".pause-button") // dois traços
    const btnPlay = document.querySelector(".play-button")
    
    // Retrocede uma musica e estarta o play de forma automática
    btnLeft.addEventListener("click", ()=>{ 

        if(playMusic == false){
            playMusic = true
            toggleBtnPlayPause("play")
        }else{
            playMusic = true
            toggleBtnPlayPause("play")
        }

        if(musicNow == 0){
            let back = "last"
            nextMusic(back)
        }else{
            nextMusic(musicNow - 1)
        }

        restartSlider()
    })

    // Avança uma musica e estarta o play de forma automática
    btnRight.addEventListener("click", ()=>{
        if(playMusic == false){
            playMusic = true
            toggleBtnPlayPause("play")
        }else{
            playMusic = true
            toggleBtnPlayPause("play")
        }

        nextMusic(musicNow + 1)
        restartSlider()
    })

    // Estarta o slider de forma automática e muda para display:none
    btnPlay.addEventListener("click", ()=>{
        playSlider()
        playMusic = true
        toggleBtnPlayPause("play")
    })

    // Para o slider e muda para display:none
    btnPause.addEventListener("click", ()=>{    
        pauseSlider()
        playMusic = false
        toggleBtnPlayPause("pause")
    })
}

// Estarta o slider
function playSlider(){
    // debugger
    const slider = document.querySelector(".greenslider");
    let per = parseInt(slider.style.width)
    if(AutoManual == "Auto"){
        clearInterval(inter)
        clearInterval(interManual)
        widthSlider(per) 
    }else{
        clearInterval(inter)
        clearInterval(interManual)
        widthSliderManual(per)
    }
}

// Pausa o slider
function pauseSlider(){
    clearInterval(inter)
    clearInterval(interManual)
}

// Configs do loading do slider
function widthSlider(p){
    const slider = document.querySelector(".greenslider");
    let percentage = p
    inter = setInterval(()=>{
        if(percentage == 100){
            ++musicNow;
            if(musicNow >= ThePerfectGuy.length){
                setTimeout(()=>{
                    percentage = 0;
                    musicNow = 0
                    nextMusic();
                }, 2000);
            }else{
                slider.style.width = 100 + "%";
                percentage = 0;
                nextMusic(musicNow);
            }
        }else{
            slider.style.width = percentage+'%';
            percentage += 1;
        }    
    },100);
}

function widthSliderManual(p = 0){
    const slider = document.querySelector(".greenslider");
    let percentage = p;
    interManual = setInterval(()=>{
        if(percentage == 100){
            slider.style.width = 100 + "%"
            clearInterval(interManual) 
            playMusic = false
        }else{
            slider.style.width = percentage+'%';
            percentage += 1;
        }
    }, 100)
}

// Estarta o slider do 0 de forma automática
function startSliderAuto(){
    AutoManual = "Auto"
    let per = 0; //Porcentagem do slider
    widthSlider(per)
}

// Estarta o slider somente uma vez sem passar para a próxima musica
function startSliderManual(per){
    AutoManual = "Manual"
    widthSliderManual(per)
} 

// Zera o slider e o estarta de forma automática ou manual
function restartSlider(){
    if(AutoManual == "Auto"){
        const slider = document.querySelector(".greenslider");
        clearInterval(inter)
        slider.style.width = 0
        startSliderAuto()
    }else{
        const slider = document.querySelector(".greenslider");
        clearInterval(interManual)
        slider.style.width = 0
        startSliderManual()
    }
}

/* Coloca display:none no botão que foi clicado e display
    ex: 
    "play na musica"
    btn-play = display none
    btn-pause = display block
    
    "pause na musica"
    btn-pause = display none
    btn-play = display block
    
*/
function toggleBtnPlayPause(condition){
    const btnPause = document.querySelector(".pause-button") // dois traços
    const btnPlay = document.querySelector(".play-button")

    if(condition == "play"){
        btnPause.style.display = "block"
        btnPlay.style.display = "none"
    }else if(condition == "pause"){
        btnPause.style.display = "none"
        btnPlay.style.display = "block"
        
    }
}