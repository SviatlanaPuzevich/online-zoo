import styles from './info.section.module.css';
import classNames from 'classnames';
import InfoText from './InfoText.tsx';
import welcomeZooImg from '../../../assets/images/welcomeZoo.png';
import welcomeEaglesImg from '../../../assets/images/welcomeEagles.png';

export default function InfoSection() {
  return (<section className={styles.info}>
    <div className="container info__container">
      <div className={classNames(styles.info__item, styles['info__item--reverse-large'])}>
        <div className={classNames('image-wrapper', styles['info__image-wrapper'])}>
          <img src={welcomeZooImg} alt="Welcome to Zoo" />
        </div>
        <InfoText title="Welcome to the Online Zoo!" text={`On our website, using live webcams, fans of all ages can observe various animals. Among them,
            are Giant
            pandas, eagles, alligators, forest gorillas, African lions, and others. It is the whole natural
            world in
            real-time in front of our cameras. We hope you will enjoy watching closely and explore animals’
            behavior
            and habitats! Note: animals are not always on view on cameras, so please check back if you don't
                  see
                  anything.`} />

      </div>
      <div className={classNames(styles.info__item, styles['info__item--reverse'])}>
        <div className={classNames('image-wrapper', styles['info__image-wrapper'])}>
          <img className="" src={welcomeEaglesImg} alt="Eagles" />
        </div>
        <InfoText title="How we work" text={`Online Zoo is a nonprofit committed to inspiring awareness and preservation of nature and wild
            animals
            in our zoo and worldwide. Every day, our experts work to safeguard the health and wellness of
            the
            animals. To continue these efforts, we need your help. We're so grateful to our numerous
            supporters. All
            donations, large and small, go a long way to the conservation efforts of our pets.`} />
      </div>
    </div>
  </section>);
}