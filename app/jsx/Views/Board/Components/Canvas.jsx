'use strict';

import React from 'react';
import Locate from '../../../Actions/Locate.jsx';
import Draw from '../../../Actions/Draw.jsx';
import Tile from '../../../Elements/Tile.jsx';

class Canvas extends React.Component {

    constructor(props) {

        super(props);
        this.tileObj = new Tile();
        this.mouseActive = false;

    }

    componentDidMount() {

        this.locate = new Locate(this.canvas, this.props.boardParams.map);
        this.draw = new Draw(this.canvas, this.props.boardParams.map);


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
                        width={this.props.boardParams.map[0].length * this.tileObj.size}
                        height={this.props.boardParams.map.length * this.tileObj.size}>
                </canvas>

            </div>

        );

    }

}

export default Canvas;