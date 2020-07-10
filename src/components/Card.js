import React from 'react';
import { connect } from 'react-redux';

import { flipCard } from '../actions'

import './Card.css';

function Card(props) {
    const { i, flipCard, cards } = props
    const { color, image, isFront, backColor, matched } = cards[i]

    console.log(cards[i])

    const front = {
        backgroundColor: `${color}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/ac/${ image })`
    }

    const back = {
        backgroundColor: `${backColor}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/ac/leaf_mask.png)`
    }

    return (
        <div
            id={i}
            onClick={ matched ? '' : () => {
                return flipCard(i);
            } }
            className="card" 
            style={ isFront ? front : back }> 
        </div>
    )
}

const mapStateToProps = state => {
  return ({ 
      cards: state.game.cards
   })
}

const mapDispatchToProps = () => {
    return { flipCard }
}

export default connect(mapStateToProps, mapDispatchToProps())(Card);