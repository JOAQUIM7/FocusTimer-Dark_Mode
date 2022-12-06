const body = document.querySelector('body')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')
const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonLight = document.querySelector('.light')
const buttonmoon = document.querySelector('.moon')
const florestAudio = new Audio("./sounds/Floresta.wav")
const rainAudio = new Audio("./sounds/Chuva.wav")
const cofeeAudio = new Audio("./sounds/Cafeteria.wav")
const fireAudio = new Audio("./sounds/Lareira.wav")

let florestVolume = document.querySelector('#florest')
let rainVolume =document.querySelector('#rain')
let cofeeVolume = document.querySelector('#coffee')
let fireVolume = document.querySelector('#fire')

let minutes = Number(minutesDisplay.textContent)
let plussOrLess = 0
florestAudio.loop = true
rainAudio.loop = true
cofeeAudio.loop = true
fireAudio.loop = true


buttonPlay.addEventListener('click', function() {
    countdown()
})

buttonStop.addEventListener('click', function() {
    clearTimeout(timerTimeOut)
    
})

buttonPlus.addEventListener('click', function() {
    plussOrLess = 5
})

buttonLess.addEventListener('click', function() {
    plussOrLess = -5
})

buttonLight.addEventListener('click', function() {
    body.classList.toggle('darkmode')
    buttonLight.classList.add('hide2')
    buttonmoon.classList.remove('hide2')
})

buttonmoon.addEventListener('click', function() {
    body.classList.toggle('darkmode')
    buttonLight.classList.remove('hide2')
    buttonmoon.classList.add('hide2')
})


buttonFlorest.addEventListener('click', function() { 
    buttonFlorest.classList.toggle('hide')
    buttonRain.classList.remove('hide')
    buttonCoffee.classList.remove('hide')
    buttonFire.classList.remove('hide')
    pausedSounds()
    if(buttonFlorest.classList.length == 2) {
        florestAudio.play()
        let vol = Number(florestVolume.value) / 100
        florestAudio.volume = vol
    }
})

buttonRain.addEventListener('click', function() { 
    buttonFlorest.classList.remove('hide')
    buttonRain.classList.toggle('hide')
    buttonCoffee.classList.remove('hide')
    buttonFire.classList.remove('hide')
    pausedSounds()
    if(buttonRain.classList.length == 2) {
        rainAudio.play()
        let vol1 = Number(rainVolume.value) / 100
        rainAudio.volume = vol1
    }
})

buttonCoffee.addEventListener('click', function() { 
    buttonFlorest.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonCoffee.classList.toggle('hide')
    buttonFire.classList.remove('hide')
    pausedSounds()
    if(buttonCoffee.classList.length == 2) {
        cofeeAudio.play()
        let vol2 = Number(cofeeVolume.value) / 100
        cofeeAudio.volume = vol2
    }
})

buttonFire.addEventListener('click', function() { 
    buttonFlorest.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonCoffee.classList.remove('hide')
    buttonFire.classList.toggle('hide')
    pausedSounds()
    if(buttonFire.classList.length == 2) {
        fireAudio.play()
        let vol3 = Number(fireVolume.value) / 100
        fireAudio.volume = vol3
    }    
})

function pausedSounds() {
    florestAudio.pause()
    rainAudio.pause()
    cofeeAudio.pause()
    fireAudio.pause()
}


function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let newMinutes = Number(minutesDisplay.textContent)
        let isFinished = newMinutes <= 0 && seconds <= 0
        newMinutes = newMinutes + plussOrLess

        if(isFinished) {   
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
            return
        }

        if( seconds <= 0) {
            seconds = 59
            --newMinutes
        }else {
            seconds--
        }
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        plussOrLess = 0
        countdown()
    }, 1000)
}
