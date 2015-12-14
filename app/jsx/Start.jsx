'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

document.addEventListener("deviceready", () => {

    ReactDOM.render(<App />, document.getElementById('content'));

}, false);