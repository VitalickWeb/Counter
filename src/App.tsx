import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/SettingsCounter/SettingsCounter";
import st from './App.module.css'

export type WordFilter = "set" | "inc" | "reset" | "error" | "Incorrect value" | "enter values and press 'set'"

function App() {
    useEffect(() => {
        let valueMax = localStorage.getItem("counterMaxValue")
        let valueStart = localStorage.getItem("counterStartValue")
        let valueInc = localStorage.getItem("counterIncValue")
        console.log('maxValue', valueMax)
        if (valueMax && valueStart && valueInc) {
            let newValueMax = JSON.parse(valueMax)
            let newValueStart = JSON.parse(valueStart)
            let newValueInc = JSON.parse(valueInc)
            setMaxValue(newValueMax)
            setStartValue(newValueStart)
            setIncValue(newValueInc)
        }
    }, [])

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [incValue, setIncValue] = useState<number>(0)//исходный state счетчика прокидывается в input
    const [disabled, setDisabled] = useState<WordFilter>('inc')
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem("counterMaxValue", JSON.stringify(maxValue))
        localStorage.setItem("counterStartValue", JSON.stringify(startValue))
        localStorage.setItem("counterIncValue", JSON.stringify(incValue))
    }, [incValue, startValue, maxValue])

    const maxPointReference = (max: string) => {
        if (Number(max) <= startValue) {  //если максимальное меньше или равно стартовому то все дизэйблим и приводим к ошибке
            setMaxValue(Number(max))
            setMessage("Incorrect values")
            setDisabled('error')
        } else {
            setMaxValue(Number(max)) //иначе раздизейбливаем сет и выводим сообщение, что можно нажать сет
            setMessage("enter values and press 'set'")
            setDisabled('set')
        }
    }

    const referencePoint = (start: string) => {
        if (Number(start) < 0) {    //если старт меньше 0 то
            setStartValue(Number(start))
            setDisabled('error')//дизэйблим кнопки set и inc
            setMessage("Incorrect values") // пооказываем надпись что значение не корректное
            setError(true) //ошибку переводим в тру
        } else {                        //иначе раздизэйбливаем
            setStartValue(Number(start))
            setDisabled('set')//иначе если корректно, раздизэйбливаем кнопку 'set'
            setMessage("enter values and press 'set'") // и выводим сообщение
            setError(false)
        }

        if (Number(start) >= maxValue) { //если стартовое значение больше или равно максимальному
            setDisabled('error') //дизэйблим кнопки
            setMessage("Incorrect values")//выводим надпись некорректное значение
        }
    }

    const setDefault = () => {
        setIncValue(startValue)
        setDisabled('inc')
    }

    const changeIncrement = (change: string) => {
        setIncValue(Number(change))
        if (Number(change) === maxValue) {
            setError(true)
        }
    }

    const clickIncrement = () => {
        if (incValue < maxValue) { //если инкремент меньше максимального значения, то добавляем единицу
            setIncValue(incValue + 1)
            if (incValue === maxValue - 1) {
                setMessage("Incorrect values")
                setDisabled("reset")
            }
        } else {                    //иначе число становится красным и раздизэйбливается ресет
            setMessage("Incorrect values")
            setDisabled("reset")
        }

        if (incValue + 1 === maxValue) {
            setDisabled('reset')
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
                    setLocalStorage={setDefault}
                    disabled={disabled}
                    message={message}
                    error={error}
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
