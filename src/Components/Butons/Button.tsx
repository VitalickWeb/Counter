import React from "react";
import st from './Button.module.css'

type IncrementPropsType = {

}

export const SuperButton = (props: IncrementPropsType) => {

    const changeIncrementButtonHandler = () => {

    }

    return (
        <div className={st.buttonBlock}>
            <div className={st.buttonNumber}>
                <button>set</button>
            </div>
          <div className={st.buttonsIncrement}>
              <button  onClick={changeIncrementButtonHandler}>inc</button>
              <button>reset</button>
          </div>
        </div>
    )
}