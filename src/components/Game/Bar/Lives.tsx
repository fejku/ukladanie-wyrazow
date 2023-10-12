import { LIVES_AMOUNT } from "../../../consts";
import heartImage from "../../../assets/img/heart.png";
import { useAppSelector } from "../../../store/storeHooks";

const Lives = () => {
  const lives = useAppSelector((state) => state.lives.lives);

  return (
    <div className="flex-1 flex justify-end gap-1 mr-1">
      {[...Array(LIVES_AMOUNT)].map((_, index) => (
        <div
          key={index}
          className={`h-7 w-7 bg-contain bg-center bg-no-repeat md:h-12 md:w-12 ${
            index < lives ? "" : "grayscale"
          } `}
          style={{ backgroundImage: `url(${heartImage})` }}
        ></div>
      ))}
    </div>
  );
};

export default Lives;
