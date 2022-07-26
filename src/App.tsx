import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";


function App() {

    const [number, setNumber] = useState(0)

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(number))
    }, [number])

    const clickIncrement = () => {
        setNumber(number + 1)
    }

    const resetIncrement = () => {
        setNumber(0)
    }

    const changeIncrement = (change: string) => {
        setNumber(Number(change))
    }

    return (
        <div className="App">
            <Counter
                value={number}
                changeIncrement={changeIncrement}
                clickIncrement={clickIncrement}
                resetIncrement={resetIncrement}
            />
        </div>
    );
}

export default App;
