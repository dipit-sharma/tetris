import { useRef, useState } from "react";
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
  const dragStart = useRef(0);
  const currShape = useRef<TCreateNewShape>(null);

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

  const moveShapeLeft = (shape: TCreateNewShape) => {
    setArena((prev) => {
      const newArena = prev.map((row) => [...row]);
      // every point in shape should be > 0 else return
      const isLeftmost = shape.shape.every((point) => point.x > 0);
      if (!isLeftmost) {
        return prev;
      }
      shape.shape.forEach((point) => {
        point.x -= 1;
        newArena[point.y][point.x] = shape.color;

        newArena[point.y][point.x + 1] = grey;
      });
      return newArena;
    });
  };

  const moveShapeRight = (shape: TCreateNewShape) => {
    setArena((prev) => {
      const newArena = prev.map((row) => [...row]);
      const isRightmost = shape.shape.every(
        (point) => point.x < ARENA_WIDTH - 1,
      );
      if (!isRightmost) {
        return prev;
      }
      shape.shape.forEach((point) => {
        point.x += 1;
        newArena[point.y][point.x] = shape.color;

        newArena[point.y][point.x - 1] = grey;
      });
      return newArena;
    });
  };

  const onDragShape = (e: React.TouchEvent<HTMLDivElement>) => {
    //e.preventDefault();
    console.log(e.touches[0].clientX);
    // if dragStart.current - e.touches[0].clientX > 50 then move shape right else move shape left
    if (dragStart.current - e.touches[0].clientX > 50) {
      moveShapeLeft(currShape.current!);
    } else if (dragStart.current - e.touches[0].clientX < -50) {
      moveShapeRight(currShape.current!);
    }
  };

  const onDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    dragStart.current = e.touches[0].clientX;
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

  const onShapeClick = () => {
    console.log("clicked");
  };

  const gameLoop = () => {
    let counter = 0;
    while (isCenterEmpty() && counter < 1) {
      const shape: TCreateNewShape = createNewShape();
      currShape.current = shape;

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
                onDragStart={onDragStart}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
