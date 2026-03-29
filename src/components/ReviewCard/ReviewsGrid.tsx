import type { Review } from '../../types/types.ts';
import styles from './review.card.module.css';
import ReviewCard from './ReviewCard.tsx';

interface ReviewsGridProps {
  reviews: Review[];
}

const ReviewsGrid: React.FC<ReviewsGridProps> = ({ reviews }) => {
  return (
    <div className={styles.cardGrid}>
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </div>
  );
};

export default ReviewsGrid;