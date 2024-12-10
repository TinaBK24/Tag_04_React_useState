import "./React_Counter_Level_1_3.css"
import { useState } from "react";

const React_Counter_Level_1_3 = () => {
    const [counter, setCounter] = useState<number>(0);

    return ( 
        <article className="counter">
            <h2>React_Counter_Level_1_3</h2>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </div>
            <button onClick={() => setCounter(0)}>Reset</button>
        </article>
     );
}
 
export default React_Counter_Level_1_3;