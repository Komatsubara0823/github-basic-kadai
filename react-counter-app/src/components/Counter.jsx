import { useState } from "react";
import { CounterDisplay } from './CounterDisplay';
import { CounterButton } from './CounterButton';

export function Counter() {
    // カウント状態
    const [count, setCount] = useState(0);

    // カウントを加算するイベントハンドラ
    const increment = () => setCount(prevCount => prevCount + 1);

    // カウントを減算するイベントハンドラ
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
        <div>
            <h2>カウンターアプリ</h2>
            <CounterDisplay count={count} />
            <CounterButton label="+" onClick={increment} disabled={count >= 10} />
            <CounterButton label="-" onClick={decrement} disabled={count <=0} />
        </div>
    );
};