import "./App.css";
import { red } from "./components/colors/colors";
import { Square } from "./components/shapes/Square";
import { Tee } from "./components/shapes/Tee";
import { ERotate } from "./components/types";

function App() {
  return (
    <div className="canvas">
      <div className="score-board">Score, Restart</div>
      <div className="arena">
        <Square {...red} rotate={ERotate.NINETY} />
        <Tee {...red} rotate={ERotate.ZERO} />
      </div>
    </div>
  );
}

export default App;
