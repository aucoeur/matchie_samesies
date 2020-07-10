import React from 'react';
import shuffle from 'shuffle-array';
import { flipCard } from '../actions';
import Card from './Card';

import cardPairs from '../data';
import './Board.css';


function Board() {

    const cards = cardPairs.map((card, i) => {
        return (
            <Card 
                color={card.color}
                image={card.image}
                i={i}             
                key={card.image+i}
                onClick={() => {flipCard(i)}}
                isFront={card.isFront}
            />
        )
        
    })

    const shuffled = shuffle(cards)
    return (
        <div className="board">
            {shuffled}
        </div>
    )
        
}



export default Board;