interface Props {
  letter: string;
  index: number;
  onLetterClick: (index: number) => void;
}

export default function Letter({ letter, index, onLetterClick }: Props) {
  const handleClick = () => {
    onLetterClick(index);
  };

  return (
    <div
      className="w-24 p-4 font-elementarz flex justify-center items-center text-8xl border-2 rounded-lg cursor-pointer select-none"
      onClick={handleClick}
    >
      {letter}
    </div>
  );
}
