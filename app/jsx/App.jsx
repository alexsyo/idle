'use strict';

import React from 'react';
import Home from './Views/Home/Home.jsx';
import Editor from './Views/Editor/Editor.jsx';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            view: 'Home',
        };


        this.setView = (view) => {

            this.setState({view});

        };

    }


    render() {

        let view;

        switch(this.state.view) {
            case 'Home': 
                view = <Home setView={this.setView} />;
                break;
            case 'Editor': 
                view = <Editor />;
                break;
        }

        return(

            <div>
                {view}
            </div>

        );

    }

}

export default App;