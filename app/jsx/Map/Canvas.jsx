'use strict';

import React from 'react';
import Draw from './Draw.jsx';
import Map from './Map.jsx';

class Canvas extends React.Component {

    constructor(props) {

        super(props);
        this.map = new Map();
        this.mouseActive = false;

    }

    componentDidMount() {

        this.draw = new Draw(this.canvas, this.context);


        this.drawTileStartHandler = () => {

            this.mouseActive = true;
            this.draw.singleTile(1, this.mouseActive);

        };

        this.drawTileMoveHandler = () => {

            this.draw.singleTile(1, this.mouseActive);

        };

        this.drawTileEndHandler = () => {

            this.mouseActive = false;

        };


        this.draw.map(this.map.start);

        this.canvas.addEventListener('touchstart', this.drawTileStartHandler, false);
        this.canvas.addEventListener('touchmove', this.drawTileMoveHandler, false);
        this.canvas.addEventListener('touchend', this.drawTileEndHandler, false);

    }

    render() {

        return(

            <div>

                <canvas ref={

                            (c) => {

                                this.canvas = c;
                                this.context = c.getContext('2d');

                            }

                        }
                        height="300"
                        width="400">
                </canvas>

            </div>

        );

    }

}

export default Canvas;