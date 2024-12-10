import "./React_useState_Faq_Level_1_1.css"
import { useState } from "react";

const React_useState_Faq_Level_1_1 = () => {
    const [displayNone, setDisplayNone] = useState<boolean>(true)

    const getDisplayNone = () => {
        setDisplayNone(!displayNone)
    }

    return ( 
        <article className="useState-faq">
            <h2>React_useState_Faq_Level_1_1</h2>
            <div>
                <p className="text-bold">Why is React great?</p>
                <button onClick={getDisplayNone}>-</button>
            </div>
            <hr className={`${displayNone && "display"}`} />
            <p className={`${displayNone && "display"}`}>Fast Learning Curve</p>
        </article>
     );
}
 
export default React_useState_Faq_Level_1_1;