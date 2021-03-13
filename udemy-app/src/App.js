import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewPerson from './Person/Person.js'

class App extends Component {
  render() {
   return (
      <div className="App">
        <h1>
        Hi it's my first app
        </h1>
        <NewPerson name ="Tansen" age = "30" />
        <NewPerson name = "bondhon" age = "26" />
      </div>
    );
  }
 // return React.createElement('div',null,React.createElement('h1',{className:"App"},'this is for nested elements'));
  }


export default App;
