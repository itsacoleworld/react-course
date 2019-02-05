import React from 'react'

const Button = ({ incremenet, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(incremenet)
    }
    return <button onClick={handleClick}>+{incremenet}</button>
}

export default Button