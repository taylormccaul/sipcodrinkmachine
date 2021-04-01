import React/*, { Component }*/ from 'react';
import Bases from "./Bases";
import './App.css';

const bases = ["Sprite", "Diet Coke", "Coke", "Dr Pepper", "Mtn Dew", "Iced Tea", "Root Beer", "Red Bull", "Monster Zero", "Sparkling Water", "Water", "Lemonade"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basechecks: bases.reduce(
        (bases, base) => ({
          ...bases,
          [base]: false
        }),
        {}
      ),
      includedBases: [],
      includedSyrups: [],
      includedCreams: [],
      includedPurees: [],
      includedFresh: [],
      includedFrozen: [],
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckboxChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      basechecks: {
        ...prevState.basechecks,
        [name]: !prevState.basechecks[name]
      }
    }));

    Object.keys(this.state.basechecks)
      .filter(checkbox => this.state.basechecks[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }

  handleSubmit(e) {
    //var includedBases = [];
    var excludedBases = Object.keys(this.state.basechecks).filter(checkbox => this.state.basechecks[checkbox]);
    for (let i = 0; i < bases.length; i++) {
      if (excludedBases.includes(bases[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedBases: [...prevState.includedBases, bases[i]]
        }));
        //includedBases.push(bases[i]);
      }
    }

    //console.log(this.state.includedBases);
    e.preventDefault();
  }

  /*displayBases() {
    return(
      <ul>
        {this.state.includedBases.map((base, index) => {
          <li key={index}>{base}</li>
        })};
      </ul>
    )
  }*/

  render() {
    return (
      <div className="app">
        <h2>Exclusions</h2>
        <form onSubmit={this.handleSubmit}>
          <Bases handleCheckboxChange={this.handleCheckboxChange}/>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.includedBases.map((base, index) => {
            return <li key={index}>{base}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
