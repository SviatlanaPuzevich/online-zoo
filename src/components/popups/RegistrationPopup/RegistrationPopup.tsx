import styles from './registartion.poopup.module.css';
import Button from '../../Buttons/Button.tsx';
import ValidatedInput from '../../ValidatedInput/ValidatedInput.tsx';
import {
  validateConfirmation,
  validateEmail,
  validateLogin,
  validatePassword,
} from '../../../validators/inputValidator.ts';
import { useState } from 'react';
import { useFormValidation } from '../../../hooks/formValidationHook.ts';
import { ApiService } from '../../../services/service.ts';
import type { RegisterForm } from '../../../types/types.ts';
import { usePopup } from '../../../hooks/popupHook.ts';
import Arrow from '../../Buttons/icons/Arrow.tsx';
import { useAuth } from '../../../providers/AuthProvider.tsx';

const RegistrationPopup: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const { openPopup, closePopup } = usePopup();
  const {
    formState,
    handleChange,
    isFormValid,
    getFormData,
  } = useFormValidation();
  const { login } = useAuth();


  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    const data = getFormData();

    const { confirmPassword, ...payload } = data;
    try {
      const { access_token, user } = await ApiService.register(payload as RegisterForm);
      login(user, access_token);
      closePopup();

    } catch (err) {
      setError('Incorrect login or password');
      console.error(err);
    }

  };


  return <div className={styles.login__screen}>
    <div className={styles.login__nav}>
      <Button text="Login" btnStyle="secondary" extraClass={styles['tab--inactive']}
              onClick={() => openPopup('LOGIN')} />
      <Button text="Registration" btnStyle="secondary" />
    </div>
    <div className={styles.login__content}>
      <form className={styles.form}>

        {error && <span className={styles.formError}>{error}</span>}

        <ValidatedInput validate={validateLogin} label="Login" required={true} id="login" placeHolder="Enter Your Login"
                        onValueChange={handleChange('login')} type="text" />
        <ValidatedInput validate={validateLogin} label="Name" required={true} id="name" placeHolder="Enter Your Name"
                        onValueChange={handleChange('name')} type="text" />
        <ValidatedInput validate={validateEmail} label="Email" required={true} id="email" placeHolder="Enter Your Email"
                        onValueChange={handleChange('email')} type="email" />
        <ValidatedInput validate={validatePassword} label="Password" required={true} id="password"
                        placeHolder="Enter Your Password"
                        type="password" onValueChange={handleChange('password')} />
        <ValidatedInput validate={validateConfirmation(formState.password?.value || '')} label="Confirm Password"
                        required={true} id="confirmPassword"
                        placeHolder="Confirm Your Password"
                        type="password" onValueChange={handleChange('confirmPassword')} />
        <Button text="Send" btnStyle="secondary" extraClass={styles.form__button} onClick={handleSubmit}
                icon={<Arrow />}
                type="submit" disabled={!isFormValid} />
      </form>

    </div>
  </div>;
};

export default RegistrationPopup;