import React, { Component } from 'react';
import './App.css';

import {MythicalMysfitsProfileGrid} from './components/MythicalMysfitsProfileGrid';
require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <MythicalMysfitsProfileGrid />
      </div>
    );
  }
}

export default App;
