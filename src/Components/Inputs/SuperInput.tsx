import React, {ChangeEvent} from "react";
import st from '../Counter/Counter.module.css'
import st2 from './SuperInput.module.css'

export type IncrementPropsType = {
    incValue: number
    type: string
    changeIncrement: (change: string) => void
    message: string
    className?: string
    error?: boolean
}

export const SuperInput = ({
                               incValue,
                               type,
                               changeIncrement,
                               className,
                               error
                           }: IncrementPropsType) => {

    const changeIncrementHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeIncrement(e.currentTarget.value)
    }

    const style = `${st.inputInc} ${className} ${error && st2.startErrorValue}`

    return (
        <div>
            <input
                className={style}//в атрибут className попадает значение из всех инпутов, для универсального инпута
                type={type}
                value={incValue}//считывается значение из state number
                onChange={changeIncrementHandler}
            />
        </div>
    )
}