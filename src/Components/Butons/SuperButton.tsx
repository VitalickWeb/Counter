import React from "react";
import st from './SuperButton.module.css'

export type ButtonPropsType = {
    name: string
    clickIncrement: () => void
    disabled?: boolean
}

export const SuperButton = ({clickIncrement, disabled, name}: ButtonPropsType) => {

    const clickIncrementHandler = () => {
        clickIncrement()
    }

    return (
        <div>
            <button
                className={disabled === true ? st.disable : ''}
                onClick={clickIncrementHandler}
                disabled={disabled}>{name}
            </button>
        </div>
    )
}