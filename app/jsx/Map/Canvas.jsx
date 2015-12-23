'use strict';

import React from 'react';
import Draw from './Draw.jsx';
import Map from './Map.jsx';

class Canvas extends React.Component {

    constructor(props) {

        super(props);
        this.map = new Map();
        this.mouseActive = false;

    }

    componentDidMount() {

        this.canvas = document.getElementById('mainBoard');
        this.context = this.canvas.getContext('2d');
        this.draw = new Draw(this.canvas, this.context);

        this.draw.map(this.map.start);

        // this.addListeners(['mouseleave', 'mouseup', 'touchend'], () => this.mouseActive = false);
        // this.addListeners(['mousemove', 'touchmove'], (event) => this.draw.singleTile(event, 1, this.mouseActive));
        // this.addListeners(this.canvas, ['click'], (event) => {
        //     this.mouseActive = true;
        //     this.draw.singleTile(event, 1, this.mouseActive);
        // });

        this.canvas.addEventListener('click', (event) => {
            this.mouseActive = true;
            this.draw.singleTile(event, 1, this.mouseActive);
        });

        // this.button.addEventListener('mousedown', () => {this.button.style.backgroundColor = 'brown'});

        // document.getElementById('ciao').addEventListener('touchstart', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);
        // document.getElementById('ciao').addEventListener('touchmove', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);
        // document.getElementById('ciao').addEventListener('touchend', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);     
        // document.getElementById('ciao').addEventListener('mousedown', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);
        // document.getElementById('ciao').addEventListener('mousemove', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);
        // document.getElementById('ciao').addEventListener('mouseup', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);
        document.getElementById('ciao').addEventListener('click', () => {document.getElementById('ciao').style.backgroundColor = 'brown'}, false);

    }

    addListeners(obj, events, callback) {

        for(let evt of events) {

            obj.addEventListener(evt, callback);

        }

    }

    render() {

        return(

            <div>

                <canvas id="mainBoard" height="300" width="400"></canvas>
                <button id="ciao">ciao</button>

            </div>

        );

    }

}

export default Canvas;