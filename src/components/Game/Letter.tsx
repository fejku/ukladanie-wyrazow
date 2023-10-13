import { useState } from "react";

import { loseLive } from "../../store/features/livesSlice";
import {
  incrementWordIndex,
  nextLetter,
  nextWord,
} from "../../store/features/wordsSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import {
  playFailure,
  playGameOver,
  playGameWin,
  playSuccess,
} from "../../utils/audioUtils";

import cancelImg from "../../assets/img/cancel.svg";
import { gainPoint, losePoint } from "../../store/features/bearsSlice";
import { stageScoreScreen } from "../../store/features/stagesSlice";

interface Props {
  letter: string;
  letterIndex: number;
}

const Letter: React.FC<Props> = ({ letter, letterIndex }) => {
  const {
    actualWord,
    actualWordIndex,
    actualLetter,
    actualLetterIndex,
    words,
  } = useAppSelector((state) => state.words);
  const lives = useAppSelector((state) => state.lives.lives);
  const dispatch = useAppDispatch();

  const [showMistake, setShowMistake] = useState(false);

  const isLastLive = lives === 1;
  const isCorrectAnswer = letter === actualLetter;

  const gameWin = () => {
    playGameWin();
    dispatch(incrementWordIndex());
    setTimeout(() => {
      dispatch(stageScoreScreen());
    }, 3000);
  };

  const correctWord = () => {
    playSuccess();
    setTimeout(() => {
      dispatch(nextWord());
    }, 1000);
  };

  const correctLetter = () => {
    dispatch(nextLetter(letterIndex));

    if (actualWord.length - 1 === actualLetterIndex) {
      dispatch(gainPoint());

      if (actualWordIndex === words.length - 1) {
        gameWin();
      } else {
        correctWord();
      }
    }
  };

  const gameOver = () => {
    setShowMistake(true);
    playGameOver();
    dispatch(loseLive());
    setTimeout(() => {
      dispatch(stageScoreScreen());
    }, 1000);
  };

  const loseOneLive = () => {
    playFailure();
    setShowMistake(true);
    setTimeout(() => {
      setShowMistake(false);
    }, 1000);
    dispatch(loseLive());
  };

  const wrongAnswer = () => {
    dispatch(losePoint());
    if (isLastLive) {
      gameOver();
    } else {
      loseOneLive();
    }
  };

  const onLetterClick = () => {
    if (isCorrectAnswer) {
      correctLetter();
    } else {
      wrongAnswer();
    }
  };

  return (
    <button
      className="relative border rounded-lg py-2 w-14 my-2 font-elementarz text-5xl select-none bg-white bg-opacity-50 md:text-8xl md:w-16 lg:w-24"
      onClick={onLetterClick}
    >
      {letter}
      <div
        className={`absolute inset-0 bg-contain bg-no-repeat bg-center m-1 md:m-2 ${
          showMistake ? "" : "hidden"
        }`}
        style={{ backgroundImage: `url(${cancelImg})` }}
      ></div>
    </button>
  );
};

export default Letter;
