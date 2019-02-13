import React, { useState } from 'react'

const Form = props => {
    const [username, setUsername] = useState('')

    return (
        <form>
            <input
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
                placeholder="Github username"
                required
            />
            <button type="submit">Add card</button>
        </form>
    )
}