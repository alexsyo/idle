'use strict';

import React from 'react';
import Locate from '../Actions/Locate.jsx';
import Draw from '../Actions/Draw.jsx';
import Tile from '../Elements/Tile.jsx';

class Palette extends React.Component {

    constructor(props) {

        super(props);
        this.tileObj = new Tile();

    }

    componentDidMount() {

        this.locate = new Locate(this.canvas);
        this.draw = new Draw(this.canvas);


        this.clickHandler = () => {

            let tile = this.locate.tile();
            let type = this.tileObj.set.full[tile.x];

            this.props.setTileType(type);

        };


        this.draw.palette(this.tileObj.set.full);

        this.canvas.addEventListener('touchstart', this.clickHandler, false);

    }


    render() {

        return(

            <div>

                <canvas ref={(c) => this.canvas = c } 
                        width={this.tileObj.set.full.length * this.tileObj.size}
                        height="32">
                </canvas>

            </div>

        );

    }

}

export default Palette;