import Letter from "./Letter";

interface Props {
  letters: string[];
  mistakeIndex: number;
  onLetterClick: (index: number) => void;
}

export default function Letters({
  letters,
  mistakeIndex,
  onLetterClick,
}: Props) {
  return (
    <div className="h-full flex gap-4 justify-center items-center">
      {letters.map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          index={index}
          mistakeIndex={mistakeIndex}
          onLetterClick={onLetterClick}
        />
      ))}
    </div>
  );
}
