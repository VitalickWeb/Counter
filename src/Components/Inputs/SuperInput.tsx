import React, {ChangeEvent} from "react";
import st from './SuperInput.module.css'

export type IncrementPropsType = {
    value: number
    type: string
    changeIncrement: (change: string) => void
    message: string
}

export const SuperInput = ({value, type, changeIncrement, message}: IncrementPropsType) => {
    const changeIncrementHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeIncrement(e.currentTarget.value)
    }

    return (
        <div>
            <input
                className={message === 'Incorrect values' ? st.error : ''}
                type={type}
                value={value}
                onChange={changeIncrementHandler}
            />
        </div>
    )
}