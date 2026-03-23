import styles from './login.poup.module.css'
import Button from '../../Buttons/Button.tsx';

const LoginPopup = (props: any) => {
  return <div>
    <div className={styles.login__nav}>
      <Button text="Login" btnStyle="secondary" />
      <button className="button button--secondary next_popup_screen tab--inactive">Registration</button>
    </div>
    <div className="login__content">
      <form className="popup-payment__form">
        <span className="form-error hidden" id="form-span">Incorrect login or password</span>
        <div className="form-group form-group--error">
          <label htmlFor="name">
            <span className="required">*</span>Login
          </label>

          <input className="form-group__input" type="text" id="login" name="login" placeholder="Enter your login"
                 required />

          <span className="form-error hidden" id="login-error"></span>
        </div>

        <div className="form-group form-group--error">
          <label htmlFor="email">
            <span className="required">*</span> Password
          </label>
          <input className="form-group__input" type="password" id="password" name="password"
                 placeholder="Enter Password"
                 required />

          <span className="form-error hidden" id="password-error"></span>
        </div>

        <button type="submit" className="button--secondary button form__button" id="login-submit">
          Sign In
        </button>
      </form>

    </div>
  </div>
}

export default LoginPopup