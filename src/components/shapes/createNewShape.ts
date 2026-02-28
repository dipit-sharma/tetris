import { COLORS } from "../colors/colors";
import { ERotate } from "../types";
import { RECTANGLE, SHAPES, SQUARE, T_SHAPE } from "./shapes";
import type { TCreateNewShape } from "./types";

export const createNewShape = (): TCreateNewShape => {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    const shapeIndex = Math.floor(Math.random() * SHAPES.length);

    const shapes = [RECTANGLE, SQUARE, T_SHAPE];
    return {
        color: COLORS[colorIndex],
        shape: new Array(4).fill(0).map((_, index) => ({ ...shapes[shapeIndex][index] })),
        rotate: ERotate.ZERO,
    };
};