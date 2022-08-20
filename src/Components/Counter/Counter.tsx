import React from "react";
import {SuperInput} from "../Inputs/SuperInput";
import {SuperButton} from "../Butons/SuperButton";
import st from './Counter.module.css'
import {WordFilter} from "../../App";

export type CounterValuePropsType = {
    incValue: number
    changeIncrement: (change: string) => void
    clickIncrement: () => void
    resetIncrement: () => void
    disabled: WordFilter
    message: string
}

export const Counter = ({
                            incValue,
                            clickIncrement,
                            changeIncrement,
                            resetIncrement,
                            disabled,
                            message,
                        }: CounterValuePropsType) => {

    let styleInput = `${st.inputIncorrect} ${disabled === "set" && st.inputCorrect}`//тоже-самое что и css селекторы применять по наследству

    return (
        <div className={st.blockCounter}>
            <div className={st.subBlockCounter}>
                <div className={st.inputInc}>
                    { disabled === "error" || disabled === "set"
                        ? <div className={styleInput}>{message}</div>
                        : <SuperInput
                            className={message === "Incorrect values" ? st.error : ""}
                            message={message}
                            type={"text"}
                            incValue={incValue}
                            changeIncrement={changeIncrement}
                        /> }
                </div>
            </div>
            <div className={st.blockButtons}>
                <div className={st.blockButtonInc}>
                    <div className={st.buttonInc}>
                        <SuperButton
                            name={'inc'}
                            clickIncrement={clickIncrement}
                            disabled={disabled === 'set' || message === 'Incorrect values' || disabled === 'error'}
                        />
                    </div>
                </div>
                <div className={st.blockButtonRes}>
                    <div className={st.buttonReset}>
                        <SuperButton
                            name={'reset'}
                            clickIncrement={resetIncrement}
                            disabled={disabled === 'inc' || disabled === 'set' || disabled === 'error'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}