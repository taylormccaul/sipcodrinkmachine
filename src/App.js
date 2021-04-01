import React/*, { Component }*/ from 'react';
import Bases from "./Bases";
import Syrups from "./Syrups";
import Creams from "./Creams";
import Purees from "./Purees";
import './App.css';

const bases = ["Sprite", "Diet Coke", "Coke", "Dr Pepper", "Mtn Dew", "Iced Tea", "Root Beer", "Red Bull", "Monster Zero", "Sparkling Water", "Water", "Lemonade"];
const syrups = ["Black cherry", "Blackberry", "Blood orange", "Blue curacao", "Blue raspberry", "Blueberry", "Cherry", "Coconut", "Cranberry", "Grape", "Green Apple", "Grenadine", "Guava", /*"Huckleberry",*/ "Kiwi", "Orange", "Passion fruit", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Vanilla", "Watermelon"];
const creams = ["Coconut cream", "Vanilla cream", "Half and half"];
const purees = ["Strawberry puree", "Raspberry puree", "Mango puree", "Peach puree"];

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
      creamchecks: creams.reduce(
        (creams, cream) => ({
          ...creams,
          [cream]: false
        }),
        {}
      ),
      pureechecks: purees.reduce(
        (purees, puree) => ({
          ...purees,
          [puree]: false
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
    this.handleCreamChange = this.handleCreamChange.bind(this);
    this.handlePureeChange = this.handlePureeChange.bind(this);
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

  handleCreamChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      creamchecks: {
        ...prevState.creamchecks,
        [name]: !prevState.creamchecks[name]
      }
    }));
  }

  handlePureeChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      pureechecks: {
        ...prevState.pureechecks,
        [name]: !prevState.pureechecks[name]
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

    var excludedSyrups = Object.keys(this.state.syrupchecks)
    .filter(checkbox => this.state.syrupchecks[checkbox]);
    for (let i = 0; i < syrups.length; i++) {
      if (excludedSyrups.includes(syrups[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedSyrups: [...prevState.includedSyrups, syrups[i]]
        }));
      }
    }

    var excludedCreams = Object.keys(this.state.creamchecks)
    .filter(checkbox => this.state.creamchecks[checkbox]);
    for (let i = 0; i < creams.length; i++) {
      if (excludedCreams.includes(creams[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedCreams: [...prevState.includedCreams, creams[i]]
        }));
      }
    }

    var excludedPurees = Object.keys(this.state.pureechecks)
    .filter(checkbox => this.state.pureechecks[checkbox]);
    for (let i = 0; i < purees.length; i++) {
      if (excludedPurees.includes(purees[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedPurees: [...prevState.includedPurees, purees[i]]
        }));
      }
    }

    e.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <h2>Exclusions</h2>
        <form onSubmit={this.handleSubmit}>
          <Bases handleBaseChange={this.handleBaseChange}/>
          <Syrups handleSyrupChange={this.handleSyrupChange}/>
          <Creams handleCreamChange={this.handleCreamChange}/>
          <Purees handlePureeChange={this.handlePureeChange}/>
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
        <ul>
          {this.state.includedCreams.map((cream, index) => {
            return <li key={index}>{cream}</li>
          })}
        </ul>
        <ul>
          {this.state.includedPurees.map((puree, index) => {
            return <li key={index}>{puree}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
