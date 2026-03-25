import styles from './animal.cards.section.module.css';
import { useEffect, useState } from 'react';
import type { Animal } from '../../../types/types.ts';
import { ApiService } from '../../../services/service.ts';
import { Loader } from '../../Loader/Loader.tsx';
import { Alert } from '../../Alert/Alert.tsx';
import AnimalCardsGrid from '../../AnimalCard/AnimalCardsGrid.tsx';
import Button from '../../Buttons/Button.tsx';
import Arrow from '../../Buttons/icons/Arrow.tsx';
import GridSlider, { ArrowIcon } from '../../GridSlider/GridSlider.tsx';
import AnimalCard from '../../AnimalCard/AnimalCard.tsx';
import animalStyles from '../../AnimalCard/animal.card.module.css';

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
        console.error(err);
        setError('Something went wrong. Please reload the page');
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
        <GridSlider>{
          ({trackRef, next, prev}) => (<div>
            <div className={styles.slider__buttons}>
              <Button btnStyle="dark" icon={<ArrowIcon left={true} />} extraClass={styles['slider-btn']} onClick={prev} />
              <Button btnStyle="dark" icon={<ArrowIcon />} extraClass={styles['slider-btn']} onClick={next} />
            </div>
            <div ref={trackRef} className={styles.cardGrid}>
              {animals.map((animal) => (
                <AnimalCard animal={animal} key={animal.id} />
              ))}
            </div>
        </div>)
          }
        </GridSlider>

      )}
      <div className="mobile-invisible">
        <Button text="Choose Your Favourite" btnStyle="dark" icon={<Arrow />} extraClass="mobile-block" />
      </div>
    </section>
  );
};

export default AnimalCardsSection;