import { useState } from "react";
import "./App.css";
import { Block } from "./components/block/Block";
import { grey, red } from "./components/colors/colors";
import type { TBlock } from "./components/types";

const ARENA_HEIGHT = 15;
const ARENA_WIDTH = 10;

function App() {
  const [arena, setArena] = useState(
    Array(ARENA_HEIGHT).fill(Array(ARENA_WIDTH).fill(grey)),
  );

  return (
    <div className="canvas">
      <div className="score-board">Score, Restart</div>
      <div className="arena">
        {arena.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell: TBlock, cellIndex: number) => (
              <Block key={cellIndex} {...cell} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
