import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

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
  Modal.open();
  Modal.IMCMessage.innerText = `Seu IMC é de ${imc}`;
  console.log(imc);
};

function notNumber(value) {
  return isNaN(value) || value == "";
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
