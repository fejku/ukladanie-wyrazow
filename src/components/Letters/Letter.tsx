import { useState } from "react";

import cancelImg from "../../assets/img/cancel.svg";

interface Props {
  letter: string;
  index: number;
  correctLetter: string;
  onLetterClick: (index: number) => void;
}

export default function Letter({
  letter,
  index,
  correctLetter,
  onLetterClick,
}: Props) {
  const [showMistake, setShowMistake] = useState(false);

  const handleClick = () => {
    if (letter !== correctLetter) {
      setShowMistake(true);
      setTimeout(() => {
        setShowMistake(false);
      }, 1000);
    }
    onLetterClick(index);
  };

  return (
    <div
      className="w-24 h-28 font-elementarz border-2 rounded-lg cursor-pointer select-none relative"
      onClick={handleClick}
    >
      <div className="absolute text-8xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
        {letter}
      </div>
      <div
        className={`absolute w-20 h-24 top-2 left-2 bg-no-repeat bg-center bg-contain ${
          showMistake ? "" : "hidden"
        }`}
        style={{ backgroundImage: `url(${cancelImg})` }}
      ></div>
    </div>
  );
}
