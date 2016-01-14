'use strict';

class Map {

    constructor() {

        this.new = (width, height) => {

            let map = [];

            for(let y = 0; y < height; y++) {

                map[y] = [];

                for(let x = 0; x < width; x++) {

                    map[y][x] = ['ground', 0];

                }

            }

            return map;

        };

        this.start = [
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]],
            [ ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0], ['ground', 0]]
        ];
        
    }

}

export default Map;