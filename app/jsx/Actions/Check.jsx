'use strict';

class Check {

    constructor(map) {

        this.map = map;

    }

    tile(tile, types) {

        types = (types.constructor === Array) ? types : [types];

        for(let i = 0; i < types.length; i ++) {

            if (this.map[tile.y][tile.x][0] === types[i]) return true;

        }

        return false;

    }

    adjacents(adjacents, types) {

        for(let i in adjacents) {
  
            if(adjacents.hasOwnProperty(i)) {

                if (adjacents[i] && !this.tile(adjacents[i], types)) return false;

            }

        }

        return true;

    }

}

export default Check;