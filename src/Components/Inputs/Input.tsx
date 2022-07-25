import React, {useEffect, useState} from "react";
import st from './Input.module.css'


export const SuperInput = () => {
    const [number, setNumber] = useState(0)

    const changeIncrementHandler = () => {

    }

        return (
        <div className={st.inputBlock}>
            <div className={st.inputNumber}>
                <input
                    type="number"
                />
                <input
                    type="number"
                />
            </div>
           <div className={st.inputIncrement}>
               <input
                   onChange={changeIncrementHandler}
                   value={number}
               />
           </div>
        </div>
    )
}