import React from 'react';

class Ingredients extends React.Component {
    handleBaseChange(e) {
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
}

export default Ingredients;