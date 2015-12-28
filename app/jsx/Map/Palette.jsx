'use strict';

import React from 'react';
import Tile from './Tile.jsx';

class Palette extends React.Component {

    constructor(props) {

        super(props);
        this.tileObj = new Tile();

    }

    componentDidMount() {

        this.context = this.canvas.getContext('2d');


        this.tileObj.img.onload = () => {

            for(let i = 0; i < this.tileObj.set.full.length; i++) {

                this.context.drawImage(
                    this.tileObj.img,                                   // img instance
                    this.tileObj.type[this.tileObj.set.full[i]][0].x,
                    this.tileObj.type[this.tileObj.set.full[i]][0].y,   // src position
                    this.tileObj.size, this.tileObj.size,               // src size
                    i * this.tileObj.size, 0,                           // dst position
                    this.tileObj.size, this.tileObj.size                // dst size
                );

            }

        };

        this.clickHandler = () => {

            window.event.preventDefault();

            let touch = window.event.changedTouches[0];
            let rect = this.canvas.getBoundingClientRect();
            let x = Math.floor((touch.clientX - rect.left) / this.tileObj.size);

            this.props.setTileTypeHandler(this.tileObj.set.full[x]);

        };


        this.canvas.addEventListener('touchstart', this.clickHandler, false);

    }


    render() {

        return(

            <div>

                <canvas ref={(c) => this.canvas = c } height="32" width="96"></canvas>

            </div>

        );

    }

}

export default Palette;