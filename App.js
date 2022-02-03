import React, { Component } from "react";
import "./App.css";
import CharactersList from "./components/CharactersList";
import DataProvider from "./components/DataProvider";

class App extends Component {
  render() {
    return (
      <DataProvider>
        {(searchCharacterHandler, characters, filteredCharacters, error) => (
          <>
            <section>
              <input
                type="search"
                placeholder="Search..."
                onChange={searchCharacterHandler.bind(this)}
              />
            </section>
            <section>
              {characters.length > 0 && (
                <CharactersList characters={filteredCharacters} />
              )}
              {characters.length === 0 && !error && <p>Found no characters</p>}
              {error && <p>{error}</p>}
            </section>
          </>
        )}
      </DataProvider>
    );
  }
}

export default App;
