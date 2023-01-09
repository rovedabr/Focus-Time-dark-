
const buttonModeLight = document.querySelector(".buttonModeLight")
const buttonModeDark = document.querySelector(".buttonModeDark")

const buttonPlayTimer = document.querySelector(".play-timer")
const buttonStopTimer = document.querySelector(".stop-timer")
const buttonAddFiveMinutes = document.querySelector(".add-five-minutes")
const buttonRemoveFiveMinutes = document.querySelector(".remove-five-minutes")

const secondsDisplay = document.querySelector(".seconds")
const minutesDisplay = document.querySelector(".minutes")

var minutes = Number(minutesDisplay.textContent)
var seconds = Number(secondsDisplay.textContent)
var newMinutes
var moreFiveMinutes
var timerTimeOut

const soundForest = new Audio("./sounds/Floresta.wav")
const soundRain = new Audio("./sounds/Chuva.wav")
const soundCoffeeShop = new Audio("./sounds/Cafeteria.wav")
const soundFireplace = new Audio("./sounds/Lareira.wav")

soundForest.loop = true
soundRain.loop = true
soundCoffeeShop.loop = true
soundFireplace.loop = true

const buttonSoundForest = document.querySelector(".buttonSoundForest")
const buttonSoundRain = document.querySelector(".buttonSoundRain")
const buttonSoundCoffeeShop = document.querySelector(".buttonSoundCoffeeShop")
const buttonSoundFireplace = document.querySelector(".buttonSoundFireplace")

const cardBackgroundForest = document.querySelector("#backgroundForest")
const cardBackgroundRain = document.querySelector("#backgroundRain")
const cardBackgroundCoffeeShop = document.querySelector("#backgroundCoffeeShop")
const cardBackgroundFireplace = document.querySelector("#backgroundFireplace")

const cardForest  = document.querySelector("#cardForest")
const cardRain = document.querySelector("#cardRain")
const cardCoffeeShop = document.querySelector("#cardCoffeeShop")
const cardFireplace = document.querySelector("#cardFireplace")

const inputSoundForest = document.querySelector("#soundForestVolume")
const inputSoundRain = document.querySelector("#soundRainVolume")
const inputSoundCoffeeShop = document.querySelector("#soundCoffeeShopVolume")
const inputSoundFireplace = document.querySelector("#soundFireplaceVolume")

const soundForestVolume = document.querySelector("#soundForestVolume")
const soundRainVolume = document.querySelector("#soundRainVolume")
const soundCoffeeShopVolume = document.querySelector("#soundCoffeeShopVolume")
const soundFireplaceVolume = document.querySelector("#soundFireplaceVolume")


function countDown() {
  timerTimeOut = setTimeout(function() {

    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0) {
      stopSounds()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2,"0")
    }

    secondsDisplay.textContent = String(seconds -1).padStart(2,"0")

    countDown()

  }, 1000)
}

function changeMode() {
  document.body.classList.toggle("modeDark")
}
  
function modeLight() {
  buttonModeDark.classList.remove("hide")
  buttonModeLight.classList.add("hide")
}

function modeDark() {
  buttonModeDark.classList.add("hide")
  buttonModeLight.classList.remove("hide")
}

function buttonForest() {
  cardBackgroundForest.classList.add("on") 
  cardBackgroundRain.classList.remove("on")
  cardBackgroundCoffeeShop.classList.remove("on")
  cardBackgroundFireplace.classList.remove("on")

  cardForest.classList.add("on")
  cardRain.classList.remove("on")
  cardCoffeeShop.classList.remove("on")
  cardFireplace.classList.remove("on")

  inputSoundForest.classList.add("on")
  inputSoundRain.classList.remove("on")
  inputSoundCoffeeShop.classList.remove("on")
  inputSoundFireplace.classList.remove("on")
}

function buttonRain() {
  cardBackgroundForest.classList.remove("on") 
  cardBackgroundRain.classList.add("on")
  cardBackgroundCoffeeShop.classList.remove("on")
  cardBackgroundFireplace.classList.remove("on")

  cardForest.classList.remove("on")
  cardRain.classList.add("on")
  cardCoffeeShop.classList.remove("on")
  cardFireplace.classList.remove("on")

  inputSoundForest.classList.remove("on")
  inputSoundRain.classList.add("on")
  inputSoundCoffeeShop.classList.remove("on")
  inputSoundFireplace.classList.remove("on")
}

function buttonCoffeeShop() {
  cardBackgroundForest.classList.remove("on") 
  cardBackgroundRain.classList.remove("on")
  cardBackgroundCoffeeShop.classList.add("on")
  cardBackgroundFireplace.classList.remove("on")

  cardForest.classList.remove("on")
  cardRain.classList.remove("on")
  cardCoffeeShop.classList.add("on")
  cardFireplace.classList.remove("on")

  inputSoundForest.classList.remove("on")
  inputSoundRain.classList.remove("on")
  inputSoundCoffeeShop.classList.add("on")
  inputSoundFireplace.classList.remove("on")
}

