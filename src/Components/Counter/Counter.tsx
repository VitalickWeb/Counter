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
    message: string
}

export const Counter = ({
                            value,
                            clickIncrement,
                            changeIncrement,
                            resetIncrement,
                            disabled,
                            message
                        }: CounterValuePropsType) => {

    return (
        <div className={st.blockCounter}>
            <div className={st.inputInc}>
                <SuperInput
                    message={message}
                    type={'text'}
                    value={value}
                    changeIncrement={changeIncrement}
                />
            </div>
            <div className={st.blockButtonInc}>
                <div className={st.buttonInc}>
                    <SuperButton
                        name={'inc'}
                        clickIncrement={clickIncrement}
                        disabled={disabled}
                    />
                </div>
                <div className={st.buttonReset}>
                    <SuperButton
                        name={'reset'}
                        clickIncrement={resetIncrement}
                    />
                </div>
            </div>
        </div>
    )
}