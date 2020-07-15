import React from 'react';
import { connect } from 'react-redux';

import { shuffleCards } from '../actions'

import Card from './Card';

import './Board.css';


function Board(props) {
    const { cards, shuffleCards } = props
    
    const cardSet = cards.map((card, i) => {
        return (
            <Card 
                i={i}             
                key={card.image+i}
            />
        )
        
    })

    // const shuffled = shuffle(cardSet)

    return (
        <div>
            <input 
                type="button" 
                className='restart' 
                onClick={() => {
                    return shuffleCards(cards)
                    }}
                value='reset'/>
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
    return { shuffleCards }
}



export default connect(mapStateToProps, mapDispatchToProps())(Board);