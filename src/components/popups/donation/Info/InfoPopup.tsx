import styles from '../Billing/billing.info.popup.module.css';
import ValidatedInput from '../../../ValidatedInput/ValidatedInput.tsx';
import { validateName } from '../../../../validators/inputValidator.ts';
import { useAuth } from '../../../../providers/AuthProvider.tsx';
import { useFormValidation } from '../../../../hooks/formValidationHook.ts';
import Circles from '../Cirles/Circles.tsx';
import Arrow from '../../../Buttons/icons/Arrow.tsx';
import Button from '../../../Buttons/Button.tsx';

const InfoPopup: React.FC = () => {
  const { user } = useAuth();

  const initState = {
    name: {
      value: user.name || '',
      isValid: !!user.name,
    },
    email: {
      value: user.email || '',
      isValid: !!user.email,
    },
  };

  const {
    handleChange,
    isFormValid,
  } = useFormValidation(initState);


  return (
    <div>
      <div className={styles.donation__divider}>
        Billing information:
      </div>
      <div className={styles.donation__content}>
        <div className="billing-info">
          <div className="popup-payment__data">
            <ValidatedInput required label="Your Name" placeHolder="Enter your name"
                            validate={validateName} onValueChange={handleChange('name')} id={'name'} />
            <ValidatedInput required label="Your Email Address" placeHolder="Enter Email Address" id={'email'}
                            validate={validateName} onValueChange={handleChange('email')} />
          </div>


          <p>You will receive emails from the Online Zoo, including updates and news on the latest
            discoveries
            and
            translations. You can unsubscribe at any time.</p>

          <div className={styles.donation__nav}>
            <Button text="Next" btnStyle="secondary" extraClass={styles.next_popup_screen} icon={<Arrow />}
                    disabled={isFormValid} />

            <a className="popup-payment__back prev_popup_screen">Back</a>

            <Circles total={3} active={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;