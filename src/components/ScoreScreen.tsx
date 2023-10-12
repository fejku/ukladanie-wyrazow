import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import { BEARS_AMOUNT, LIVES_AMOUNT } from "../consts";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { playShortTick } from "../utils/audioUtils";
import bgImg from "../assets/img/background-score-screen.webp";
import refreshImg from "../assets/img/refresh.svg";
import bearImg from "../assets/img/bear-done.png";
import heartImg from "../assets/img/heart.png";
import { reset } from "../store/features/wordsSlice";

import useWindowSize from "react-use/lib/useWindowSize";

const ScoreScreen = () => {
  const { width, height } = useWindowSize();
  const { bears } = useAppSelector((state) => state.bears);
  const { lives } = useAppSelector((state) => state.lives);
  const dispatch = useAppDispatch();

  const [hidePlayAgainBtn, setHidePlayAgainBtn] = useState(true);
  const [bearIndex, setBearIndex] = useState(0);
  const [liveIndex, setLiveIndex] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bearIndex < bears) {
        setBearIndex((i) => i + 1);
        setPoints((i) => i + 1);
        playShortTick();
      } else if (liveIndex < lives) {
        setLiveIndex((i) => i + 1);
        setPoints((i) => i + 1);
        playShortTick();
      } else {
        setHidePlayAgainBtn(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [bearIndex, liveIndex, hidePlayAgainBtn, bears, lives]);

  const handlePlayAgainClick = () => {
    dispatch(reset());
  };

  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex mb-20 gap-4">
        {[...Array(BEARS_AMOUNT)].map((_, index) => (
          <img
            key={index}
            src={bearImg}
            alt="Bear"
            className={`h-16 md:h-24 select-none ${
              index >= bearIndex && "grayscale"
            }`}
          />
        ))}
      </div>
      <div className="flex mb-24 gap-4">
        {[...Array(LIVES_AMOUNT)].map((_, index) => (
          <img
            key={index}
            src={heartImg}
            alt="Heart"
            className={`h-10 md:h-16 select-none  ${
              index >= liveIndex && "grayscale"
            }`}
          />
        ))}
      </div>
      <div className="relative text-6xl font-elementarz mb-24 md:text-8xl select-none">
        Punkty:{" "}
        <span className="absolute font-meatloaf text-8xl -top-6 -right-16 md:text-[10rem] md:-top-11 md:-right-32">
          {points}
        </span>
      </div>
      <button
        className={`animate-bounce ${hidePlayAgainBtn && "invisible"}`}
        onClick={handlePlayAgainClick}
      >
        <img
          src={refreshImg}
          alt="Refresh button"
          className="h-24 w-24 select-none md:h-32 md:w-32"
        />
      </button>
      <Confetti width={width} height={height} run={lives > 0} />
    </div>
  );
};

export default ScoreScreen;
