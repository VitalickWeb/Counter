import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/SettingsCounter/SettingsCounter";


function App() {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [number, setNumber] = useState(0)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(number))
    }, [number])

    const maxPointReference = (max: string) => {
        setMaxValue(Number(max))
    }

    const referencePoint = (start: string) => {
        setStartValue(Number(start))
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
            setNumber(number)
        }
    }

    const resetIncrement = () => {
        setNumber(0)
    }

    return (
        <div className="App">
            <div className={"mainContainer"}>
                <SettingsCounter
                    maxValue={maxValue}
                    startValue={startValue}
                    maxPointReference={maxPointReference}
                    referencePoint={referencePoint}
                    setLocalStorage={setLocalStorage}
                    disabled={disabled}
                />
                <Counter
                    value={number}
                    changeIncrement={changeIncrement}
                    clickIncrement={clickIncrement}
                    resetIncrement={resetIncrement}
                    disabled={disabled}
                />
            </div>
        </div>
    );
}

export default App;
