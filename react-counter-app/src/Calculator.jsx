import React, { useState } from 'react';
import './App.css'; // または専用の Calculator.css でも可

export default function Calculator() {
  // 表示欄（display）の状態管理（初期値は空文字）
  const [display, setDisplay] = useState("");

  // ボタンの配置を表す配列
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  // 計算を実行するメソッドの定義
  const calculate = (expression) => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // 有効な式であるかチェック
    const match = expression.match(validExpression);
    if (!match) {
      throw new Error('無効な式です。');
    }

    const num1 = parseInt(match[1], 10);
    const operator = match[2];
    const num2 = parseInt(match[3], 10);

    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          throw new Error('ゼロによる割り算はできません。');
        }
        result = Math.floor(num1 / num2);
        break;
      default:
        throw new Error('無効な演算子です。');
    }

    return result.toString();
  };

  // displayを更新するイベントハンドラの定義
  const handleClick = (btn) => {
    if (btn === 'C') {
      // クリアボタン（C）
      setDisplay("");
    } else if (btn === '=') {
      // イコールボタン：計算を実行
      try {
        const result = calculate(display);
        setDisplay(result);
      } catch (error) {
        alert(error.message);
        setDisplay("");
      }
    } else {
      // 数字や演算子ボタンを追加
      setDisplay((prev) => prev + btn);
    }
  };

  return (
    <div className="calculator-container">
      {/* タイトル_h2要素 */}
      <h2>電卓アプリ</h2>

      {/* displayをdiv要素に埋め込む。displayが空の場合は空白とする */}
      <div className="display">
        {display === "" ? "" : display}
      </div>

      {/* buttons配列で定義された各ボタンをグリッド状に配置 */}
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}