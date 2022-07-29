import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";


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

    const changeIncrement = (change: string) => {
         setNumber(Number(change))
    }

    const clickIncrement = () => {
        setNumber(number + 1)
    }

    const resetIncrement = () => {
        setNumber(0)
    }

    const setLocalStorage = () => {

    }

    return (
        <div className="App">
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                value={number}
                maxPointReference={maxPointReference}
                referencePoint={referencePoint}
                setLocalStorage={setLocalStorage}
                changeIncrement={changeIncrement}
                clickIncrement={clickIncrement}
                resetIncrement={resetIncrement}
                disabled={disabled}
            />
        </div>
    );
}

export default App;
