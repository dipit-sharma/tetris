import type { TBlock } from "../types";
import "./Block.css";

export const Block = ({
  color,
  top,
  bottom,
  left,
  right,
  onDrag,
  onClick,
  onDragStart,
}: TBlock) => {
  return (
    <div
      draggable
      onTouchMove={onDrag}
      onTouchStart={onDragStart}
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderTopColor: top,
        borderBottomColor: bottom,
        borderLeftColor: left,
        borderRightColor: right,
      }}
      className="block"
    ></div>
  );
};
