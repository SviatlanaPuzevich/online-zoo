import styles from './animal.feeding.module.css';
import Button from '../../Buttons/Button.tsx';
import Arrow from '../../Buttons/icons/Arrow.tsx';
import AnimalFeedCardsGrid from '../../AnimalFeedCards/AnimalFeedCardsGrid.tsx';
import { CONSTANT } from '../../../const/const.ts';
import { usePopup } from '../../../hooks/popupHook.ts';

const AnimalFeeding = () => {
  const { openPopup } = usePopup();

  return (
    <section className={styles.feeding}>
      <div className="container">
        <h2>care for the animals you love</h2>
        <p className="subheader2">You can help to look after the animals you love with your gift today
        </p>
        <AnimalFeedCardsGrid />
        <Button text="Choose Your Favourite" btnStyle="dark" icon={<Arrow />} extraClass="mobile-block"
                popoverTarget={CONSTANT.POPUP_ID.basicPopupId} onClick={() =>  openPopup('DONATION_BILLING_INFO')} />
      </div>
    </section>
  );
};

export default AnimalFeeding;