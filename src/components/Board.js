import React from 'react';
import { connect } from 'react-redux';

// import shuffle from 'shuffle-array';

import Card from './Card';

import './Board.css';


function Board(props) {
    const { cards, selectedCard } = props
    
    const cardSet = cards.map((card, i) => {
        return (
            <Card 
                i={i}             
                key={card.image+i}
            />
        )
        
    })

    // const shuffled = shuffle(cards)

    return (
        <div>
            <h3>Selected Card: { selectedCard ? selectedCard.image : ''}</h3>
            <div className="board">
                {cardSet}
                {/* {shuffled} */}
            </div>
        </div>
    )
        
}

const mapStateToProps = state => {
  return ({ 
      cards: state.game.cards,
      selectedCard: state.game.selectedCard
   })
}

const mapDispatchToProps = () => {
    return {
        // put shuffle 
    }
}



export default connect(mapStateToProps, mapDispatchToProps())(Board);