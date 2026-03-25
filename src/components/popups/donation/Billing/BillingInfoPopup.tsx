import styles from './billing.info.popup.module.css';
import Button from '../../../Buttons/Button.tsx';
import classNames from 'classnames';
import DropDown from '../../../DropDown/DropDown.tsx';
import { ANIMAL_OPTIONS } from '../../../../data/data.ts';
import CheckBox from '../../../CheckBox/CheckBox.tsx';
import Arrow from '../../../Buttons/icons/Arrow.tsx';
import Circles from '../Cirles/Circles.tsx';
import ValidatedInput from '../../../ValidatedInput/ValidatedInput.tsx';
import { validateAmount } from '../../../../validators/inputValidator.ts';

const BillingInfoPopup: React.FunctionComponent = () => {
  return <div className={styles.donation__popup}>
    <div className={styles.donation__divider}>
      Donation information:
    </div>
    <div className={styles.donation__content}>
      <p><span className={styles.required}>*</span> Choose your donation amount:
      </p>
      <div className={styles.donation__buttons}>
        <Button text="$20" btnStyle="secondary" extraClass={classNames(styles.inactive, styles['donation-item'])} />
        <Button text="$30" btnStyle="secondary" extraClass={classNames(styles.inactive, styles['donation-item'])} />
        <Button text="$50" btnStyle="secondary" extraClass={classNames(styles.inactive, styles['donation-item'])} />
        <Button text="$80" btnStyle="secondary" extraClass={classNames(styles.inactive, styles['donation-item'])} />
        <Button text="$100" btnStyle="secondary" extraClass={classNames(styles.inactive, styles['donation-item'])} />
      </div>
      <div className={styles.donation__other}>
        <Button text="other" btnStyle="secondary" extraClass={classNames(styles.inactive, styles['donation-item'])} />
        <ValidatedInput validate={validateAmount} id="other" onValueChange={() => {
        }} />
      </div>
      <div className={styles.donation__fav}>
        <Button text="for special pet" btnStyle="secondary"
                extraClass={classNames(styles['donation__buttons--big'], styles['donation__amount-btn'])} />
        <DropDown name="petId" valueName="petName" items={ANIMAL_OPTIONS} />
      </div>

      <div className={styles.donation__monthly}>
        <CheckBox name="monthly" text="Make this a monthly recurring gift" />
      </div>
      <div className={styles.donation__nav}>
        <Button text="Next" btnStyle="secondary" extraClass={styles.next_popup_screen} icon={<Arrow />}
                disabled={true} />

        <Circles total={3} active={0} />

      </div>
    </div>
  </div>;
};

export default BillingInfoPopup;