import React from 'react';
import styles from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ query }) => {
  console.log(query.data.hits);
  const imageData = query.data.hits;
  return imageData.map(image => (
    <li key={image.id} className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.type}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  ));
};
export default ImageGalleryItem;
