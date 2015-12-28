'use strict';

import React from 'react';
import Canvas from './Map/Canvas.jsx';
import Palette from './Map/Palette.jsx';

class App extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
            tileType: null
        };

        this.setTileTypeHandler = (tileType) => {

            this.setState({tileType});

        };

    }


    render() {

        return(

            <div>

                <Canvas tileType={this.state.tileType} />
                <Palette setTileTypeHandler={this.setTileTypeHandler} />

            </div>

        );

    }

}

export default App;