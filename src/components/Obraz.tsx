interface Props {
  word: string;
}

export default function Obraz({ word }: Props) {
  return (
    <button
      className="h-full basis-1/4 p-2"
      onClick={() => {
        new Audio(`/sound/${word}.mp3`).play();
      }}
    >
      <div
        className="h-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/img/${word}.png")` }}
      ></div>
    </button>
  );
}
