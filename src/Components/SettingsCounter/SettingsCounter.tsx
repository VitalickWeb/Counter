import React from "react";
import st from './SettingsCounter.module.css'
import {SuperInput} from "../Inputs/SuperInput";
import {SuperButton} from "../Butons/SuperButton";
import {WordFilter} from "../../App";

export type SettingsCounterPropsType = {
    maxValue: number
    startValue: number
    maxPointReference: (max: string) => void
    referencePoint: (start: string) => void
    setLocalStorage: () => void
    disabled: WordFilter
    message: string
}

export const SettingsCounter = ({
                                    maxValue,
                                    startValue,
                                    maxPointReference,
                                    referencePoint,
                                    setLocalStorage,
                                    disabled,
                                    message,
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
                                className={maxValue <= startValue ? st.errorValue : ''}
                                message={message}
                                type={'number'}
                                incValue={maxValue}
                                changeIncrement={maxPointReference}
                            />
                        </div>
                    </div>
                    <div className={st.line}></div>
                    <div className={st.inputStart}>
                        <div className={st.itemText}>
                            start value:
                        </div>
                        <div>
                            <SuperInput
                                className={startValue >= maxValue ? st.errorValue : ''}
                                message={message}
                                type={'number'}
                                incValue={startValue}
                                changeIncrement={referencePoint}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={st.buttonSet}>
                <SuperButton
                    name={'set'}
                    clickIncrement={setLocalStorage}
                    disabled={disabled === 'error'}
                />
            </div>
        </div>
    )
}