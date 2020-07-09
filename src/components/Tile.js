import React from 'react';

import './Tile.css';

function Tile(props) {
    const { colors, image } = props
    const styles = {
        backgroundColor: `${colors}`,
        backgroundImage: `url(${process.env.PUBLIC_URL}/ac/${ image })`,
        // backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10% 15%'
    }

    return (
        <div
            className="tile" 
            style={styles}> 
            {/* <img 
                className="image"
                src={`${process.env.PUBLIC_URL}/ac/${ image }`}
                alt={`${ image }`}  /> */}
        </div>
    )
}

export default Tile;