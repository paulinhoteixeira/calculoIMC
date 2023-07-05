const form = document.querySelector('form');
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const alertError = document.querySelector(".alert-error")

const Modal = {

  wrapper: document.querySelector(".modal-wrapper"),
  IMCMessage: document.querySelector(".modal .title"),
  buttonClose: document.querySelector(".close"),

  open(){
    Modal.wrapper.classList.toggle("open")
  },
  close(){
    Modal.wrapper.classList.toggle("open")
  }
}


form.onsubmit = function(e){
  e.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  let imc = IMC(weight, height)

  if(isNaN(imc)){
    alertError.classList.add("open")
  }else{
    alertError.classList.remove("open")
    Modal.open()
    Modal.IMCMessage.innerText = `Seu IMC é de ${imc}`
    console.log(imc)
  }

}

function IMC(weight, height) {
  return (weight / ((height/100) ** 2)).toFixed(2)
}

function close() {
  Modal.close()
  inputWeight.value = ""
  inputHeight.value = ""

}


Modal.buttonClose.addEventListener("click", close)