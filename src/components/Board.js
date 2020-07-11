import React from 'react';
import { connect } from 'react-redux';

import shuffle from 'shuffle-array';

import Card from './Card';

import './Board.css';


function Board(props) {

    const cards = props.cards.map((card, i) => {
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
            <div className="board">
                {cards}
                {/* {shuffled} */}
            </div>
        </div>
    )
        
}

const mapStateToProps = state => {
  return ({ 
      cards: state.game.cards
   })
}

const mapDispatchToProps = () => {
    return {
        // put shuffle 
    }
}



export default connect(mapStateToProps, mapDispatchToProps())(Board);