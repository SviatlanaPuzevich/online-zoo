import React, { useState } from 'react';
import styles from './alert.module.css';

interface AlertProps {
  message?: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message = 'Something went wrong. Please, refresh the page', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.alert} ${styles['alert--error']}`}>
      <div className={styles.alert__content}>
        {message}
      </div>
      <button
        className={styles.alert__close}
        onClick={handleClose}
        aria-label="Close alert"
      >
        ×
      </button>
    </div>
  );
};