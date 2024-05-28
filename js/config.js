export const ROWS = 14;
export const COLS = 14;

export const COLORS = {
  BLACK: "black",
  WHITE: "white",
};

export const chessArr = Array.from({ length: ROWS + 1 }, () =>
  Array(COLS + 1).fill(null)
);
