'use strict';

import Tile from './Tile.jsx';

class Draw {

    constructor(canvas, context, map) {

        this.canvas = canvas;
        this.context = context;
        this.mapObj = map;
        this.tileObj = new Tile();

    }

    map() {

        this.tileObj.img.onload = () => {

            for(let y = 0; y < this.mapObj.length; y++) {

                for(let x = 0; x < this.mapObj[y].length; x++) {

                    let tile = {x, y, type: this.mapObj[y][x]};

                    this._drawImage(tile);
    
                }

            }

        };

    }

    tile(type, isActive) {

        if(isActive) {

            window.event.preventDefault();

            let touch = window.event.changedTouches[0];
            let rect = this.canvas.getBoundingClientRect();
            let x = Math.floor((touch.clientX - rect.left) / this.tileObj.size);
            let y = Math.floor((touch.clientY - rect.top) / this.tileObj.size);

            let tile = {x, y, type};
            let adjacents = this._findAdjacents(x, y);

            this._updateMap(tile);
            this._drawAdjacents(adjacents, type);

            tile.type = this._setShape(adjacents, type);

            this._drawImage(tile);
            this._updateMap(tile);
            
        }

    }

    _drawImage(tile) {

        this.context.drawImage(
            this.tileObj.img,
            this.tileObj.type[tile.type].x, this.tileObj.type[tile.type].y,     // src position
            this.tileObj.size, this.tileObj.size,                               // src size
            tile.x * this.tileObj.size, tile.y * this.tileObj.size,             // dst position
            this.tileObj.size, this.tileObj.size                                // dst size
        );

    }

    _drawAdjacents(adjacents, type) {

        for(let i in adjacents) {

            if(adjacents.hasOwnProperty(i) && adjacents[i]) {

                if(this._checkTile(adjacents[i], type)) {

                    let adjacentOfAdjacent = this._findAdjacents(adjacents[i].x, adjacents[i].y);
                    let adjacentShape = this._setShape(adjacentOfAdjacent, type);

                    adjacents[i].type = adjacentShape;

                    this._drawImage(adjacents[i]);
                    this._updateMap(adjacents[i]);
                    
                }

            }

        }

    }

    _findAdjacents(x, y) {

        let up = (this._isDefined(x, y - 1)) ? {x, y: y - 1} : false;
        let right = (this._isDefined(x + 1, y)) ? {x: x + 1, y} : false;
        let down = (this._isDefined(x, y + 1)) ? {x, y: y + 1} : false;
        let left = (this._isDefined(x - 1, y)) ? {x: x - 1, y} : false;

        return {up, right, down, left};

    }

    _isDefined(x, y) {

        let isDefined = y >= 0 && y < this.mapObj.length && x >= 0 && x < this.mapObj[0].length;

        return isDefined;

    }

    _setShape(adjacent, type) {

        let up = (adjacent.up) ? this._checkTile(adjacent.up, type) : true;
        let right = (adjacent.right) ? this._checkTile(adjacent.right, type) : true;
        let down = (adjacent.down) ? this._checkTile(adjacent.down, type) : true;
        let left = (adjacent.left) ? this._checkTile(adjacent.left, type) : true;

        let shape;

        if(!up && !right && !down && !left) shape = type;
        if(!up &&  right && !down && !left) shape = type + 1;
        if(!up &&  right && !down &&  left) shape = type + 2;
        if(!up && !right && !down &&  left) shape = type + 3;
        if(!up && !right &&  down && !left) shape = type + 4;
        if(!up &&  right &&  down && !left) shape = type + 5;
        if(!up &&  right &&  down &&  left) shape = type + 6;
        if(!up && !right &&  down &&  left) shape = type + 7;
        if( up && !right &&  down && !left) shape = type + 8;
        if( up &&  right &&  down && !left) shape = type + 9;
        if( up &&  right &&  down &&  left) shape = type + 10;
        if( up && !right &&  down &&  left) shape = type + 11;
        if( up && !right && !down && !left) shape = type + 12;
        if( up &&  right && !down && !left) shape = type + 13;
        if( up &&  right && !down &&  left) shape = type + 14;
        if( up && !right && !down &&  left) shape = type + 15;

        return shape;

    }

    _checkTile(tile, type) {

        let isFull = this.mapObj[tile.y][tile.x] >= type && this.mapObj[tile.y][tile.x] <= type + 15;

        return isFull;

    }

    _updateMap(tile) {

        this.mapObj[tile.y][tile.x] = tile.type;

    }

}

export default Draw;