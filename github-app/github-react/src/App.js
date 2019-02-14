import React, { useState } from 'react'

import Form from './components/Form'
import CardList from './components/CardList'

const App = () => {

  const [cards, setCards] = useState([])

    const addNewCard = cardInfo => {
      setCards(cards.concat(cardInfo))
    }

    const removeLastCard = () => {
      setCards(cards.splice(-1,2))
    }

    return (
        <div>
          <Form onSubmit={addNewCard} />
          <CardList cards={cards} />
          <button onClick={removeLastCard}>Remove Last Card</button>
        </div>
    )
}

export default App