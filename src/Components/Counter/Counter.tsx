import React from "react";
import {SuperInput} from "../Inputs/Input";
import {SuperButton} from "../Butons/Button";
import st from './Counter.module.css'

export type CounterValuePropsType = {
    value: number
    endPointReference: () => void
    referencePoint: () => void
    setLocalStorage: () => void
    changeIncrement: (change: string) => void
    clickIncrement: () => void
    resetIncrement: () => void
    disabled: boolean
}

export const Counter = ({
                            value,
                            endPointReference,
                            referencePoint,
                            setLocalStorage,
                            clickIncrement,
                            changeIncrement,
                            resetIncrement,
                            disabled
                        }: CounterValuePropsType) => {

    return (
        <div className={st.mainContainer}>
            <div className={st.blockSettings}>
                <div>
                    <SuperInput
                        type={'number'}
                        value={value}
                        changeIncrement={endPointReference}
                    />
                    <SuperInput
                        type={'number'}
                        value={value}
                        changeIncrement={changeIncrement}
                    />
                </div>
                <div>
                    <SuperButton
                        name={'set'}
                        clickIncrement={setLocalStorage}
                        disabled={disabled}
                    />
                </div>
            </div>

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
        </div>
    )
}