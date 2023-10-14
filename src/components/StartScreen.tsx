import { useAppDispatch } from "../store/storeHooks";
import { reset } from "../store/features/wordsSlice.ts";

import playImg from "../assets/img/play.svg";
import backgroundImg from "../assets/img/background-start-screen.jpg";
import ukladanieWyrazowOneLineImg from "../assets/img/ukladanie_wyrazow_one_line.webp";
import ukladanieWyrazowTwoLinesImg from "../assets/img/ukladanie_wyrazow_two_lines.webp";

const StartScreen = () => {
  const dispatch = useAppDispatch();

  const onPlayClick = () => {
    dispatch(reset());
  };

  return (
    <div
      className="h-screen flex justify-center items-center flex-col bg-no-repeat bg-cover bg-bottom"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className={`flex basis-1/3 select-none w-9/12 bg-no-repeat bg-contain bg-top bg-[image:var(--bg-two-lines)] md:w-10/12 md:bg-[image:var(--bg-one-line)]`}
        style={
          {
            "--bg-one-line": `url(${ukladanieWyrazowOneLineImg})`,
            "--bg-two-lines": `url(${ukladanieWyrazowTwoLinesImg})`,
          } as React.CSSProperties
        }
      ></div>
      <button
        className="w-24 h-24 animate-bounce md:w-36 md:h-36 hover:scale-150 hover:transition"
        onClick={onPlayClick}
      >
        <img src={playImg} alt="Play button" />
      </button>
    </div>
  );
};

export default StartScreen;
