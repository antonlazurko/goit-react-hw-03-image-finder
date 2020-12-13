import React from 'react';
import styles from './ImageError.module.css';
export default function ImageError({ error, searchQuery }) {
  return error ? (
    <div>{error.message}</div>
  ) : (
    <div>Нет картинок по запросу {searchQuery}</div>
  );
}
