import React from 'react';
import './App.css';

const frozenfruits = ["Frozen strawberries", "Frozen mango", "Frozen raspberries", "Frozen pineapple"];

class FrozenFruit extends React.Component {
  createCheckbox = frozen => (
    <div>
      <input type="checkbox" onChange={this.props.handleFrozenChange} name={frozen} />
      <label htmlFor={frozen}>{frozen}</label>
    </div>
  );

  createCheckboxes = () => frozenfruits.map(this.createCheckbox);

  render() {
    return (
      <div className="frozen">
        <h3>Frozen Fruit</h3>
        {this.createCheckboxes()}
      </div>
    );
  }
}

export default FrozenFruit;