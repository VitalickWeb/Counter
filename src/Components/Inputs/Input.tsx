import React, {ChangeEvent} from "react";
import st from './Input.module.css'


export type IncrementPropsType = {
    value: number
    type: string
    changeIncrement: (change: string) => void
}

export const SuperInput = ({value, type, changeIncrement}: IncrementPropsType) => {

    const changeIncrementHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeIncrement(e.currentTarget.value)
    }

    return (
        <div className={st.inputBlock}>
            <input
                type={type}
                value={value}
                onChange={changeIncrementHandler}
            />
        </div>
    )
}