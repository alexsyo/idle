'use strict';

import Check from './Check.jsx';
import Locate from './Locate.jsx';
import Tile from '../Elements/Tile.jsx';

class Draw {

    constructor(canvas, map) {

        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.mapObj = map;
        this.check = new Check(map);
        this.locate = new Locate(canvas, map);
        this.tileObj = new Tile();

    }

    map() {

        this.tileObj.img.onload = () => {

            for(let y = 0; y < this.mapObj.length; y++) {

                for(let x = 0; x < this.mapObj[y].length; x++) {

                    let tile = {
                        x,
                        y,
                        type: this.mapObj[y][x][0],
                        shape: this.mapObj[y][x][1]
                    };

                    this._drawImage(tile);
    
                }

            }

        };

    }

    palette(tileSet) {

        this.tileObj.img.onload = () => {

            for(let i = 0; i < tileSet.length; i++) {

                let tile = {
                    x: i,
                    y: 0,
                    type: tileSet[i],
                    shape: 0
                };

                this._drawImage(tile);

            }

        };

    }

    spreadTile(tile, type) {

        let adjacents = this.locate.adjacents(tile);

        if(this.check.tile(tile, 'ground') && this.check.adjacents(adjacents, ['ground', type])) {

            tile.type = type;
            tile.shape = this._setShape(adjacents, type);
            this._drawImage(tile);
            this._updateMap(tile);
            this._drawAdjacents(adjacents, type);

        }

    }

    _drawImage(tile) {

        this.context.drawImage(
            this.tileObj.img,                                           // img instance
            this.tileObj.type[tile.type][tile.shape].x, 
            this.tileObj.type[tile.type][tile.shape].y,                 // src position
            this.tileObj.size, this.tileObj.size,                       // src size
            tile.x * this.tileObj.size, tile.y * this.tileObj.size,     // dst position
            this.tileObj.size, this.tileObj.size                        // dst size
        );

    }

    _drawAdjacents(adjacents, type) {

        for(let i in adjacents) {

            if(adjacents.hasOwnProperty(i) && adjacents[i]) {

                if(this.check.tile(adjacents[i], type)) {

                    let adjacentOfAdjacent = this.locate.adjacents(adjacents[i]);

                    adjacents[i].type = type;
                    adjacents[i].shape = this._setShape(adjacentOfAdjacent, type);

                    this._drawImage(adjacents[i]);
                    this._updateMap(adjacents[i]);
                    
                }

            }

        }

    }

    _setShape(adjacent, type) {

        let up = (adjacent.up) ? this.check.tile(adjacent.up, type) : true;
        let right = (adjacent.right) ? this.check.tile(adjacent.right, type) : true;
        let down = (adjacent.down) ? this.check.tile(adjacent.down, type) : true;
        let left = (adjacent.left) ? this.check.tile(adjacent.left, type) : true;

        let shape;

        if(!up && !right && !down && !left) shape = 0;
        if(!up &&  right && !down && !left) shape = 1;
        if(!up &&  right && !down &&  left) shape = 2;
        if(!up && !right && !down &&  left) shape = 3;
        if(!up && !right &&  down && !left) shape = 4;
        if(!up &&  right &&  down && !left) shape = 5;
        if(!up &&  right &&  down &&  left) shape = 6;
        if(!up && !right &&  down &&  left) shape = 7;
        if( up && !right &&  down && !left) shape = 8;
        if( up &&  right &&  down && !left) shape = 9;
        if( up &&  right &&  down &&  left) shape = 10;
        if( up && !right &&  down &&  left) shape = 11;
        if( up && !right && !down && !left) shape = 12;
        if( up &&  right && !down && !left) shape = 13;
        if( up &&  right && !down &&  left) shape = 14;
        if( up && !right && !down &&  left) shape = 15;

        return shape;

    }

    _updateMap(tile) {

        this.mapObj[tile.y][tile.x] = [tile.type, tile.shape];

    }

}

export default Draw;