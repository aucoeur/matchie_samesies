import React from 'react';
import randomColor from 'randomcolor';
import shuffle from 'shuffle-array';

import Tile from './Tile';

import './Board.css';


function Board() {
    const randomColors = randomColor({
        count: 8,
        luminosity: 'bright',
        // format: 'rgb' // e.g. 'rgb(225,200,20)'
        });

    const images = [
        "daisy_mae.png",
        "derwin.png",
        "flora.png",
        "gaston.png",
        "hans.png",
        "leif.png",
        "pascal.png",
        "truffles.png"
    ]

    const image = images.map((img, i) => {
        return (img)
    }
    )

    // <Tile color={color} />
    const tiles = randomColors.map((colors, i) =>
        <Tile colors={colors} i={i}             key={image[i]} image={image[i]}/>
    )

    return (
        <div className="board">
            {shuffle(tiles)}
        </div>
    )
        
}

export default Board;