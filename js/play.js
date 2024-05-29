import { check } from "./check.js";
import { COLORS, COLS, ROWS, chessArr } from "./config.js";

let currentColor = COLORS.BLACK;

/**
 * 创建一个棋子DOM元素
 * @returns 棋子DOM元素
 */
function createChessPiece() {
  const chessDiv = document.createElement("div");
  chessDiv.classList.add("chess");
  chessDiv.classList.add(currentColor);
  chessDiv.dataset.color = currentColor;
  currentColor = currentColor == COLORS.BLACK ? COLORS.WHITE : COLORS.BLACK;
  return chessDiv;
}

/**
 * 将棋子放置到棋盘上
 * @param {Number} row 行号
 * @param {Number} col 列号
 */
export function placeChessPiece(row, col) {
  // 检查位置上是否已经有棋子
  if (chessArr[row][col]) {
    console.log("这个位置上已经有棋子");
    return;
  }
  // 根据行与列获取格子
  const oTd = getTd(row, col);
  // 创建棋子元素
  const chessDiv = createChessPiece();
  // 处理边界情况
  updateChessPieceClass(chessDiv, row, col);
  // 将棋子元素放入格子中
  oTd.appendChild(chessDiv);
  // 更新chessArr的数据
  chessArr[row][col] = chessDiv.dataset.color;
  // 返回
  return chessDiv;
}

/**
 * get td from row & col
 * @param {Number} row Row Number
 * @param {Number} col Column Number
 * @returns
 */
function getTd(row, col) {
  row = row == ROWS ? row - 1 : row;
  col = col == COLS ? col - 1 : col;
  return document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
}

function updateChessPieceClass(el, row, col) {
  row == ROWS && el.classList.add("bottom_border");
  col == COLS && el.classList.add("right_border");
}
