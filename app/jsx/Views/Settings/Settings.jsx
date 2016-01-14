'use strict';

import React from 'react';
import Map from '../../Elements/Map.jsx';
import NewMap from './Components/NewMap.jsx';

class Settings extends React.Component {

    constructor(props) {

        super(props);
        this.map = new Map();
        this.dimensions = {width: 5, height: 5};


        this.setDimension = (dimension, type) => {

            this.dimensions[type] = dimension;

        };

        this.handleClick = () => {

            let map = this.map.new(this.dimensions.width, this.dimensions.height);

            this.props.setBoardParams({map});
            this.props.setView('Board');

        };

    }


    render() {

        this.options = {
            newMap: <NewMap key="newMap" dimensions={this.dimensions} setDimension={this.setDimension} />
        };


        return (

            <div>
            
                {this.props.options.map((option) => {

                    return this.options[option];

                })}

                <button onClick={this.handleClick}>Go!</button>

            </div>
        
        );

    }

}

export default Settings;