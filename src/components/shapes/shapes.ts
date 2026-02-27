import type { TShapeArray, TShapeList } from "./types";

export const RECTANGLE: TShapeArray = [
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 1 },
];

export const SQUARE: TShapeArray = [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
];

export const T_SHAPE: TShapeArray = [
    { x: 4, y: 0 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
];

export const SHAPES: TShapeList = [RECTANGLE, SQUARE, T_SHAPE];
