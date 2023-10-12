import Bears from "./Bears";
import Lives from "./Lives";
import Points from "./Points";

const Bar = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-2">
        <Bears />
        <Lives />
      </div>
      <Points />
    </>
  );
};

export default Bar;
