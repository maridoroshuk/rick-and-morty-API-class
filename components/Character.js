import React, { Component } from 'react';

import classes from './Character.module.css';

class Character extends Component {
  render () {
    return(
      <li className={classes.movie}>
      <h2>{this.props.name}</h2>
      <h3>{this.props.species}</h3>
      <img src={this.props.image}></img>
    </li>
    )
  }
}

export default Character;
