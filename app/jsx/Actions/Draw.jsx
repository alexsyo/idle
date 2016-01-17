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

    brush(tile, type) {

        this.singleTile(tile, type);

        let adjacents = this.locate.adjacents(tile);
        let adjacentsOfAdjacents = this.locate.adjacentsOfAdjacents(adjacents);

        for(let i in adjacents) {

            if(adjacents.hasOwnProperty(i) && adjacents[i]) {

                if(!this.check.tile(adjacents[i], [type, 'ground'])) {

                    adjacents[i].type = 'ground';
                    adjacents[i].shape = 0;
    
                    this._drawImage(adjacents[i]);
                    this._updateMap(adjacents[i]);
                    
                }

            }

        }

        this._drawAdjacents(adjacentsOfAdjacents);

    }

    singleTile(tile, type) {

        let adjacents = this.locate.adjacents(tile);

        tile.type = type;
        tile.shape = this._setShape(tile, type);
        
        this._drawImage(tile);
        this._updateMap(tile);
        this._drawAdjacents(adjacents, type);

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

    _drawAdjacents(adjacents) {

        for(let i in adjacents) {

            if(adjacents.hasOwnProperty(i) && adjacents[i]) {

                adjacents[i].type = this.mapObj[adjacents[i].y][adjacents[i].x][0];
                adjacents[i].shape = this._setShape(adjacents[i], adjacents[i].type);

                this._drawImage(adjacents[i]);
                this._updateMap(adjacents[i]);

            }

        }

    }

    _setShape(tile, type) {

        let adjacents = this.locate.adjacents(tile);

        let up = (adjacents.up) ? this.check.tile(adjacents.up, type) : true;
        let right = (adjacents.right) ? this.check.tile(adjacents.right, type) : true;
        let down = (adjacents.down) ? this.check.tile(adjacents.down, type) : true;
        let left = (adjacents.left) ? this.check.tile(adjacents.left, type) : true;

        let shape;

        if(!up && !right && !down && !left) shape = 0;
        else if(!up &&  right && !down && !left) shape = 1;
        else if(!up &&  right && !down &&  left) shape = 2;
        else if(!up && !right && !down &&  left) shape = 3;
        else if(!up && !right &&  down && !left) shape = 4;
        else if(!up &&  right &&  down && !left) shape = 5;
        else if(!up &&  right &&  down &&  left) shape = 6;
        else if(!up && !right &&  down &&  left) shape = 7;
        else if( up && !right &&  down && !left) shape = 8;
        else if( up &&  right &&  down && !left) shape = 9;
        else if( up &&  right &&  down &&  left) shape = 10;
        else if( up && !right &&  down &&  left) shape = 11;
        else if( up && !right && !down && !left) shape = 12;
        else if( up &&  right && !down && !left) shape = 13;
        else if( up &&  right && !down &&  left) shape = 14;
        else if( up && !right && !down &&  left) shape = 15;

        return shape;

    }

    _updateMap(tile) {

        this.mapObj[tile.y][tile.x] = [tile.type, tile.shape];

    }

}

export default Draw;
