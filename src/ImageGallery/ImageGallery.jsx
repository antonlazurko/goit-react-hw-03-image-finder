import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import API from '../services/Service-api';
import ImageGalleryItem from './ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class ImageGallery extends Component {
  state = {
    query: null,
    error: null,
    status: Status.IDLE,
  };
  componentDidUpdate = (prevProps, prevState) => {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      API(this.props.searchQuery)
        .then(query => this.setState({ query, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }))
        .then(() => {});
    }
  };
  render() {
    console.log(this.state);
    const { query, error, status } = this.state;
    const { searchQuery } = this.props;

    if (status === 'idle') {
      return <div>Введите текст запроса.</div>;
    }

    if (status === 'pending') {
      return <div>Загружается {searchQuery}</div>;
    }

    if (status === 'rejected') {
      return <div>ОШИБКА {error.message}</div>;
      // <QueryErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem query={query} />
        </ul>
      );
    }
  }
}
export default ImageGallery;
