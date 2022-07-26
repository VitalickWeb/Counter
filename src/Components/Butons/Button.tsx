import React from "react";
import st from './Button.module.css'

type IncrementPropsType = {
    value: number
    clickIncrement: (value: number) => void
    resetIncrement: (value: number) => void
}

export const SuperButton = (props: IncrementPropsType) => {

    const clickIncrementButtonHandler = () => {
        props.clickIncrement(props.value)
    }

    const resetIncrementHandler = () => {
        props.resetIncrement(props.value)
    }

    return (
        <div className={st.buttonBlock}>
            <div className={st.buttonNumber}>

            </div>
          <div className={st.buttonsIncrement}>
              <button>set</button>
              <button onClick={clickIncrementButtonHandler}>inc</button>
              <button onClick={resetIncrementHandler}>reset</button>
          </div>
        </div>
    )
}