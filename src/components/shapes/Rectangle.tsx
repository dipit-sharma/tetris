import { Block } from "../block/Block";
import type { TShape } from "../types";

export const Rectangle = (props: TShape) => {
  return (
    <div
      style={{
        display: "flex",
        transform: `rotate(${props.rotate}deg)`,
        transformOrigin: "25% 50%",
      }}
    >
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Block key={i} {...props} />
        ))}
    </div>
  );
};
