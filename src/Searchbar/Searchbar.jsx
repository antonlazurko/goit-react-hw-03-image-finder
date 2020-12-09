import React, { Component } from 'react';
import { toast } from 'react-toastify';

import styles from './Searchbar.module.css';
class Searchbar extends Component {
  state = { searchQuery: '' };

  onQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Type something to find.');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.onSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            value={this.state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onQueryChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
