import Button from '../../Buttons/Button.tsx';
import Arrow from '../../Buttons/icons/Arrow.tsx';
import styles from './hero.section.module.css';
import classNames from 'classnames';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>
          <h2 className={classNames(styles.main__header, styles.hero__title)}>watch your favourite animal online</h2>
          <p className={styles.hero__text}>Explore the exciting and mysterious world of wild animals in a natural
            setting
            without leaving your home.</p>

          <Button text="View live cam" extraClass={'mobile-block'} to="/zoo/1" icon={<Arrow />} />
        </div>
        <div className={`image-wrapper ${styles.hero__image}`}>
        </div>
      </div>
    </section>);
}