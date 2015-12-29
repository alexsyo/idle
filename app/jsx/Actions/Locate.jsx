'use strict';

import Tile from '../Elements/Tile.jsx';

class Locate {

    constructor(canvas, map) {

        this.canvas = canvas;
        this.map = map;
        this.tileObj = new Tile();

    }

    tile() {

        window.event.preventDefault();

        let touch = window.event.changedTouches[0];
        let rect = this.canvas.getBoundingClientRect();
        let x = Math.floor((touch.clientX - rect.left) / this.tileObj.size);
        let y = Math.floor((touch.clientY - rect.top) / this.tileObj.size);

        return {x, y};

    }

    adjacents(tile) {

        let up =    { x: tile.x,     y: tile.y - 1 };
        let right = { x: tile.x + 1, y: tile.y     };
        let down =  { x: tile.x,     y: tile.y + 1 };
        let left =  { x: tile.x - 1, y: tile.y     };

        up =    (this._isDefined(up))    ? up : false;
        right = (this._isDefined(right)) ? right : false;
        down =  (this._isDefined(down))  ? down : false;
        left =  (this._isDefined(left))  ? left : false;

        return {up, right, down, left};

    }

    _isDefined(tile) {

        let isDefined = tile.y >= 0 && tile.y < this.map.length && tile.x >= 0 && tile.x < this.map[0].length;

        return isDefined;

    }

}

export default Locate;