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

        let up =    this._adjacent(tile, 'up');
        let right = this._adjacent(tile, 'right');
        let down =  this._adjacent(tile, 'down');
        let left =  this._adjacent(tile, 'left');

        return {up, right, down, left};

    }

    adjacentsOfAdjacents(adjacents) {

        let upUp       = this._adjacent(adjacents.up,    'up');
        let upRight    = this._adjacent(adjacents.up,    'right');
        let rightRight = this._adjacent(adjacents.right, 'right');
        let rightDown  = this._adjacent(adjacents.right, 'down');
        let downDown   = this._adjacent(adjacents.down,  'down');
        let downLeft   = this._adjacent(adjacents.down,  'left');
        let LeftLeft   = this._adjacent(adjacents.left,  'left');
        let LeftUp     = this._adjacent(adjacents.left,  'up');

        return {upUp, upRight, rightRight, rightDown, downDown, downLeft, LeftLeft, LeftUp};

    }

    _adjacent(tile, direction) {

        let adjacent;

        switch(direction) {

            case 'up':    adjacent = { x: tile.x,     y: tile.y - 1 }; break;
            case 'right': adjacent = { x: tile.x + 1, y: tile.y     }; break;
            case 'down':  adjacent = { x: tile.x,     y: tile.y + 1 }; break;
            case 'left':  adjacent = { x: tile.x - 1, y: tile.y     }; break;

        }

        return (this._isDefined(adjacent)) ? adjacent : false;

    }

    _isDefined(tile) {

        let isDefined = tile.y >= 0 && tile.y < this.map.length && tile.x >= 0 && tile.x < this.map[0].length;

        return isDefined;

    }

}

export default Locate;