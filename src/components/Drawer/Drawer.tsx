import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { AnimalItem } from '../../types/types';
import classNames from 'classnames';
import styles from './drawer.module.css';
import { ApiService } from '../../services/service.ts';
import { Loader } from '../Loader/Loader.tsx';


const Drawer: React.FC = () => {
  const { id: activeId } = useParams<{ id: string }>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [animals, setAnimals] = useState<AnimalItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const animals = await ApiService.getCameras();
        setAnimals(animals);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const visibleCount = 3;

  const { activeItem, otherItems } = useMemo(() => {
    const active = animals.find((item) => item.petId === Number(activeId));
    const others = animals.filter((item) => item.petId !== Number(activeId));
    return { activeItem: active, otherItems: others };
  }, [animals, activeId]);

  const handleShowNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextGroup = currentGroup + 1;
    const maxGroups = Math.ceil(otherItems.length / visibleCount);

    if (nextGroup >= maxGroups) {
      setCurrentGroup(0);
    } else {
      setCurrentGroup(nextGroup);
    }
  };

  return (
    <aside className={classNames(styles.drawer, { [styles['drawer--expanded']]: isExpanded })}>
      <button
        id="collapseBtn"
        className={classNames(styles.drawer__collapse, {
          [styles['drawer__collapse--expanded']]: isExpanded,
        })}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={classNames(styles.drawer__badge, { [styles['drawer__badge--visible']]: isExpanded })}>
          ZOOS
        </span>
        <i className={classNames('icon-toggle', { [styles['drawer__left-icon--expanded']]: isExpanded })} />
      </button>

      <ul className={styles.drawer__list}>
        {isLoading && <Loader />}

        {error && (
          <DrawerAlert />
        )}

        {!isLoading && !error && (

          <>
            {activeItem && (
              <DrawerItem item={activeItem} isActive={true} isExpanded={isExpanded} />
            )}

            {otherItems.map((item, index) => {
              const start = currentGroup * visibleCount;
              const end = start + visibleCount;
              const isVisible = index >= start && index < end;

              return (
                <DrawerItem
                  key={item.petId}
                  item={item}
                  isActive={false}
                  isExpanded={isExpanded}
                  isHidden={!isVisible}
                />
              );
            })}
          </>
        )}
      </ul>

      <button className={styles['drawer-down-button']} onClick={handleShowNext}>
        <span className={styles.arrow_icon}>▼</span>
      </button>
    </aside>
  );
};

interface ItemProps {
  item: AnimalItem;
  isActive: boolean;
  isExpanded: boolean;
  isHidden?: boolean;
}

const DrawerItem: React.FC<ItemProps> = ({ item, isActive, isExpanded, isHidden }) => {
  if (isHidden) return null;

  return (
    <li className={classNames(styles.drawer__item, { [styles['drawer__item--active']]: isActive })}>
      <Link className={styles.drawer__link} to={`/zoo/${item.petId}`}>
        <div className={classNames(styles.drawer__circle, { [styles['drawer__circle--collapsed']]: !isExpanded })}>
          <div
            className={classNames(styles['drawer__icon-wrap'], {
              [styles['drawer__icon-wrap--active']]: isActive,
              [styles['drawer__icon-wrap--collapsed']]: !isExpanded && !isActive,
              [styles['drawer__icon-wrap--active--collapsed']]: !isExpanded && isActive,
            })}
          >
            <svg className={styles.drawer__icon}>
              <use href={`/icons/zoos/sprite.svg#${item.id}-d-icon`} />
            </svg>
          </div>
        </div>
        <p className={styles.drawer__text}>{item.text}</p>
      </Link>
    </li>
  );
};

export default Drawer;


const DrawerAlert: React.FC = () => {
  return (
    <li className={classNames(styles.drawer__item, styles['drawer__item--active'])}>
      <a className={styles.drawer__link} href="#">
        <p className={styles.drawer__text}>{'Something wrong. Reload page'}</p>
      </a>
    </li>
  );
};