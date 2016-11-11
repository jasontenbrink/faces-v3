import React, {Component} from 'react'
import {connect} from 'react-redux';

export default class appView extends Component{
  render (props){
    return(
    <div>
      <p>Welcome "name" and login/logout </p>
      <h2>nav bar</h2>
      {this.props.children}
    </div>)
  }
}
