export type TBlock = {
    color: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export type TShape = TBlock & {
    rotate: TRotate;
}

export const ERotate = {
    ZERO: 0,
    NINETY: 90,
    ONE_EIGHTY: 180,
    TWO_SEVENTY: 270,
} as const;

export type TRotate = typeof ERotate[keyof typeof ERotate];