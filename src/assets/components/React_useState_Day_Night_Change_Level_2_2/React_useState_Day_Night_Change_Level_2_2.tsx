import "./React_useState_Day_Night_Change_Level_2_2.css"
import { useState } from "react";

const React_useState_Day_Night_Change_Level_2_2 = () => {
    const [time, setTime] = useState<string>('Day')
    const [button, setButton] = useState<string>('Change to Night')
    const [style, setStyle] = useState<boolean>(false)

    const getButton = () => {
        setStyle(!style)
        setTime(time === 'Day' ? 'Night' : 'Day')
        setButton(button === 'Change to Night' ? 'Change to Day' : 'Change to Night')
    }

    return ( 
        <article className={`${style && "night"} useState-day-night-change`}>
            <h2 className={`${style && "night"}`}>React_useState_Day_Night_Change_Level_2_2</h2>
            <div>
                <h1 className={`${style && "night"}`}>{time}</h1>
                <button onClick={getButton}>{button}</button>
            </div>
        </article>
     );
}
 
export default React_useState_Day_Night_Change_Level_2_2;