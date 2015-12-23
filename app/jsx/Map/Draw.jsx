'use strict';

import Tile from './Tile.jsx';

class Draw {

    constructor(canvas, context) {

        this.canvas = canvas;
        this.context = context;
        this.tile = new Tile();

    }

    map(map) {

        this.tile.img.onload = () => {

            for(let i = 0; i < map.length; i++) {

                for(let e = 0; e < map[i].length; e++) {

                    this._drawImage(e, i, map[i][e]);
    
                }

            }

        };

    }

    singleTile(event, type, isActive) {

        if(isActive) {

            let rect = this.canvas.getBoundingClientRect();
            let x = Math.floor((event.clientX - rect.left) / 32);
            let y = Math.floor((event.clientY - rect.top) / 32);

            this._drawImage(x, y, type);
            
        }

    }

    _drawImage(x, y, type) {

        this.context.drawImage(
            this.tile.img,
            this.tile.type[type].x, this.tile.type[type].y,   // src position
            this.tile.size, this.tile.size,                   // src size
            x * this.tile.size, y * this.tile.size,           // dst position
            this.tile.size, this.tile.size                    // dst size
        );

    }

}

export default Draw;