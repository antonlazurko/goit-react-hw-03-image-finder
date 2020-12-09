import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
class App extends Component {
  state = { searchQuery: '' };
  onFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}

export default App;
