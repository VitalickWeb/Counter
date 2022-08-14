import React, {ChangeEvent} from "react";
import st from '../Counter/Counter.module.css'

export type IncrementPropsType = {
    incValue: number
    type: string
    changeIncrement: (change: string) => void
    message: string
    className?: string
}

export const SuperInput = ({incValue, type, changeIncrement, className}: IncrementPropsType) => {

    const changeIncrementHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeIncrement(e.currentTarget.value)
    }

    const style = `${st.inputInc} ${className}`

    return (
        <div >
            <input
                className={style}//в атрибут className попадает значение из всех инпутов, для универсального инпута
                type={type}
                value={incValue}//считывается значение из state number
                onChange={changeIncrementHandler}
            />
        </div>
    )
}