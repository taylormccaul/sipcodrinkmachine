//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
//import { ReactComponent } from '*.svg';

const bases = ["Sprite", "Diet Coke", "Coke", "Dr Pepper", "Mtn Dew", "Iced Tea", "Root Beer", "Red Bull", "Monster Zero", "Sparkling Water", "Water", "Lemonade"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: bases.reduce(
        (bases, base) => ({
          ...bases,
          [base]: false
        }),
        {}
      )
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
    console.log(this.state.checkboxes);

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  createCheckbox = base => (
    <div>
      <input type="checkbox" onChange={this.handleCheckboxChange} name={base} isSelected={this.state.checkboxes[base]}/>
      <label for={base}>{base}</label>
    </div>
  );

  createCheckboxes = () => bases.map(this.createCheckbox);

  render() {
    return (
      <form>
        {this.createCheckboxes()}
      {/*<div>
          {bases.map(function(name, index){
            return <input type="checkbox" value={name}></input>;
          })}
        </div>*/}
      </form>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
