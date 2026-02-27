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
        shape: shapes[shapeIndex],
        rotate: ERotate.ZERO,
    };
};