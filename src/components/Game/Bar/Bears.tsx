import bearImage from "../../../assets/img/bear-done.png";
import { LIVES_AMOUNT } from "../../../consts";
import { useAppSelector } from "../../../store/storeHooks";

const Bears = () => {
  const { bears } = useAppSelector((state) => state.bears);

  return (
    <div className="flex-1 flex gap-1 ml-1">
      {[...Array(LIVES_AMOUNT)].map((_, index) => (
        <div
          key={index}
          className={`h-7 w-7 bg-contain bg-center bg-no-repeat md:h-12 md:w-12 ${
            index < bears ? "" : "grayscale contrast-0"
          } `}
          style={{ backgroundImage: `url(${bearImage})` }}
        ></div>
      ))}
    </div>
  );
};

export default Bears;
