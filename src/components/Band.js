import React, { Component } from 'react';

class Band extends Component {
  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }
  render() {
    return(
      <div>
        <h1>Band Component</h1>
        <li>{this.props.name}</li>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
