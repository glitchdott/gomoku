import { init } from "./ui.js";
import { placeChessPiece } from "./play.js";

const oBoard = document.querySelector(".board");
let tdWidth;
let tdHeight;
let isGameOver = false;

/**
 * 事件绑定函数
 */
function bindEvent() {
  oBoard.addEventListener("click", handleBoardClick);
}

/**
 * 处理点击事件
 * @param {*} e 事件对象
 * @returns
 */
function handleBoardClick(e) {
  // 将事件对象保存在变量中
  const tar = e.target;
  // 判断点击事件对象是否为格子，以及当前游戏是否结束
  if (tar.tagName !== "TD" || isGameOver) {
    return;
  }
  // 获取新的行号和列号
  const { newRow, newCol } = _getNewRowAndNewCol();
  // 将棋子放在新的行号和列号对应的格子中
  placeChessPiece(newRow, newCol);

  /**
   * 根据点击位置计算新的行号和列号
   * @returns 新的行号和列号
   */
  function _getNewRowAndNewCol() {
    // 获取点击的格子的行号和列号
    const row = +tar.dataset.row;
    const col = +tar.dataset.col;
    // 获取点击位置相对格子的坐标
    const x = e.offsetX;
    const y = e.offsetY;
    // 获取格子的宽和高
    tdWidth = tdWidth ? tdWidth : tar.clientWidth;
    tdHeight = tdHeight ? tdHeight : tar.clientHeight;
    // 计算出新的行号和列号
    const newRow = y < tdHeight / 2 ? row : row + 1;
    const newCol = x < tdWidth / 2 ? col : col + 1;
    // 返回
    return {
      newRow,
      newCol,
    };
  }
}

init();
bindEvent();