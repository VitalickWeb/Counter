import React from "react";
import st from './Button.module.css'

export type ButtonPropsType = {
    name: string
    clickIncrement: () => void
    disabled: boolean
}

export const SuperButton = ({clickIncrement, disabled, name}: ButtonPropsType) => {

    const clickIncrementHandler = () => {
        clickIncrement()
    }

    return (
        <div className={st.button}>
            <button
                onClick={clickIncrementHandler}
                disabled={disabled}>{name}
            </button>
        </div>
    )
}