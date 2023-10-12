import { WORDS_AMOUNT } from "../../../consts";
import { useAppSelector } from "../../../store/storeHooks";

const Points = () => {
  const actualWordIndex = useAppSelector(
    (state) => state.words.actualWordIndex
  );

  return (
    <div className="flex justify-around gap-1 my-2 mx-1 md:gap-2">
      {[...Array(WORDS_AMOUNT)].map((_, index) => (
        <div
          key={index}
          className={`${
            actualWordIndex <= index ? "bg-gray-400" : "bg-green-600"
          } h-3 w-full md:h-5`}
        ></div>
      ))}
    </div>
  );
};

export default Points;
