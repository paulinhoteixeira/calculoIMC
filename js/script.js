import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notNumber } from './utils.js'

const form = document.querySelector("form");
export const inputWeight = document.querySelector("#weight");
export const inputHeight = document.querySelector("#height");

form.onsubmit = function (e) {
  e.preventDefault();

  let weight = inputWeight.value;
  let height = inputHeight.value;

  let imc = IMC(weight, height);
  let showAlertError = notNumber(imc);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();
  Modal.IMCMessage.innerText = `Seu IMC é de ${imc}`;
  Modal.open();
};

