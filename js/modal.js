export const Modal = {

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

export function close() {
  Modal.close()
  inputWeight.value = ""
  inputHeight.value = ""

}