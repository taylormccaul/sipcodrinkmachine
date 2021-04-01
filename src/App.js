import React/*, { Component }*/ from 'react';
import Bases from "./Bases";
import Syrups from "./Syrups";
import Creams from "./Creams";
import Purees from "./Purees";
import FreshFruit from "./FreshFruit";
import FrozenFruit from "./FrozenFruit";
import './App.css';

const bases = ["Sprite", "Diet Coke", "Coke", "Dr Pepper", "Mtn Dew", "Iced Tea", "Root Beer", "Red Bull", "Monster Zero", "Sparkling Water", "Water", "Lemonade"];
const syrups = ["Black cherry", "Blackberry", "Blood orange", "Blue curacao", "Blue raspberry", "Blueberry", "Cherry", "Coconut", "Cranberry", "Grape", "Green Apple", "Grenadine", "Guava", /*"Huckleberry",*/ "Kiwi", "Orange", "Passion fruit", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Vanilla", "Watermelon"];
const creams = ["Coconut cream", "Vanilla cream", "Half and half"];
const purees = ["Strawberry puree", "Raspberry puree", "Mango puree", "Peach puree"];
const freshfruits = ["Fresh limes", "Fresh lemons", "Fresh oranges", "Fresh cherries"];
const frozenfruits = ["Frozen strawberries", "Frozen mango", "Frozen raspberries", "Frozen pineapple"];

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
      freshchecks: freshfruits.reduce(
        (freshfruits, fresh) => ({
          ...freshfruits,
          [fresh]: false
        }),
        {}
      ),
      frozenchecks: frozenfruits.reduce(
        (frozenfruits, frozen) => ({
          ...frozenfruits,
          [frozen]: false
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
    this.handleFreshChange = this.handleFreshChange.bind(this);
    this.handleFrozenChange = this.handleFrozenChange.bind(this);
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

  handleFreshChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      freshchecks: {
        ...prevState.freshchecks,
        [name]: !prevState.freshchecks[name]
      }
    }));
  }

  handleFrozenChange(e) {
    const {name} = e.target;

    this.setState(prevState => ({
      frozenchecks: {
        ...prevState.frozenchecks,
        [name]: !prevState.frozenchecks[name]
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

    var excludedFresh = Object.keys(this.state.freshchecks)
    .filter(checkbox => this.state.freshchecks[checkbox]);
    for (let i = 0; i < freshfruits.length; i++) {
      if (excludedFresh.includes(freshfruits[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedFresh: [...prevState.includedFresh, freshfruits[i]]
        }));
      }
    }

    var excludedFrozen = Object.keys(this.state.frozenchecks)
    .filter(checkbox => this.state.frozenchecks[checkbox]);
    for (let i = 0; i < frozenfruits.length; i++) {
      if (excludedFrozen.includes(frozenfruits[i])) {
        continue;
      } else {
        this.setState(prevState => ({
          includedFrozen: [...prevState.includedFrozen, frozenfruits[i]]
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
          <FreshFruit handleFreshChange={this.handleFreshChange}/>
          <FrozenFruit handleFrozenChange={this.handleFrozenChange}/>
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
        <ul>
          {this.state.includedFresh.map((fresh, index) => {
            return <li key={index}>{fresh}</li>
          })}
        </ul>
        <ul>
          {this.state.includedFrozen.map((frozen, index) => {
            return <li key={index}>{frozen}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
