import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Bar Chart</h2>
        </div>
        <div>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>

      </div>
    );
  }
}

export default App;
