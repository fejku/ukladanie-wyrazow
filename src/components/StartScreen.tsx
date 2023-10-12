import { useAppDispatch } from "../store/storeHooks";
import { reset } from "../store/features/wordsSlice.ts";

import playImg from "../assets/img/play.svg";
import backgroundImg from "../assets/img/background-start-screen.jpg";

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
      <div className="flex flex-col basis-1/3 font-meatloaf text-8xl md:flex-row select-none">
        <div className="md:mr-4">Układanie</div>
        <div className="text-center">wyrazów</div>
      </div>
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
