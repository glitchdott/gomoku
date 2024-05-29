import { COLS, ROWS, chessArr } from "./config.js";

/**
 * 给定行和列以及棋子的颜色，检查是否游戏结束
 * @param {Number} row Row Number
 * @param {Number} col Column Number
 * @param {String} color Chess Color
 * @returns Result of Check
 */
export function check(row, col, color) {
  return (
    // 纵向
    checkDirection(row, col, color, 1, 0) ||
    // 横向
    checkDirection(row, col, color, 0, 1) ||
    // 右下斜向
    checkDirection(row, col, color, 1, 1) ||
    // 左下斜向
    checkDirection(row, col, color, 1, -1)
  );
}

/**
 *
 * @param {Number} row Row Number
 * @param {Number} col Column Number
 * @param {String} color Chess Color
 * @param {Number} dx 行的增量
 * @param {Number} dy 列的增量
 * @returns 是否大于5
 */
function checkDirection(row, col, color, dx, dy) {
  let count =
    countInDirection(row, col, color, dx, dy) +
    countInDirection(row, col, color, -dx, -dy) -
    1;
  return count >= 5;
}

function countInDirection(row, col, color, dx, dy) {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    const newRow = row + dx * i;
    const newCol = col + dy * i;
    if (newRow < 0 || newRow > ROWS || newCol < 0 || newCol > COLS) {
      return;
    }
    if (chessArr[newRow][newCol] == color) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
