import Letter from "./Letter";

interface Props {
  word: string;
  letters: string[];
  onLetterClick: (index: number) => void;
}

export default function Letters({ letters, onLetterClick }: Props) {
  return (
    <div className="h-full flex gap-4 justify-center items-center">
      {letters.map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          index={index}
          onLetterClick={onLetterClick}
        />
      ))}
    </div>
  );
}
