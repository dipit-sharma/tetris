import type { TBlock, TRotate } from "../types";

// a single coordinate used to describe a block in a shape
export type TShapePoint = {
    x: number;
    y: number;
};

// one tetromino expressed as an array of points
export type TShapeArray = TShapePoint[];

// the canonical list of all possible tetrominoes
export type TShapeList = TShapeArray[];

export type TCreateNewShape = {
    // when creating a shape we choose one of the predefined arrays
    shape: TShapeArray;
    color: TBlock;
    rotate: TRotate;
};