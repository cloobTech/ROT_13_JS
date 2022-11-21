/** @format */

const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
const input = document.querySelector("#input_value");
const btn = document.querySelector(".btn_button");

let input_value = "";
// getIput - set the screen value to input value
const getInput = () => {
  input_value = input.value;
  screen.innerHTML = input_value;
};

// Encryt_13 - Encryt a text using rot_13
const encryt_13 = (str) => {
  let i,
    ascii_value,
    result = (text = "");

  for (i = 0; str[i]; i++) {
    if (str[i] == "undefined") continue;
    if (
      (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 77) ||
      (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 109)
    ) {
      ascii_value = str[i].charCodeAt() + 13;
    } else if (
      (str[i].charCodeAt() >= 78 && str[i].charCodeAt() <= 90) ||
      (str[i].charCodeAt() >= 110 && str[i].charCodeAt() <= 122)
    ) {
      ascii_value = str[i].charCodeAt() - 13;
    } else {
      ascii_value = str[i].charCodeAt();
    }

    test = String.fromCharCode(ascii_value);
    result += test;
  }

  screen.innerHTML = result;
  input.value = "";

  return (result);
};

//Event Listeners
container.addEventListener("input", getInput);
btn.addEventListener("click", ()=> encryt_13(input.value));
