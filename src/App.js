import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App row full-height">
        <div className="col-sm-3 full-height" id="task-zone">
          Tasks can go here
        </div>
        <div className="col-sm-9 full-height" id="schedule-zone">
          Schedule for the day can go here
        </div>
      </div>
    );
  }
}

export default App;
