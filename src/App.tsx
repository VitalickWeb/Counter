import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/SettingsCounter/SettingsCounter";
import st from './App.module.css'

export type WordFilter = "set" | "inc" | "reset" | "error" | "Incorrect value" | "enter values and press 'set'"

function App() {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [incValue, setIncValue] = useState(0)//исходный state счетчика прокидывается в input
    const [disabled, setDisabled] = useState<WordFilter>('inc')
    const [message, setMessage] = useState('')

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(incValue))
    }, [incValue])

    const maxPointReference = (max: string) => {
        if (maxValue < 5) {             //если максимальное значение меньше 5ти, то считаем до пяти
            setMaxValue(Number(max))
            setMessage("enter values and press 'set'")
        } else {                        //иначе если больше 5ти
            setMaxValue(Number(max))

        }
    }

    const referencePoint = (start: string) => {
        if (Number(start) < 0) {    //если старт меньше 0 то
            setStartValue(Number(start))
            setDisabled('error')//дизэйблим кнопки set и inc
            setMessage("Incorrect values") // пооказываем надпись что значение не корректное
        } else {                        //иначе раздизэйбливаем
            setStartValue(Number(start))
            setDisabled('set')//иначе если корректно, раздизэйбливаем кнопку 'set'
            setMessage("enter values and press 'set'") // и выводим сообщение
        }
    }

    const setLocalStorage = () => {

    }

    const changeIncrement = (change: string) => {
        setIncValue(Number(change))
    }

    const clickIncrement = () => {
        if (incValue < maxValue) { //если инкремент меньше максимального значения, то добавляем единицу
            setIncValue(incValue + 1)
        } else {                    //иначе число становится красным и раздизэйбливается ресет
            setMessage("Incorrect values")
            setDisabled("reset")
        }
    }

    const resetIncrement = () => {
        setMessage("")
        setDisabled('inc')
        setIncValue(startValue)
    }

    return (
        <div className={st.App}>
            <div className={st.mainContainer}>
                <SettingsCounter
                    maxValue={maxValue}
                    startValue={startValue}
                    maxPointReference={maxPointReference}
                    referencePoint={referencePoint}
                    setLocalStorage={setLocalStorage}
                    disabled={disabled}
                    message={message}
                />
                <Counter
                    incValue={incValue}
                    changeIncrement={changeIncrement}
                    clickIncrement={clickIncrement}
                    resetIncrement={resetIncrement}
                    disabled={disabled}
                    message={message}
                />
            </div>
        </div>
    );
}

export default App;
