import React from 'react';
import { connect } from 'react-redux';

import { flipCard } from '../actions'

import './Card.css';

function Card(props) {
    const { color, image, onClick, i, isFront} = props

    const front = {
        backgroundColor: `${color}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/ac/${ image })`
    }

    const back = {
        backgroundColor: `${color}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/ac/leaf_mask.png)`
    }

    return (
        <div
            id={i}
            onClick={onClick
                // () => {
                // // console.log({isFront})
                // flipCard(i)}
            }
            className="card" 
            style={isFront ? front : back }> 
        </div>
    )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
    onClick: i => dispatch(flipCard(i))

})

export default connect(mapStateToProps, mapDispatchToProps)(Card);