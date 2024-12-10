import "./React_useState_Input_Level_1_6.css"
import { useState } from "react";

const React_useState_Input_Level_1_6 = () => {
    const [vorname, setVorname] = useState<string>('');
    const [nachname, setNachname] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const getVorname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVorname(event.target.value);
    }
    const getNachname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNachname(event.target.value);
    }
    const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    return ( 
        <article className="useState-input">
            <div>
                <h2>React_useState_Input_Level_1_6</h2>
                <input type="text" onChange={getVorname} />
                <input type="text" onChange={getNachname} />
                <input type="email" onChange={getEmail} />
            </div>
            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
            <p>Email: {email}</p>
        </article>
     );
}
 
export default React_useState_Input_Level_1_6;