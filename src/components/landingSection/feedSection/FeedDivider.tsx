import styles from './feed.divider.module.css';
import classNames from 'classnames';

interface FeedDividerProps {
  title: number | string;
}

const FeedDivider: React.FC<FeedDividerProps> = ({ title }) => {
  return (
    <div className={styles.divider}>
      <span className={classNames(styles.divider__number, 'subheader')}>{title}</span>
      <span className={styles.divider__line}></span>
    </div>
  );
};

export default FeedDivider;