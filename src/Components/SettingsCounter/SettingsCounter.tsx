import React from "react";
import st from './SettingsCounter.module.css'
import {SuperInput} from "../Inputs/SuperInput";
import {SuperButton} from "../Butons/SuperButton";

export type SettingsCounterPropsType = {
    maxValue: number
    startValue: number
    maxPointReference: (max: string) => void
    referencePoint: (start: string) => void
    setLocalStorage: () => void
    disabled: boolean
    message: string
}

export const SettingsCounter = ({
                                    maxValue,
                                    startValue,
                                    maxPointReference,
                                    referencePoint,
                                    setLocalStorage,
                                    disabled,
                                    message
                                }: SettingsCounterPropsType) => {
    return (
        <div className={st.blockSettings}>
            <div>
                <SuperInput
                    message={message}
                    type={'number'}
                    value={maxValue}
                    changeIncrement={maxPointReference}
                />
                <SuperInput
                    message={message}
                    type={'number'}
                    value={startValue}
                    changeIncrement={referencePoint}
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
    )
}