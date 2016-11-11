import React, { Component } from 'react';
import {connect} from 'react-redux';

export default connect((store) => {
  return {
    member: store
  };
})
(class FilterUsers extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>This is Filter users. Yay!</h1>
        <input type="text" value="First Name" />
        <input type="text" value="Last Name" />
        <input type="text" value="Phone Number" />
      </div>
    );
  }
})
