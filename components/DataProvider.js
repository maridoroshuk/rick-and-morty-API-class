import React, { Component } from "react";
import { LoaderHOC } from "../hoc/LoaderHOC";

class DataProvider extends Component {
  state = {
    characters: [],
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

        this.props.setLoading(false);
      })
      .catch((err) => {
        this.setState((prevState) => ({ ...prevState, error: err }));
      })
      .finally(() => {
        this.setState((prevState) => ({ ...prevState }));
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
    return (
      <>
        {this.props.children(
          this.searchCharacterHandler.bind(this),
          this.state.characters,
          this.state.filteredCharacters,
          this.state.isLoading,
          this.state.error
        )}
      </>
    );
  }
}

export default LoaderHOC(DataProvider);
