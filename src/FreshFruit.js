import React from 'react';
import './App.css';

const freshfruits = ["Fresh limes", "Fresh lemons", "Fresh oranges", "Fresh cherries"];

class FreshFruit extends React.Component {
  createCheckbox = fresh => (
    <div>
      <input type="checkbox" onChange={this.props.handleFreshChange} name={fresh} />
      <label htmlFor={fresh}>{fresh}</label>
    </div>
  );

  createCheckboxes = () => freshfruits.map(this.createCheckbox);

  render() {
    return (
      <div className="fresh">
        <h3>Fresh Fruit</h3>
        {this.createCheckboxes()}
      </div>
    );
  }
}

export default FreshFruit;