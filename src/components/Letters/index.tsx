import Letter from "./Letter";

interface Props {
  letters: string[];
  correctLetter: string;
  onLetterClick: (index: number) => void;
}

export default function Letters({
  letters,
  correctLetter,
  onLetterClick,
}: Props) {
  return (
    <div className="h-full flex gap-4 justify-center items-center">
      {letters.map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          index={index}
          correctLetter={correctLetter}
          onLetterClick={onLetterClick}
        />
      ))}
    </div>
  );
}
