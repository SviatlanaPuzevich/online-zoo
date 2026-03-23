import styles from './quick.dobation.section.module.css';
import classNames from 'classnames';
import DonationButton from '../Buttons/donationButton/DonationButton.tsx';
import { CONSTANT } from '../../const/const.ts';
import { usePopup } from '../../hooks/popupHook.ts';


interface QuickDonationProps {
  title: string;
  text: string;
}

export default function QuickDonationSection({ title, text }: QuickDonationProps) {
  const { openPopup } = usePopup();
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
            <DonationButton popoverTarget={CONSTANT.POPUP_ID.basicPopupId} onClick={() => {
              openPopup('DONATION_BILLING_INFO');
            }} />
          </div>
        </div>
      </div>
    </section>);
}