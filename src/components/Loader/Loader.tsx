import React from 'react';
import styles from './loader.module.css';

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <div className={styles.loader__container}>
      <div>{text}</div>
      <div className={styles.loader}></div>
    </div>
  );
};