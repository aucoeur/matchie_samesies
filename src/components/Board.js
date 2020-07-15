import React from 'react';
import { connect } from 'react-redux';

import { shuffleCards } from '../actions'

import Card from './Card';

import './Board.css';

function Board(props) {
    const { cards, shuffleCards } = props
    const { backColor } = cards[0]
    
    const cardSet = cards.map((card, i) => {
        return (
            <Card 
                i={i}             
                key={card.image+i}
            />
        )
        
    })

    return (
        <div>
            <input 
                type="button" 
                className='restart'
                style= {
                    { backgroundColor: `${backColor}` }
                }
                onClick={() => {
                    return shuffleCards(cards)
                    }}
                value='reset'/>
            <div className="board">
                {cardSet}
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