import { useAppSelector } from "../../store/storeHooks";
import { playText } from "../../utils/audioUtils";

const Image = () => {
  const { actualWordFilename } = useAppSelector((state) => state.words);

  const onImageClick = () => {
    playText(actualWordFilename);
  };

  return (
    <div className="flex-1 p-2">
      <button
        className="h-full w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/img/${actualWordFilename}.png")`,
        }}
        onClick={onImageClick}
      ></button>
    </div>
  );
};

export default Image;
