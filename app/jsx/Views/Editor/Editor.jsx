'use strict';

import React from 'react';
import Canvas from '../../Components/Canvas.jsx';
import Palette from '../../Components/Palette.jsx';

class Editor extends React.Component {

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

                <Canvas tileType={this.state.tileType} />
                <Palette setTileType={this.setTileType} />

            </div>

        );

    }

}

export default Editor;