import React, { useEffect, useState } from 'react';
import type { AnimalFact } from '../../types/types';
import styles from './animal.fact.module.css';
import { parseCoordinate } from '../../utils/coordinatesHelper.ts';
import Button from '../Buttons/Button.tsx';
import classNames from 'classnames';
import Arrow from '../Buttons/icons/Arrow.tsx';
import { ApiService } from '../../services/service.ts';
import { Loader } from '../Loader/Loader.tsx';
import { Alert } from '../Alert/Alert.tsx';
import { useParams } from 'react-router-dom';



const AnimalFactSection: React.FC = () => {

  const { id } = useParams<{ id: string }>() ;

  const [fact, setFact] = useState<AnimalFact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const fact = await ApiService.getAnimalFact(id);
        setFact(fact);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const latitude = fact && parseCoordinate(fact.latitude);
  const longitude = fact && parseCoordinate(fact.longitude);
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=12&output=embed`;

  return (
    <section className={styles.fact}>
      <div className="container">

        {isLoading && <Loader text="Loading animal fact..." />}

        {error && (
          <Alert onClose={() => setError(null)} />
        )}

        {!isLoading && !error && fact && (<>
          <div className={styles.fact__card}>
            <h3 className={styles.fact__title}>DID YOU KNOW?</h3>
            <p className={styles.fact__text}>
              {fact.description}
            </p>
          </div>
          <div className={styles.info__card}>
            <div className={styles.info__image}>
              <img src={`/images/zoos/${fact.id}/fact.png`} alt={fact.commonName} />
            </div>
            <div className={styles.info__content}>
              <ul className={styles.info__list}>
                <InfoItem label="Common name" value={fact.commonName} />
                <InfoItem label="Scientific name" value={fact.scientificName} />
                <InfoItem label="Type" value={fact.type} />
                <InfoItem label="Size" value={fact.size} />
                <InfoItem label="Diet" value={fact.diet} />
                <InfoItem label="Habitat" value={fact.habitat} />
                <li className={classNames(styles.info__item, styles['info__item--last'])}>
                  <span className={styles.info__label}>Range:</span>
                  <span>{fact.range}</span>
                  <Button text="VIEW MAP" icon={<Arrow />} extraClass={classNames('mobile-block', styles.mapLink)}
                          popoverTarget="" />
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.info__description}>
            {fact.detailedDescription}
          </p>
        </>)
        }
      </div>
    </section>
  );
};


const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <li className={styles.info__item}>
    <span className={styles.info__label}>{label}:</span><span>{value}</span>
  </li>
);

export default AnimalFactSection;