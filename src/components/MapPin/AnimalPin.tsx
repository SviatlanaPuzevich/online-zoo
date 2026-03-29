import React from 'react';
import styles from './animal.pin.module.css'
import spriteBox from '../../assets/icons/pins/map_sprite.svg'
import classNames from 'classnames';

export type MapPinId =
  | 'eagles'
  | 'crocodile'
  | 'lion'
  | 'gorilla'
  | 'lemur'
  | 'panda'
  | 'tiger'
  | 'koala';

export interface MapLocation {
  id: MapPinId;
  left: string;
  bottom: string;
}


interface PinProps {
  location: MapLocation;
}

const AnimalPin: React.FC<PinProps> = ({ location }) => {
  return (
    <svg className={styles.pin} style={{ left: location.left, bottom: location.bottom }}>
      <use
        href={`${spriteBox}#pin-outline-template`}
        className={classNames(styles['pin-outline'])}
      />
      <use href={`${spriteBox}#${location.id}`} />
    </svg>
  );
};

export default AnimalPin;