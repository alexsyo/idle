'use strict';

import React from 'react';
import Locate from '../Actions/Locate.jsx';
import Draw from '../Actions/Draw.jsx';
import Tile from '../Elements/Tile.jsx';
import Map from '../Elements/Map.jsx';

class Canvas extends React.Component {

    constructor(props) {

        super(props);
        this.tileObj = new Tile();
        this.map = new Map();
        this.mouseActive = false;

    }

    componentDidMount() {

        this.locate = new Locate(this.canvas, this.map.start);
        this.draw = new Draw(this.canvas, this.map.start);


        this.drawTileStartHandler = () => {

            let tile = this.locate.tile();

            this.draw.brush(tile, this.props.tileType);
            this.mouseActive = true;

        };

        this.drawTileMoveHandler = () => {

            if(this.mouseActive) {

                let tile = this.locate.tile();

                this.draw.brush(tile, this.props.tileType);

            }

        };

        this.drawTileEndHandler = () => {

            this.mouseActive = false;

        };


        this.draw.map();

        this.canvas.addEventListener('touchstart', this.drawTileStartHandler, false);
        this.canvas.addEventListener('touchmove', this.drawTileMoveHandler, false);
        this.canvas.addEventListener('touchend', this.drawTileEndHandler, false);

    }


    render() {

        return(

            <div>

                <canvas ref={ (c) => this.canvas = c }
                        width={this.map.start[0].length * this.tileObj.size}
                        height={this.map.start.length * this.tileObj.size}>
                </canvas>

            </div>

        );

    }

}

export default Canvas;