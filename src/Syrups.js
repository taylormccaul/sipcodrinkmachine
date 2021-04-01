import React from 'react';
import './App.css';

const syrups = ["Black cherry", "Blackberry", "Blood orange", "Blue curacao", "Blue raspberry", "Blueberry", "Cherry", "Coconut", "Cranberry", "Grape", "Green Apple", "Grenadine", "Guava", /*"Huckleberry",*/ "Kiwi", "Orange", "Passion fruit", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Vanilla", "Watermelon"];

class Syrups extends React.Component {

  createCheckbox = syrup => (
    <div>
      <input type="checkbox" onChange={this.props.handleCheckboxChange} name={syrup} /*isSelected={this.state.syrupchecks[syrup]}*//>
      <label for={syrup}>{syrup}</label>
    </div>
  );

  createCheckboxes = () => syrups.map(this.createCheckbox);

  render() {
    return (
      <div className="syrups">
        <h3>Syrups</h3>
        {this.createCheckboxes()}
      </div>
    );
  }
}

export default Syrups;