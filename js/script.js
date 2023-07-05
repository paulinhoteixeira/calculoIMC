import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
export const inputWeight = document.querySelector("#weight");
export const inputHeight = document.querySelector("#height");

form.onsubmit = event => {
  event.preventDefault();

  let weight = inputWeight.value;
  let height = inputHeight.value;

  let imc = calculateIMC(weight, height);
  let weightOrHeightIsNotANumber = notNumber(imc);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();
  displayResultMessage(imc);
};


function displayResultMessage(imc) {
  Modal.IMCMessage.innerText = `Seu IMC é de ${imc}`;
  Modal.open();
}


