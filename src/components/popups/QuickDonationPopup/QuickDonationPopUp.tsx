import styles from './quick.donation.popup.module.css'
import { createPortal } from 'react-dom';
import Button from '../../Buttons/Button.tsx';
import { CONSTANT } from '../../../const/const.ts';

const QuickDonationPopup: React.FC = () => {
  const mountNode = document.getElementById('popup-root');

  if (!mountNode) return null;

  return createPortal(
    <div className={styles.popup} id={CONSTANT.POPUP_ID.quickDonationPopupId} popover='auto'>
      <div className={styles.popup__content}>
        <div className={styles.popup__header}>
          <button className={styles.popup__close} popoverTarget={CONSTANT.POPUP_ID.quickDonationPopupId} popoverTargetAction="hide">
            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.2261 14.4991L0 27.4026L1.63183 28.9946L14.8579 16.0911L28.0879 28.9984L29.7197 27.4064L16.4897 14.4991L29.7195 1.59203L28.0876 0L14.8579 12.907L1.63211 0.00380707L0.000274658 1.59584L13.2261 14.4991Z"
                    fill="white" />
            </svg>
          </button>
        </div>

        <div className={styles.popup__body}>
          <div>
            <h3 className={styles.popup__title}>Together we care, save and protect!</h3>
            <p className={styles.popup__text}>Your most generous gift not only cares for countless animals, but it also offers
              hope and a vital
              lifeline to the world’s most endangered wildlife relying on us to survive.</p>

          </div>
          <div className="container">
            <div className={styles.popup__buttons}>
              <Button text='$20' btnStyle='secondary'/>
              <Button text='$30' btnStyle='secondary'/>
              <Button text='$50' btnStyle='secondary'/>
              <Button text='$80' btnStyle='secondary'/>
              <Button text='$100' btnStyle='secondary'/>
              <Button text='Other' btnStyle='secondary'/>
            </div>
          </div>
        </div>
      </div>
    </div>,
  mountNode,
)
  ;
};

export default QuickDonationPopup;