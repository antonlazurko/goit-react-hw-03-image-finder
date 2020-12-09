import React, { Component } from 'react';
import axios from 'axios';
import styles from './Searchbar.module.css';
import ImageGallery from '../ImageGallery';
//18968535-a98ecca7bd1b0403c78b07ef3
class Searchbar extends Component {
  state = { images: [] };
  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?key=18968535-a98ecca7bd1b0403c78b07ef3&q=yellow+flowers&image_type=photo',
      )
      .then(response => {
        this.setState({ images: response.data.hits });
      });
  }
  render() {
    const { images } = this.state;

    return (
      <div className={styles.Searchbar}>
        <ul className={styles.ImageGallery}>
          {images.map(({ id, webformatURL }) => {
            return (
              <li key={id} className={styles.ImageGalleryItem}>
                <img
                  src={webformatURL}
                  alt={id}
                  className={styles.ImageGalleryItem_Image}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Searchbar;
