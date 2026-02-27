import { Block } from "../block/Block";
import type { TShape } from "../types";

export const Square = (props: TShape) => {
  return (
    <div
      style={{
        transform: `rotate(${props.rotate}deg)`,
        transformOrigin: "10vw 10vw",
      }}
    >
      <div style={{ display: "flex" }}>
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <Block key={i} {...props} />
          ))}
      </div>
      <div style={{ display: "flex" }}>
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <Block key={i} {...props} />
          ))}
      </div>
    </div>
  );
};
