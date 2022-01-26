import React, { Component } from "react";
import "./App.css";
import CharactersList from "./components/CharactersList";

class App extends Component {
  state = {
    characters: [],
    isLoading: true,
    searchTerm: "",
    filteredCharacters: [],
    error: null
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        const transformedCharacters = data.results.map((charactersData) => {
          return {
            id: charactersData.id,
            name: charactersData.name,
            species: charactersData.species,
            image: charactersData.image
          };
        });
        this.setState((prevState) => ({
          ...prevState,
          characters: transformedCharacters,
          filteredCharacters: transformedCharacters
        }));
      })
      .catch((err) => {
        this.setState((prevState) => ({ ...prevState, error: err }));
      })
      .finally(() => {
        this.setState((prevState) => ({ ...prevState, isLoading: false }));
      });
  }

  searchCharacterHandler(e) {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredCharacters: this.state.characters.filter((character) =>
          character.name
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        )
      });
    }
  }
  render() {
    const { characters, isLoading, filteredCharacters, error } = this.state;

    return (
      <>
        <section>
          <input
            type="search"
            placeholder="Search..."
            onChange={this.searchCharacterHandler.bind(this)}
          />
        </section>
        <section>
          {!isLoading && characters.length > 0 && (
            <CharactersList characters={filteredCharacters} />
          )}
          {!isLoading && characters.length === 0 && !error && (
            <p>Found no characters</p>
          )}
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error}</p>}
        </section>
      </>
    );
  }
}

export default App;
