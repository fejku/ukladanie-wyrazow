import Letters from "./Letters";
import Bar from "./Bar/Bar";
import Image from "./Image";
import Word from "./Word";

import backgroundImg from "../../assets/img/background-game.png";

const Game = () => {
  return (
    <div
      className="h-[100dvh] flex flex-col bg-contain"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImg})`,
      }}
    >
      <Bar />
      <div className="flex-1 flex flex-col md:flex-row">
        <Image />
        <Word />
      </div>
      <Letters />
    </div>
  );
};

export default Game;
