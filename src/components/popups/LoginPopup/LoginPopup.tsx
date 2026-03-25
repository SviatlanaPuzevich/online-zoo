import styles from './login.poup.module.css';
import Button from '../../Buttons/Button.tsx';
import ValidatedInput from '../../ValidatedInput/ValidatedInput.tsx';
import { validateLogin, validatePassword } from '../../../validators/inputValidator.ts';
import { useState } from 'react';
import { useFormValidation } from '../../../hooks/formValidationHook.ts';
import { ApiService } from '../../../services/service.ts';
import type { LoginForm } from '../../../types/types.ts';
import { usePopup } from '../../../hooks/popupHook.ts';
import { useAuth } from '../../../providers/AuthProvider.tsx';

const LoginPopup: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const { openPopup, closePopup } = usePopup();
    const { login } = useAuth();
    const {
      handleChange,
      isFormValid,
      getFormData,
    } = useFormValidation(
    );


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!isFormValid) return;

      const data = getFormData() as LoginForm;
      try {
        const { access_token, user } = await ApiService.login(data);
        login(user, access_token);
        closePopup();

      } catch (err) {
        setError('Incorrect login or password');
        console.error(err);
      }

    };


    return <div className={styles.login__screen}>
      <div className={styles.login__nav}>
        <Button text="Login" btnStyle="secondary" />
        <Button text="Registration" btnStyle="secondary" extraClass={styles['tab--inactive']}
                onClick={() => openPopup('REGISTRATION')} />
      </div>
      <div className={styles.login__content}>
        <form className={styles.form}>

          {error && <span className={styles.formError}>{error}</span>}

          <ValidatedInput validate={validateLogin} label="Login" required={true} id="login" placeHolder="Enter Your Login"
                          onValueChange={handleChange('login')} />
          <ValidatedInput validate={validatePassword} label="Password" required={true} id="password"
                          placeHolder="Enter Your Password"
                          type="password" onValueChange={handleChange('password')} />
          <Button text="Sign In" btnStyle="secondary" extraClass={styles.form__button} onClick={handleSubmit}
                  type="submit" disabled={!isFormValid} />
        </form>

      </div>
    </div>;
  }
;

export default LoginPopup;
