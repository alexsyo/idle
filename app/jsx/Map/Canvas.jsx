'use strict';

import React from 'react';
import map from './map.jsx';
import tile from './tile.jsx';

class Canvas extends React.Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

        for(let i = 0; i < map.length; i++) {

            for(let e = 0; e < map[i].length; e++) {

                this.context.drawImage(
                    tile.img, 
                    tile.pos[map[i][e]].x, tile.pos[map[i][e]].y,     // src position
                    tile.size, tile.size,                             // src size
                    e * tile.size, i * tile.size,                     // dst position
                    tile.size, tile.size                              // dst size
                );
                    
            }

        }

    }

    render() {

        return(

            <div>
                <canvas ref={(c) => this.context = c.getContext('2d')} height="300" width="400"></canvas>
            </div>

        );

    }

}

export default Canvas;