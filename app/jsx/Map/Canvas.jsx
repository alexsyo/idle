'use strict';

import React from 'react';
import Draw from './Draw.jsx';
import map from './map.jsx';

class Canvas extends React.Component {

    constructor(props) {

        super(props);
        this.mouseActive = false;

    }

    componentDidMount() {

        this.draw = new Draw(this.canvas, this.context);
        this.draw.map(map.start, this.context);

        this.canvas.addEventListener('mouseup', () => this.mouseActive = false);
        this.canvas.addEventListener('mouseleave', () => this.mouseActive = false);
        this.canvas.addEventListener('mousemove', (event) => this.draw.tile(event, 1, this.mouseActive));
        this.canvas.addEventListener('mousedown', (event) => {
            this.mouseActive = true;
            this.draw.tile(event, 1, this.mouseActive);
        });

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