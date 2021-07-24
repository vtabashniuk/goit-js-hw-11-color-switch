import { colors, refs, intervalId } from "./variables";
import randomColor from "./random-color-picker";

refs.startBtn.addEventListener("click", () => {
    refs.startBtn.disabled = true;
    refs.intervalId = setInterval(() => {
    refs.bodyElement.style.backgroundColor = randomColor(colors);
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(refs.intervalId);
    refs.startBtn.disabled = false;
});