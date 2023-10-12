import Letter from "./Letter";
import { useAppSelector } from "../../store/storeHooks";

const Letters = () => {
  const letters = useAppSelector((state) => state.words.letters);

  return (
    <div className="relative min-h-[5rem] flex align-middle justify-center gap-1 flex-wrap md:min-h-[8.5rem] md:gap-5">
      {letters.map((letter, index) => (
        <Letter key={index} letter={letter} letterIndex={index} />
      ))}
    </div>
  );
};

export default Letters;
