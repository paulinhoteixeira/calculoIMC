import {inputWeight, inputHeight} from './script.js'

export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  IMCMessage: document.querySelector(".modal .title"),
  buttonClose: document.querySelector(".close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
    inputWeight.value = ""
    inputHeight.value = ""
  },
};



export function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close();
    
  }
}

window.addEventListener("keydown", handleKeyDown)
Modal.buttonClose.addEventListener("click", Modal.close)
