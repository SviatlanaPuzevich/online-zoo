import styles from './quick.dobation.section.module.css';
import classNames from 'classnames';
import DonationButton from '../Buttons/donationButton/DonationButton.tsx';


interface QuickDonationProps {
  title: string;
  text: string;
}

export default function QuickDonationSection({ title, text }: QuickDonationProps) {
  return (
    <section className={styles.donation}>
      <div className="container ">
        <div className={styles.donation__container}>
          <div className={styles.donation__info}>
            <h3 className={styles.donation__title}>{title}</h3>
            <p className={styles.donation__text}>{text}</p>
          </div>
          <div className={styles.donation__empty}></div>
          <div className={styles.donation__quick}>
            <p className={classNames(styles.donation__rightTitle, 'subheader')}>Quick Donate</p>
            <DonationButton />
          </div>
        </div>
      </div>
    </section>);
}