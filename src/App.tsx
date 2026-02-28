import { useState } from "react";
import "./App.css";
import { Block } from "./components/block/Block";
import { grey } from "./components/colors/colors";
import { Header } from "./components/header/Header";
import { createNewShape } from "./components/shapes/createNewShape";
import type { TCreateNewShape } from "./components/shapes/types";
import type { TBlock } from "./components/types";

const ARENA_HEIGHT = 15;
const ARENA_WIDTH = 10;
const GAME_SPEED = 500;

function App() {
  const [arena, setArena] = useState(
    Array(ARENA_HEIGHT)
      .fill(null)
      .map(() => Array(ARENA_WIDTH).fill(grey)),
  );

  const isCenterEmpty = () => {
    return arena[0][4].color === grey.color && arena[0][5].color === grey.color;
  };

  const canMoveDown = (shape: TCreateNewShape): boolean => {
    for (const point of shape.shape) {
      const { x, y } = point;
      if (y + 1 >= ARENA_HEIGHT) {
        return false;
      }
      if (arena[y + 1][x].color !== grey.color) {
        return false;
      }
    }
    return true;
  };

  const moveShapeDown = (shape: TCreateNewShape) => {
    const newArena = arena.map((row) => [...row]);
    shape.shape.forEach((point) => {
      point.y += 1;
      newArena[point.y][point.x] = shape.color;
    });

    setArena(newArena);
  };

  const neutraliseArena = () => {
    const newArena = arena.map((row) => [...row]);
    newArena.forEach((row, rowIndex) => {
      const isRowFull = row.every((cell: TBlock) => cell.color !== grey.color);
      if (isRowFull) {
        newArena.splice(rowIndex, 1);
        newArena.unshift(Array(ARENA_WIDTH).fill(grey));
      }
    });
    setArena(newArena);
  };

  const onDragShape = (e: React.TouchEvent<HTMLDivElement>) => {
    //e.preventDefault();
    console.log(e.touches[0].clientX);
  };

  const onShapeClick = () => {
    console.log("clicked");
  };

  const gameLoop = () => {
    let counter = 0;
    while (isCenterEmpty() && counter < 1) {
      const shape: TCreateNewShape = createNewShape();

      let timer = setInterval(() => {
        if (canMoveDown(shape)) {
          moveShapeDown(shape);
        } else {
          clearInterval(timer);
        }
      }, GAME_SPEED);

      neutraliseArena();
      counter++;
    }
  };

  return (
    <div className="canvas">
      <div className="score-board">
        <Header start={gameLoop} />
      </div>
      <div className="arena">
        {arena.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell: TBlock, cellIndex: number) => (
              <Block
                key={cellIndex}
                {...cell}
                onClick={onShapeClick}
                onDrag={onDragShape}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
