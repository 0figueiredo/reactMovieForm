import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormMovie from './FormMovie';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Formulaire</code>
            <FormMovie/>
          </p>
                  
        </header>        
      </div>
    );
  }
}

export default App;

