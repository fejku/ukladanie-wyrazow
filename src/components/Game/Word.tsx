import { useAppSelector } from "../../store/storeHooks";

import checkedSVG from "../../assets/img/checked.svg";

const Word = () => {
  const { actualLetterIndex, actualWord } = useAppSelector(
    (state) => state.words
  );

  const isWholeWordCorrect = actualLetterIndex === actualWord.length;

  return (
    <div className="flex justify-center items-center my-4 md:m-0 md:flex-1">
      <div className="relative flex justify-center items-center">
        {actualWord.split("").map((letter, index) => (
          <div
            key={index}
            className={`relative font-elementarz text-6xl select-none ${
              actualLetterIndex > index ? "" : "invisible"
            } md:text-8xl after:absolute after:top-0 after:left-[10%] after:w-[80%] after:h-full after:border-b after:border-b-black after:visible`}
          >
            {letter}
          </div>
        ))}
        {isWholeWordCorrect && (
          <img
            src={checkedSVG}
            alt="like icon"
            className="absolute w-12 h-12 -right-20 top-[6px] md:w-20 md:h-20 md:top-2 md:-right-28"
          />
        )}
      </div>
    </div>
  );
};

export default Word;
