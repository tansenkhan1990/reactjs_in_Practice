import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewPerson from './Person/Person.js'

class App extends Component {
  state = {
    Persons : [
      { name : 'Tansen' , age : 30 },
      {  name : 'Bondhon', age : 26 },
      {  name : 'Borson', age :7}
    ]
  }
  render() {
   return (
      <div className="App">
        <h1>
        Hi it's my first app
        </h1>
        <NewPerson name ={this.state.Persons[0].name} age ={this.state.Persons[0].age}>My hobbie is playing cricket </NewPerson>
        <NewPerson name ={this.state.Persons[1].name} age ={this.state.Persons[1].age}>My hobbie is playing cricket </NewPerson>
        <NewPerson name ={this.state.Persons[2].name} age ={this.state.Persons[2].age}>My hobbie is playing cricket </NewPerson>
      </div>
    );
  }
 // return React.createElement('div',null,React.createElement('h1',{className:"App"},'this is for nested elements'));
  }


export default App;
