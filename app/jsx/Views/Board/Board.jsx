'use strict';

import React from 'react';
import Canvas from './Components/Canvas.jsx';
import Palette from './Components/Palette.jsx';

class Board extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            tileType: null
        };


        this.setTileType = (tileType) => {

            this.setState({tileType});

        };

    }


    render() {

        return(

            <div>

                <Canvas tileType={this.state.tileType} boardParams={this.props.boardParams} />
                <Palette setTileType={this.setTileType} />
                <button onClick={this.props.setView.bind(null, 'Home')}>Back</button>

            </div>

        );

    }

}

export default Board;