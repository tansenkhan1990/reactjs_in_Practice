import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
   // return (
      // <div className="App">
      //   <h1>
      //   Hi it's my first app
      //   </h1>
      // </div>
    // );
  // }
  return React.createElement('div',null,'h1','Hi its my first app');
  }
}

export default App;
