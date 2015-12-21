'use strict';

let tile = {};

tile.img = document.createElement('img');
tile.img.src = '../img/tileSheet.png';
tile.size = 32;
tile.type = {
    '0': {x: 0 , y: 0},
    '1': {x: 32, y: 0},
    '2': {x: 64, y: 0},
    '3': {x: 96, y: 0},
    '4': {x: 0 , y: 32},
    '5': {x: 32, y: 32},
    '6': {x: 64, y: 32},
    '7': {x: 96, y: 32},
    '8': {x: 0 , y: 64},
    '9': {x: 32, y: 64},
    '10': {x: 64, y: 64},
    '11': {x: 96, y: 64},
    '12': {x: 0 , y: 96},
    '13': {x: 32, y: 96},
    '14': {x: 64, y: 96},
    '15': {x: 96, y: 96}
};

export default tile;