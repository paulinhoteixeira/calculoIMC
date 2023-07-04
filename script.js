const form = document.querySelector('form');
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const modal = document.querySelector(".modal-wrapper")
const IMCMessage = document.querySelector(".modal .title")
const closeButton = document.querySelector(".close")


form.onsubmit = function(e){
  e.preventDefault()

  let imc = (inputWeight.value / ((inputHeight.value/100) ** 2)).toFixed(2)
  modal.classList.toggle("open")
  IMCMessage.innerText = `Seu IMC é de ${imc}`
  console.log(imc)

}

function close() {
  modal.classList.toggle("open")
  inputWeight.value = ""
  inputHeight.value = ""

}


closeButton.addEventListener("click", close)