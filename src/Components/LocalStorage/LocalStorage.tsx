import React, {useEffect, useState} from "react";

// function localStorage() {
//     const [value, setValue] = useState(0)
    //useEffect это хук который так же идет из react. Первым параметром он принимает в себя колбэк, а вторым зависимости

    // useEffect( () => {
    //     let valueAsString = localStorage.getItem('counterValue')//указываем в параметре key который мы должны получить
    //
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)//parse преобразование строки  в то что нам нужно, объект ил массив например
    //         setValue(newValue)
    //     }
    // }, [])

    //1)если в useEffect не указать массив зависимостей, то в него будем попадать каждый раз когда компонента перерисовывается
    //2)если указать пустой массив, то попадем в useEffect только один раз
    //3)А если указать в массиве value то будет меняться каждый раз когда будет изменяться значение, то будем попадать
    // в зависимость и устанавливать значение в localStorage. И тогда значение в браузере сохранится.


    // useEffect( () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])
    //
    // const incHandler = () => {
    //     setValue(value + 1 )
    // }
    //
    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))//JSON.stringify преобразовывает любое значение в строку
    //     //localStorage.setItem('counterValue + 5', JSON.stringify(value + 5))
    // }

    // const getFromLocalStorageHandler = () => {
    //     let valueAsString = localStorage.getItem('counterValue')//указываем в параметре key который мы должны получить
    //
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)//parse преобразование строки  в то что нам нужно, объект ил массив например
    //         setValue(newValue)
    //     }
    // }

    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }
    //
    // const removeLocalStorageHandler = () => {
    //     localStorage.removeItem('counterValue + 5')
    // }

//     return (
//         <div className="App">
//             <h1>{value}</h1>
//             <button onClick={incHandler}>+</button>
//             <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
//             <button onClick={getFromLocalStorageHandler}>getFromLocalLocalStorage</button>
//             <button onClick={clearLocalStorageHandler}>LocalStorageClear</button>
//             <button onClick={removeLocalStorageHandler}>removeLocalStorage</button>
//         </div>
//     );
// }