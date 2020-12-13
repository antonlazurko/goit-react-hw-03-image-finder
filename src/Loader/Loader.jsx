import React from 'react';
import styles from './Loader.module.css';
export default function Loader({ searchQuery }) {
  return (
    <div className={styles.Loader}>
      Downlod {searchQuery}
      <div className={styles.chameleon}>
        <div className={styles.chameleon__head}>
          <div className={styles.chameleon__face}></div>
        </div>

        <div className={styles.chameleon__body}>
          <div className={styles.chameleon__tummy}>
            <div className={styles.chameleon__tail}></div>
          </div>
        </div>

        <div className={styles.chameleon__leg}></div>

        <div className={styles.chameleon__leg}></div>
      </div>
    </div>
  );
}
