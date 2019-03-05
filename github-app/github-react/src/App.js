import React, { useState } from 'react'

import Form from './components/Form'
import CardList from './components/CardList'

const App = () => {

  const [cards, setCards] = useState([])

    const addNewCard = cardInfo => {
      console.log(cards);
      setCards(cards.concat(cardInfo));
      console.log(cards);
    }

    const removeLastCard = () => {
      setCards(cards.slice(0,1));
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