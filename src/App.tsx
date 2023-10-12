import Game from "./components/Game/Game";
import ScoreScreen from "./components/ScoreScreen";
import StartScreen from "./components/StartScreen";
import { useAppSelector } from "./store/storeHooks";

function App() {
  const stage = useAppSelector((state) => state.stage.stage);

  switch (stage) {
    case "START_SCREEN":
      return <StartScreen />;
    case "GAME":
      return <Game />;
    case "SCORE_SCREEN":
      return <ScoreScreen />;
    default:
      return <StartScreen />;
  }
}

export default App;
