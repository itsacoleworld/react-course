
import React, { useState } from 'react';
import Button from './components/Button'

import './App.css';

function App() {
    const [count, setCount] = useState(0)

    const incrementCount = increment => {
        setCount(count + increment)
    }

    const decrementCount = increment => {
        setCount(count - increment)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div>
                <h2>Increment Count</h2>
                <Button buttonText={'+1'} increment={1} onClickFunction={incrementCount} />
                <Button buttonText={'+10'} increment={10} onClickFunction={incrementCount} />
                <Button buttonText={'+100'} increment={100} onClickFunction={incrementCount} />
                <Button buttonText={'+1000'} increment={1000} onClickFunction={incrementCount} />
            </div>
            <div>
                <h2>Decrement Count</h2>
                <Button buttonText={'-1'} increment={1} onClickFunction={decrementCount} />
                <Button buttonText={'-10'} increment={10} onClickFunction={decrementCount} />
                <Button buttonText={'-100'} increment={100} onClickFunction={decrementCount} />
                <Button buttonText={'-1000'} increment={1000} onClickFunction={decrementCount} />
            </div>
            <div>
                <span>{count}</span>
            </div>
            <Button buttonText={'Reset'} onClickFunction={resetCount} />


        </div>
    )
}

export default App;