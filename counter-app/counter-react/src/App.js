
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'

class App extends Component {
    let count = 0

    const incrementCount = increment => {
        //todo
    }

    render() {
        return (
            <div className="App">
                <Button increment={1} onClickFunction={incrementCount} />
                <Button increment={10} onClickFunction={incrementCount} />
                <Button increment={100} onClickFunction={incrementCount} />
                <Button increment={1000} onClickFunction={incrementCount} />
                <span>{count}</span>
            </div>
        );
    }
}

export default App;