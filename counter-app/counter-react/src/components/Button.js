import React from 'react'

const Button = ({ buttonText, increment, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(increment)
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
    )
}

export default Button