'use strict';

import React from 'react';

class NewMap extends React.Component {

    constructor(props) {

        super(props);

        this.handleWidthChange = (event) => {

            this.props.setDimension(event.target.value, 'width');

        };

        this.handleHeightChange = (event) => {

            this.props.setDimension(event.target.value, 'height');

        };

    }


    render() {

        return (

            <div>

                <input type="number" defaultValue={this.props.dimensions.width} min="1" onChange={this.handleWidthChange} />
                <input type="number" defaultValue={this.props.dimensions.height} min="1" onChange={this.handleHeightChange} />

            </div>

        );

    }

}

export default NewMap;