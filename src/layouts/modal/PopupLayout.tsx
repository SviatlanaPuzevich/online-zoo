import React, { type ReactNode } from 'react';
import styles from './popup.layout.module.css';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { CONSTANT } from '../../const/const.ts';

interface PopupLayoutProps {
  title: string;
  onClose?: () => void;
  children: ReactNode;
}

const PopupLayout: React.FC<PopupLayoutProps> = ({ title, onClose, children}) => {
  const mountNode = document.getElementById('popup-root');

  if (!mountNode) return null;

  return createPortal(
    <div className={styles.popup} popover="auto" id={CONSTANT.POPUP_ID.basicPopupId}>
      <div className={styles.popup__content}>
        <div className={classNames(styles.popup__body, styles.popup__layout)}>
          <div className={styles['popup-header--accent']}>
            <h2 className={styles.popup__title}>{title}</h2>
            <button className={styles.popup__close} popoverTarget={CONSTANT.POPUP_ID.basicPopupId} popoverTargetAction="hide"
                    onClick={onClose}>
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M13.2261 14.4991L0 27.4026L1.63183 28.9946L14.8579 16.0911L28.0879 28.9984L29.7197 27.4064L16.4897 14.4991L29.7195 1.59203L28.0876 0L14.8579 12.907L1.63211 0.00380707L0.000274658 1.59584L13.2261 14.4991Z"
                      fill="white" />
              </svg>
            </button>
          </div>

          <div className={styles.popup__inner}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    mountNode,
  );
};

export default PopupLayout;