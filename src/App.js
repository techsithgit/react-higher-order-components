import React, { Component } from 'react';
import './App.css';
import './components/ButtonOne';
import ButtonOne from './components/ButtonOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
      </div>
    );
  }
}

export default App;
