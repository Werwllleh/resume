import React from 'react';
import {useStore} from "effector-react";
import {$count, clear, decrement, increment} from "../../models/counter";


const Counter = () => {

    const currentCount: number = useStore($count);

    return (
        <section>
            <h1>Count: {currentCount}</h1>
            <div>
                <button onClick={() => { increment(1) }}> + 1 </button>
                <button onClick={() => { decrement(1) }}> - 1 </button>
            </div>
            <div>
                <button onClick={() => { increment(5) }}> + 5 </button>
                <button onClick={() => { decrement(5) }}> - 5 </button>
            </div>
            <div>
                <button onClick={() => { clear() }}> clear </button>
            </div>
        </section>
    );
}

export default Counter;
