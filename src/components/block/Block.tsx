import type { TBlock } from "../types";
import "./Block.css";

export const Block = ({ color, top, bottom, left, right }: TBlock) => {
  return (
    <div
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
