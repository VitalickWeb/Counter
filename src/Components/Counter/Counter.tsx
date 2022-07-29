import React from "react";
import {SuperInput} from "../Inputs/SuperInput";
import {SuperButton} from "../Butons/SuperButton";
import st from './Counter.module.css'

export type CounterValuePropsType = {
    value: number
    changeIncrement: (change: string) => void
    clickIncrement: () => void
    resetIncrement: () => void
    disabled: boolean
}

export const Counter = ({
                            value,
                            clickIncrement,
                            changeIncrement,
                            resetIncrement,
                            disabled
                        }: CounterValuePropsType) => {

    return (
        <div className={st.blockCounter}>
            <SuperInput
                type={'text'}
                value={value}
                changeIncrement={changeIncrement}
            />

            <SuperButton
                name={'inc'}
                clickIncrement={clickIncrement}
                disabled={disabled}
            />
            <SuperButton
                name={'reset'}
                clickIncrement={resetIncrement}
                disabled={disabled}
            />
        </div>
    )
}