function buttonFireplace() {
  cardBackgroundForest.classList.remove("on") 
  cardBackgroundRain.classList.remove("on")
  cardBackgroundCoffeeShop.classList.remove("on")
  cardBackgroundFireplace.classList.add("on")

  cardForest.classList.remove("on")
  cardRain.classList.remove("on")
  cardCoffeeShop.classList.remove("on")
  cardFireplace.classList.add("on")

  inputSoundForest.classList.remove("on")
  inputSoundRain.classList.remove("on")
  inputSoundCoffeeShop.classList.remove("on")
  inputSoundFireplace.classList.add("on")
}

function playSoundForest() {
  soundForest.play()
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFireplace.pause()
}

function playSoundRain() {
  soundRain.play()
  soundForest.pause()
  soundCoffeeShop.pause()
  soundFireplace.pause()
}

function playSoundCoffeeShop() {
  soundCoffeeShop.play()
  soundRain.pause()
  soundForest.pause()
  soundFireplace.pause()
}

function playSoundFireplace() {
  soundFireplace.play()
  soundRain.pause()
  soundForest.pause()
  soundCoffeeShop.pause()
}

function changeVolume() {
  soundForest.volume = soundForestVolume.value/100
  soundRain.volume = soundRainVolume.value/100
  soundCoffeeShop.volume = soundCoffeeShopVolume.value/100
  soundFireplace.volume = soundFireplaceVolume.value/100
}

function HalfVolume() {
  soundForest.volume = .5
  soundRain.volume = .5
  soundCoffeeShop.volume = .5
  soundFireplace.volume = .5
}

function stopSounds() {
  soundForest.pause()
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFireplace.pause()
}

function resetButtons() {
  cardBackgroundForest.classList.remove("on")
  cardBackgroundForest.classList.remove("on") 
  cardBackgroundRain.classList.remove("on")
  cardBackgroundCoffeeShop.classList.remove("on")
  cardBackgroundFireplace.classList.remove("on")

  cardForest.classList.remove("on")
  cardRain.classList.remove("on")
  cardCoffeeShop.classList.remove("on")
  cardFireplace.classList.remove("on")

  inputSoundForest.classList.remove("on")
  inputSoundRain.classList.remove("on")
  inputSoundCoffeeShop.classList.remove("on")
  inputSoundFireplace.classList.remove("on")
}

buttonModeLight.addEventListener("click", function() {
  modeLight()
  changeMode()
})

buttonModeDark.addEventListener("click", function() {
  modeDark()
  changeMode()
})

cardBackgroundForest.addEventListener("click", function() {
  buttonForest()
  document.getElementById("soundForestVolume").value = 50
  playSoundForest()
  HalfVolume()
})

cardBackgroundRain.addEventListener("click", function() {
  buttonRain()
  document.getElementById("soundRainVolume").value = 50
  playSoundRain()
  HalfVolume()
})

cardBackgroundCoffeeShop.addEventListener("click", function() {
  buttonCoffeeShop()
  document.getElementById("soundCoffeeShopVolume").value = 50
  playSoundCoffeeShop()
  HalfVolume()
})

cardBackgroundFireplace.addEventListener("click", function() {
  buttonFireplace()
  document.getElementById("soundFireplaceVolume").value = 50
  playSoundFireplace()
  HalfVolume()
})

 buttonPlayTimer.addEventListener("click", () => { countDown() 
  var newMinutes = Number(prompt("Defina o tempo:"))
  minutesDisplay.textContent = String(newMinutes)
})

buttonAddFiveMinutes.addEventListener("click", function() {
  var moreFiveMinutes = (Number(minutesDisplay.textContent) + 5)
  minutes = moreFiveMinutes
  minutesDisplay.textContent = String(moreFiveMinutes)
})

buttonRemoveFiveMinutes.addEventListener("click", function() {
  var lessFiveMinutes = (Number(minutesDisplay.textContent) - 5)
  minutes = lessFiveMinutes
  minutesDisplay.textContent = String(lessFiveMinutes)
})

buttonStopTimer.addEventListener("click", function() {
  clearInterval(timerTimeOut)
  stopSounds()
  resetButtons()
  minutesDisplay.textContent = String(minutes = 25)
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
})

buttonSoundForest.addEventListener("click", function() {
  playSoundForest()
  buttonForest()
})

buttonSoundRain.addEventListener("click", function() {
  playSoundRain()
  buttonRain()
})

buttonSoundCoffeeShop.addEventListener("click", function() {
  playSoundCoffeeShop()
  buttonCoffeeShop()
})

buttonSoundFireplace.addEventListener("click", function() {
  playSoundFireplace()
  buttonFireplace()
})

inputSoundForest.addEventListener("change", function() {
  playSoundForest()
  changeVolume()
  buttonForest()
})

inputSoundRain.addEventListener("change", function() {
  playSoundRain()
  changeVolume()
  buttonRain()
})

inputSoundCoffeeShop.addEventListener("change", function() {
  playSoundCoffeeShop()
  changeVolume()
  buttonCoffeeShop()
})

inputSoundFireplace.addEventListener("change", function() {
  playSoundFireplace()
  changeVolume()
  buttonFireplace()
})