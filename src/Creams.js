import React from 'react';
import './App.css';

const creams = ["Coconut cream", "Vanilla cream", "Half and half"];

class Creams extends React.Component {

  createCheckbox = cream => (
    <div>
      <input type="checkbox" onChange={this.props.handleCreamChange} name={cream} />
      <label htmlFor={cream}>{cream}</label>
    </div>
  );

  createCheckboxes = () => creams.map(this.createCheckbox);

  render() {
    return (
      <div className="creams">
        <h3>Creams</h3>
        {this.createCheckboxes()}
      </div>
    );
  }
}

export default Creams;