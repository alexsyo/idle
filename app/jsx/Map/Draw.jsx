'use strict';

import tile from './tile.jsx';

class Draw {

    constructor(canvas, context) {

        this.canvas = canvas;
        this.context = context;

    }

    map(map) {

        for(let i = 0; i < map.length; i++) {

            for(let e = 0; e < map[i].length; e++) {

                this._drawImage(e, i, map[i][e]);

            }

        }

    }

    tile(event, type, isActive) {

        if(isActive) {

            let rect = this.canvas.getBoundingClientRect();
            let x = Math.floor((event.clientX - rect.left) / 32);
            let y = Math.floor((event.clientY - rect.top) / 32);

            this._drawImage(x, y, type);
            
        }

    }

    _drawImage(x, y, type) {

        this.context.drawImage(
            tile.img,
            tile.type[type].x, tile.type[type].y,   // src position
            tile.size, tile.size,                   // src size
            x * tile.size, y * tile.size,           // dst position
            tile.size, tile.size                    // dst size
        );

    }

}

export default Draw;