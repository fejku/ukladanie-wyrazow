import { useEffect, useState } from "react";

import Letters from "./components/Letters";
import Obraz from "./components/Obraz";
import StatusBar from "./components/StatusBar";

import { drawWords, wordToLetters } from "./utils/Utils";
import { WORDS_AMOUNT } from "./consts";

import successSound from "./assets/sound/success.mp3";
import gameOverSound from "./assets/sound/game-over.mp3";
import gameWinSound from "./assets/sound/game-win.mp3";
import failureSound from "./assets/sound/failure.mp3";

import "./App.css";

function App() {
  const [words, setWords] = useState<string[]>([]);
  const [actualWordIndex, setActualWordIndex] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);
  const [actualLetterIndex, setActualLetterIndex] = useState(0);
  const [lives, setLives] = useState(5);
  const [mistakeIndex, setMistakeIndex] = useState(-1);

  // const [isWinner, setIsWinner] = useState(false);
  // const [isGameActive, setIsGameActive] = useState(false);

  const newGame = () => {
    const drawnWords = drawWords();
    const newLetters = wordToLetters(drawnWords[0]);

    setWords(drawnWords);
    setActualWordIndex(0);
    setLetters(newLetters);
    setActualLetterIndex(0);
    setLives(5);

    // speak(drawnWords[0].word);
  };

  const nextWord = () => {
    setActualWordIndex((i) => {
      const result = i + 1;

      if (result === WORDS_AMOUNT) {
        new Audio(gameWinSound).play();
        newGame();
        return 0;
      } else {
        new Audio(successSound).play();
      }

      const newLetters = wordToLetters(words[result]);
      setLetters(newLetters);
      setActualLetterIndex(0);

      // speak(words[result].word);

      return result;
    });
  };

  useEffect(() => {
    newGame();
  }, []);

  const onLetterClick = (index: number) => {
    if (words[actualWordIndex][actualLetterIndex] === letters[index]) {
      setLetters((l) => l.filter((_, i) => i !== index));
      setActualLetterIndex((i) => {
        const result = i + 1;

        if (result === words[actualWordIndex].length) {
          nextWord();
          // setIsWinner(true);
          return 0;
        }
        return result;
      });
    } else {
      setLives((l) => {
        if (l === 1) {
          new Audio(gameOverSound).play();
          newGame();
          return 5;
        }
        setMistakeIndex(index);
        setTimeout(() => {
          setMistakeIndex(-1);
        }, 1000);
        new Audio(failureSound).play();
        return l - 1;
      });
    }
  };

  if (words.length === 0) return null;

  const actualWord = words[actualWordIndex];

  return (
    <>
      <div className=" w-screen h-screen flex flex-col">
        <StatusBar lives={lives} points={actualWordIndex} />
        <div className="flex border-b justify-around gap-2 py-2">
          {[...Array(WORDS_AMOUNT)].map((_, index) => (
            <div
              key={index}
              className={`${
                actualWordIndex <= index ? "bg-gray-300" : "bg-green-600"
              }  h-5 w-full`}
            ></div>
          ))}
        </div>
        <div className="flex-1 flex">
          <Obraz word={words[actualWordIndex].toLowerCase()} />
          <div className="grow border-l">
            <div className="h-full flex justify-center items-center text-8xl font-elementarz relative">
              {actualWord.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`relative letter select-none ${
                    index >= actualLetterIndex ? "text-transparent" : ""
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-t relative p-2">
          <Letters
            letters={letters}
            mistakeIndex={mistakeIndex}
            onLetterClick={onLetterClick}
          />
        </div>
      </div>

      {/* {!isGameActive && (
        <div className="absolute h-screen w-screen top-0 left-0 z-10">
          <div className="relative h-full w-full">
            <div className="absolute h-full w-full top-0 left-0 bg-black/90"></div>
            {isWinner && (
              <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
              </div>
            )}
            <button>
              <div
                className="absolute h-24 w-24  top-1/2 left-1/2
             bg-white"
              ></div>
            </button>
          </div>
        </div> 
      )}*/}
    </>
  );
}

export default App;
