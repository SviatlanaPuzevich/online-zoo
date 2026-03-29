import styles from './circles.module.css';
import classNames from 'classnames';

interface Props {
  total: number;
  active: number;
}

const Circles: React.FC<Props> = ({ total, active }) => {
  return (
    <div className={styles.circle__container}>
      {Array(total).fill(null).map((_, index) => (
        <div
          key={index}
          className={classNames('circle', {
            'circle--active': index === active,
          })}
        ></div>
      ))}
    </div>
  );
};

export default Circles;