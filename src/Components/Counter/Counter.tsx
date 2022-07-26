import React from "react";
import {SuperInput} from "../Inputs/Input";
import {SuperButton} from "../Butons/Button";
import st from './Counter.module.css'

export type CounterValuePropsType = {
    value: number
    changeIncrement: (change: string) => void
    clickIncrement: (value: number) => void
    resetIncrement: (value: number) => void
}

export const Counter = (props: CounterValuePropsType) => {
    return (
         <div className={st.mainContainer}>
             <div>
                 <SuperInput
                     value={props.value}
                     changeIncrement={props.changeIncrement}
                 />
             </div>
            <div>
                <SuperButton
                    value={props.value}
                    clickIncrement={props.clickIncrement}
                    resetIncrement={props.resetIncrement}
                />
            </div>
         </div>
    )
}