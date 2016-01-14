'use strict';

import React from 'react';

class Home extends React.Component {

    constructor(props) {

        super(props);

    }


    render() {

        return(

            <div onClick={this.props.setView.bind(null, 'Settings')}>Editor</div>

        );

    }

}

export default Home;