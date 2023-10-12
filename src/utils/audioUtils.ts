import failureSound from "../assets/audio/failure.mp3";
import gameOverSound from "../assets/audio/game-over.mp3";
import gameWinSound from "../assets/audio/game-win.mp3";
import successSound from "../assets/audio/success.mp3";
import shortTickSound from "../assets/audio/short-tick.mp3";

export const playFailure = () => {
  new Audio(failureSound).play();
};

export const playGameOver = () => {
  new Audio(gameOverSound).play();
};

export const playGameWin = () => {
  new Audio(gameWinSound).play();
};

export const playSuccess = () => {
  new Audio(successSound).play();
};

export const playShortTick = () => {
  new Audio(shortTickSound).play();
};

export const playText = (text: string) => {
  new Audio(`/sound/${text}.mp3`).play();
};
