import React from 'react';
import './App.css';

const purees = ["Strawberry puree", "Raspberry puree", "Mango puree", "Peach puree"];

class Purees extends React.Component {

  createCheckbox = puree => (
    <div>
      <input type="checkbox" onChange={this.props.handlePureeChange} name={puree} />
      <label htmlFor={puree}>{puree}</label>
    </div>
  );

  createCheckboxes = () => purees.map(this.createCheckbox);

  render() {
    return (
      <div className="purees">
        <h3>Purees</h3>
        {this.createCheckboxes()}
      </div>
    );
  }
}

export default Purees;