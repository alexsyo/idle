'use strict';

let tile = {};

tile.img = document.createElement('img');
tile.img.src = '../img/tileSheet.png';

tile.pos = {
    '0': {x: 0 , y: 0},
    '1': {x: 32, y: 0},
    '2': {x: 64, y: 0},
    '3': {x: 96, y: 0}
};

tile.size = 32;

export default tile;