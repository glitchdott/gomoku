import { COLORS, COLS, ROWS, chessArr } from "./config.js";

let currentColor = COLORS.BLACK;
// let count = 0;

/**
 * 创建一个棋子DOM元素
 * @returns 棋子DOM元素
 */
function createChessPiece() {
  // 创建棋子元素
  const chessDiv = document.createElement("div");
  // 创建棋子中的数字元素
  const span = document.createElement("span");
  // 把数字元素放入棋子中
  chessDiv.appendChild(span);
  // 给棋子元素添加通用类名
  chessDiv.classList.add("chess");
  // 给棋子元素添加颜色类名
  chessDiv.classList.add(currentColor);
  // 给棋子元素添加自定义属性
  chessDiv.dataset.color = currentColor;
  // 更新当前颜色变量
  currentColor = currentColor == COLORS.BLACK ? COLORS.WHITE : COLORS.BLACK;
  // 将棋子元素返回
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
