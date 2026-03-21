import styles from './review.section.module.css';
import { useEffect, useState } from 'react';
import type { Review } from '../../../types/types.ts';
import { ApiService } from '../../../services/service.ts';
import { Loader } from '../../Loader/Loader.tsx';
import { Alert } from '../../Alert/Alert.tsx';
import Button from '../../Buttons/Button.tsx';
import Arrow from '../../Buttons/icons/Arrow.tsx';
import ReviewsGrid from '../../ReviewCard/ReviewsGrid.tsx';
import classNames from 'classnames';

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const reviews = await ApiService.getReviews();
        setReviews(reviews);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <section className={styles.reviews}>
      <div className={classNames('container', styles.reviews__container)}>
        <div className={styles.reviews__header}>
          <h2 className={styles.reviews__title}>what our users think</h2>
          <p className={classNames('subheader2', styles.reviews__subtitle)}>
            We are continuously striving to improve the experiences of our future guests.
            Below you can leave
            your
            own feedback, or simply view feedback from past clients.
          </p>
        </div>
        {isLoading && <Loader text="Loading reviews..." />}

        {error && (
          <Alert onClose={() => setError(null)} />
        )}

        {!isLoading && !error && (
          <>
            <ReviewsGrid reviews={reviews} />
            <div className={styles.button__feedback}>
              <Button text="LEAVE FEEDBACK" icon={<Arrow />} to="/contacts" />
            </div>
          </>
        )}
        <div className={classNames(styles.reviews__image, 'image-wrapper')}>
          <img src="/images/panda%20Background%202.png" alt="Bamboo panda" />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
