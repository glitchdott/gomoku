import { ROWS, COLS } from "./config.js";

const oBoard = document.querySelector(".board");

/**
 * 初始化函数
 */
export function init() {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < ROWS; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < COLS; j++) {
      const td = document.createElement("td");
      td.dataset.row = i;
      td.dataset.col = j;
      tr.appendChild(td);
    }
    frag.appendChild(tr);
  }
  oBoard.appendChild(frag);
}
