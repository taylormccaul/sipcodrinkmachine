import React from 'react';
import './App.css';

const bases = ["Sprite", "Diet Coke", "Coke", "Dr Pepper", "Mtn Dew", "Iced Tea", "Root Beer", "Red Bull", "Monster Zero", "Sparkling Water", "Water", "Lemonade"];

class Bases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basechecks: bases.reduce(
        (bases, base) => ({
          ...bases,
          [base]: false
        }),
        {}
      )
    }

  }

  createCheckbox = base => (
    <div>
      <input type="checkbox" onChange={this.props.handleBaseChange} name={base} />
      <label htmlFor={base}>{base}</label>
    </div>
  );

  createCheckboxes = () => bases.map(this.createCheckbox);

  render() {
    return (
      <div className="bases">
        <h3>Bases</h3>
        {this.createCheckboxes()}
      </div>
    );
  }
}

export default Bases;