import styles from './animal.cards.section.module.css';
import { useEffect, useState } from 'react';
import type { Animal } from '../../../types/types.ts';
import { ApiService } from '../../../services/service.ts';
import { Loader } from '../../Loader/Loader.tsx';
import { Alert } from '../../Alert/Alert.tsx';
import AnimalCardsGrid from '../../AnimalCard/AnimalCardsGrid.tsx';
import Button from '../../Buttons/Button.tsx';
import Arrow from '../../Buttons/icons/Arrow.tsx';

const AnimalCardsSection = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const animals = await ApiService.getAnimals();
        setAnimals(animals);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2>meet some our Pets</h2>
        <p className="subheader gallery__subheader">Do you have a special place in your heart for animals? Who are your
          favorites? Perhaps
          you'd like to
          donate to special ones or all our pets? We think it's important for you to choose how your donation
          is used. </p>
      </div>
      {isLoading && <Loader text="Loading pets..." />}

      {error && (
          <Alert onClose={() => setError(null)} />
      )}

      {!isLoading && !error && (
        <AnimalCardsGrid animals={animals} />
      )}
      <div className="mobile-invisible">
        <Button text='Choose Your Favourite' btnStyle='dark' icon={<Arrow/>} extraClass='mobile-block' />
      </div>
    </section>
  );
};

export default AnimalCardsSection;