import React, {ChangeEvent, useEffect, useState} from "react";
import st from './Input.module.css'


export type IncrementPropsType = {
    value: number
    changeIncrement: (change: string) => void
}

export const SuperInput = (props: IncrementPropsType) => {


    const changeIncrementHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeIncrement(e.currentTarget.value)
    }

    return (
        <div className={st.inputBlock}>
            <div className={st.inputNumber}>
                <input
                    type="number"
                />
                <input
                    type="number"
                />
            </div>
            <div className={st.inputIncrement}>
                <input
                    type="text"
                    value={props.value}
                    onChange={changeIncrementHandler}
                />
            </div>
        </div>
    )
}