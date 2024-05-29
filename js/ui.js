// 导入模块
import { ROWS, COLS } from "./config.js";

// 获取棋盘
const oBoard = document.querySelector(".board");

/**
 * 初始化函数
 */
export function init() {
  oBoard.innerHTML = "";
  // 创建文档片段
  const frag = document.createDocumentFragment();
  // 循环行
  for (let i = 0; i < ROWS; i++) {
    // 创建行元素
    const tr = document.createElement("tr");
    // 循环列
    for (let j = 0; j < COLS; j++) {
      // 创建格子元素
      const td = document.createElement("td");
      // 设置格子元素的自定义属性
      td.dataset.row = i;
      td.dataset.col = j;
      // 将格子元素放入行中
      tr.appendChild(td);
    }
    // 一行中所有的列循环完成后，将行元素放入文档片段中
    frag.appendChild(tr);
  }
  // 将文档片段放入棋盘中
  oBoard.appendChild(frag);
}
