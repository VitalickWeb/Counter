import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))//JSON.stringify преобразовывает любое значение в строку
        localStorage.setItem('counterValue + 5', JSON.stringify(value + 5))
    }

    const getFromLocalHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')//указываем в параметре key который мы должны получить

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)//parse преобразование строки  в то что нам нужно, объект ил массив например
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 5')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>+</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalHandler}>getFromLocalLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>LocalStorageClear</button>
            <button onClick={removeLocalStorageHandler}>removeLocalStorage</button>
        </div>
    );
}

export default App;
