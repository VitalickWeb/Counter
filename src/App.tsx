import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/SettingsCounter/SettingsCounter";
import st from './App.module.css'


function App() {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [number, setNumber] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(number))
    }, [number])

    const maxPointReference = (max: string) => {
        setMaxValue(Number(max))

    }

    const referencePoint = (start: string) => {
        //setStartValue(Number(start))
        if (startValue >= 0) {
            setStartValue(Number(start))
        } else {
            setStartValue(Number(start))
            //setMessage()
            setDisabled(!disabled)
        }
    }

    const setLocalStorage = () => {

    }

    const changeIncrement = (change: string) => {
         setNumber(Number(change))
    }

    const clickIncrement = () => {
        if (number < 5) {
            setNumber(number + 1)
        } else {
            setDisabled(!disabled)
            setMessage("Incorrect values")
        }
    }

    const resetIncrement = () => {
        setMessage("")
        setDisabled(false)
        setNumber(0)
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
                    value={number}
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
