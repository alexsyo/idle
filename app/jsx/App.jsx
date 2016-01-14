'use strict';

import React from 'react';
import Home from './Views/Home.jsx';
import Settings from './Views/Settings/Settings.jsx';
import Board from './Views/Board/Board.jsx';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            view: 'Home',
            boardParams: {}
        };


        this.setView = (view) => {

            this.setState({view});

        };

        this.setBoardParams = (boardParams) => {

            this.setState({boardParams});

        };

    }


    render() {
        
        this.view = {
            Home:     <Home     setView={this.setView} />,
            Settings: <Settings setView={this.setView} options={['newMap']} setBoardParams={this.setBoardParams} />,
            Board:    <Board    setView={this.setView} boardParams={this.state.boardParams} />
        };


        return(

            <div>
                {this.view[this.state.view]}
            </div>

        );

    }

}

export default App;