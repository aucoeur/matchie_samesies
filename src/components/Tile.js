import React from 'react';

import './Tile.css';

function Tile(props) {
    const { colors, image } = props
    const styles = {
        // backgroundColor: `${colors}`,
        background: `url(${process.env.PUBLIC_URL}/ac/${ image }) no-repeat ${colors}`
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