import React/*, { Component }*/ from 'react';
import Bases from "./Bases";
import Syrups from "./Syrups";
import './App.css';

const bases = ["Sprite", "Diet Coke", "Coke", "Dr Pepper", "Mtn Dew", "Iced Tea", "Root Beer", "Red Bull", "Monster Zero", "Sparkling Water", "Water", "Lemonade"];
const syrups = ["Black cherry", "Blackberry", "Blood orange", "Blue curacao", "Blue raspberry", "Blueberry", "Cherry", "Coconut", "Cranberry", "Grape", "Green Apple", "Grenadine", "Guava", /*"Huckleberry",*/ "Kiwi", "Orange", "Passion fruit", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Vanilla", "Watermelon"];

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
      syrupchecks: syrups.reduce(
        (syrups, syrup) => ({
          ...syrups,
          [syrup]: false
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

    this.handleBaseChange = this.handleBaseChange.bind(this);
    this.handleSyrupChange = this.handleSyrupChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBaseChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      basechecks: {
        ...prevState.basechecks,
        [name]: !prevState.basechecks[name]
      }
    }));

    /*Object.keys(this.state.basechecks)
      .filter(checkbox => this.state.basechecks[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });*/
  }

  handleSyrupChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      syrupchecks: {
        ...prevState.syrupchecks,
        [name]: !prevState.syrupchecks[name]
      }
    }));
  }

  handleSubmit(e) {
    var excludedBases = Object.keys(this.state.basechecks).filter(checkbox => this.state.basechecks[checkbox]);
    for (let i = 0; i < bases.length; i++) {
      if (excludedBases.includes(bases[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedBases: [...prevState.includedBases, bases[i]]
        }));
      }
    }

    var excludedSyrups = Object.keys(this.state.syrupchecks).filter(checkbox => this.state.syrupchecks[checkbox]);
    for (let i = 0; i < syrups.length; i++) {
      if (excludedSyrups.includes(syrups[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedSyrups: [...prevState.includedSyrups, syrups[i]]
        }));
      }
    }
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
          <Bases handleBaseChange={this.handleBaseChange}/>
          <Syrups handleSyrupChange={this.handleSyrupChange}/>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.includedBases.map((base, index) => {
            return <li key={index}>{base}</li>
          })}
        </ul>
        <ul>
          {this.state.includedSyrups.map((syrup, index) => {
            return <li key={index}>{syrup}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
