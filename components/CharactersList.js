import React, { Component } from 'react';
import Character from './Character';
import classes from './CharactersList.module.css';

class CharactersList extends Component {
  render() {
    return (
      <ul className={classes['movies-list']}>
      {this.props.characters.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </ul>
    )
  }
}

export default CharactersList;
