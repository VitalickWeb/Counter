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
            <div className={st.subBlockSettings}>
                <div className={st.blockInput}>
                    <div className={st.inputMax}>
                        <div className={st.itemText}>
                            max value:
                        </div>
                        <div className={st.itemInput}>
                            <SuperInput
                                message={message}
                                type={'number'}
                                value={maxValue}
                                changeIncrement={maxPointReference}
                            />
                        </div>
                    </div>
                    <div className={st.inputStart}>
                        <div className={st.itemText}>
                            <span className={st.text}>start value:</span>
                        </div>
                        <SuperInput
                            message={message}
                            type={'number'}
                            value={startValue}
                            changeIncrement={referencePoint}
                        />
                    </div>
                </div>
            </div>
            <div className={st.buttonSet}>
                <SuperButton
                    name={'set'}
                    clickIncrement={setLocalStorage}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}