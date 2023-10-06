import bearImage from "../../assets/img/bear-done.png";
import heartImage from "../../assets/img/heart.png";

import { WORDS_AMOUNT } from "../../consts";

interface Props {
  lives: number;
  points: number;
}

export default function StatusBar({ lives, points }: Props) {
  return (
    <div className="flex border-b p-2">
      <div className="flex-1 flex">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-12 w-12 bg-contain bg-center bg-no-repeat p-2 ${
              index < Math.floor(points / (WORDS_AMOUNT / 5))
                ? ""
                : "grayscale contrast-0"
            } `}
            style={{ backgroundImage: `url(${bearImage})` }}
          ></div>
        ))}
      </div>
      <div className="flex-1 flex justify-end">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-12 w-12 bg-contain bg-center bg-no-repeat ${
              index < lives ? "" : "grayscale"
            } `}
            style={{ backgroundImage: `url(${heartImage})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
