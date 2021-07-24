import { colors, refs } from "./variables";
import randomColor from "./random-color-picker";

let intervalId = null;

refs.startBtn.addEventListener("click", () => {
    refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
    refs.bodyElement.style.backgroundColor = randomColor(colors);
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
});