import { Block } from "../block/Block";
import type { TShape } from "../types";

export const Tee = (props: TShape) => {
  return (
    <div
      style={{
        transform: `rotate(${props.rotate}deg)`,
        transformOrigin: "25% 50%",
        width: "fit-content",
      }}
    >
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <Block {...props} />
      </div>
      <div style={{ display: "flex" }}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Block key={i} {...props} />
          ))}
      </div>
    </div>
  );
};
