import { PopupContent } from '../../../types/types';
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
} from '../../../utils/validator';

export class RegistrationScreen implements PopupContent {
  private screen: HTMLElement;

  private loginInput: HTMLInputElement;
  private nameInput: HTMLInputElement;
  private emailInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private confirmInput: HTMLInputElement;

  private nameError: HTMLElement;
  private loginError: HTMLElement;
  private emailError: HTMLSpanElement;
  private passwordError: HTMLElement;
  private confirmError: HTMLSpanElement;

  private form: HTMLFormElement;
  private submitButton: HTMLButtonElement;
  private formSpan: HTMLSpanElement;

  constructor() {
    this.screen = this.render();
    this.setUp();
    this.init();
  }

  private setUp() {
    this.loginInput = this.screen.querySelector(
      '#reg-login',
    ) as HTMLInputElement;
    this.loginError = this.screen.querySelector(
      '#reg-login-error',
    ) as HTMLSpanElement;

    this.nameInput = this.screen.querySelector('#reg-name') as HTMLInputElement;
    this.nameError = this.screen.querySelector(
      '#reg-name-error',
    ) as HTMLSpanElement;

    this.emailInput = this.screen.querySelector(
      '#reg-email',
    ) as HTMLInputElement;
    this.emailError = this.screen.querySelector(
      '#reg-email-error',
    ) as HTMLSpanElement;

    this.passwordInput = this.screen.querySelector(
      '#reg-password',
    ) as HTMLInputElement;
    this.passwordError = this.screen.querySelector(
      '#reg-password-error',
    ) as HTMLSpanElement;

    this.confirmInput = this.screen.querySelector(
      '#confirm-password',
    ) as HTMLInputElement;
    this.confirmError = this.screen.querySelector(
      '#confirm-password-error',
    ) as HTMLSpanElement;

    this.submitButton = this.screen.querySelector(
      '#reg-submit',
    ) as HTMLButtonElement;

    this.form = this.screen.querySelector('form') as HTMLFormElement;

    this.formSpan = this.screen.querySelector(
      '#registration-error',
    ) as HTMLSpanElement;
  }

  render(): HTMLElement {
    const screen = document.createElement('div');
    screen.classList.add('popup__screen');
    screen.classList.add('login-group__screen');

    screen.innerHTML = `

                <div class="login__nav">
                        <button class="button  prev_popup_screen tab--inactive">Login
                        </button>

                        <button class="button button--secondary prev_popup_screen">Registration</button>

                    </div>
                <div class="login__content">
                    <form class="popup-payment__form" id="reg-form">
                    <span class="form-error" id="registration-error"></span>
                    
                        <div class="form-group form-group--error">
                            <label for="name">
                                <span class="required">*</span> Login
                            </label>

                            <input class="form-group__input" type="text" id="reg-login" name="login" placeholder="Enter your login"
                                   required>

                            <span class="form-error" id="reg-login-error"></span>
                        </div>
                        
                        <div class="form-group form-group--error">
                            <label for="name">
                                <span class="required">*</span> Name
                            </label>

                            <input class="form-group__input" type="text" id="reg-name" name="name" placeholder="Enter your name"
                                   required>

                            <span class="form-error" id="reg-name-error"></span>
                        </div>
                        
                        <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span> Email
                            </label>

                            <input class="form-group__input" type="email" id="reg-email" name="email" placeholder="Enter email"
                                   required>

                            <span class="form-error" id="reg-email-error"></span>
                        </div>

                        <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span> Password
                            </label>
                            <input class="form-group__input" type="password" id="reg-password" name="password" placeholder="Enter Password"
                                   required>

                            <span class="form-error" id="reg-password-error"></span>
                        </div>
                        
                         <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span>Confirm Password
                            </label>
                            <input class="form-group__input" type="password" id="confirm-password" placeholder="Confirm Password"
                                   required>

                            <span class="form-error" id="confirm-password-error"></span>

                        </div>
                        
                        <button type="submit" class="button--secondary button form__button" id="reg-submit" disabled>
                            SEND
                            <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                      fill="currentColor"/>
                            </svg>
                        </button>
                    </form>
                    
                </div>

    `;
    return screen;
  }

  private init() {
    this.bindValidation(this.loginInput, this.loginError, validateLogin);
    this.bindValidation(this.nameInput, this.nameError, validateName);
    this.bindValidation(this.emailInput, this.emailError, validateEmail);
    this.bindValidation(
      this.passwordInput,
      this.passwordError,
      validatePassword,
    );

    this.bindValidation(
      this.confirmInput,
      this.confirmError,
      this.validateConfirmPassword,
    );

    this.form.addEventListener('input', () => {
      this.onFormInput();
    });

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.submitForm();
    });
  }

  private bindValidation(
    input: HTMLInputElement,
    error: HTMLElement,
    validator: (value: string) => string | null,
  ) {
    input.addEventListener('blur', () =>
      this.validateInput(input, error, validator),
    );

    input.addEventListener('focus', () =>
      this.clearNotValidData(input, error, validator),
    );
  }

  validateConfirmPassword(confirmPassword: string): string | null {
    if (!confirmPassword) {
      return 'Please confirm password';
    }

    if (this.passwordInput.value !== confirmPassword) {
      return `Password doesn't match`;
    }

    return null;
  }

  private validateInput(
    input: HTMLInputElement,
    errorSpan: HTMLElement,
    fnValidate: (arg0: string) => string | null,
  ) {
    const text = fnValidate(input.value);
    if (text) {
      errorSpan.classList.remove('hidden');
      errorSpan.textContent = text;
    } else {
      errorSpan.classList.add('hidden');
      errorSpan.textContent = '';
    }
  }

  private clearNotValidData(
    input: HTMLInputElement,
    errorSpan: HTMLSpanElement,
    validateFn: (arg0: string) => string | null,
  ) {
    const data = input.value;
    if (validateFn(data)) {
      input.value = '';
      errorSpan.classList.add('hidden');
    }
  }

  private onFormInput() {
    const loginValue = this.loginInput.value;
    const nameValue = this.nameInput.value;
    const emailValue = this.emailInput.value;
    const passwordValue = this.passwordInput.value;
    const confirmValue = this.confirmInput.value;

    this.formSpan.classList.add('hidden');
    this.formSpan.textContent = '';

    if (
      !validateLogin(loginValue) &&
      !validateName(nameValue) &&
      !validatePassword(passwordValue) &&
      !validateEmail(emailValue) &&
      !this.validateConfirmPassword(confirmValue)
    ) {
      this.submitButton.removeAttribute('disabled');
    } else {
      this.submitButton.setAttribute('disabled', '');
    }
  }

  private async submitForm() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    this.submitButton.setAttribute('disabled', '');

    try {
      const response = await fetch(
        'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        const data = await response.json();

        const { access_token, user } = data.data;

        localStorage.setItem('token', access_token);
        localStorage.setItem('user', JSON.stringify(user));

        window.location.assign('index.html');
      } else {
        const data = await response.json();
        this.formSpan.textContent = data.error;
        this.formSpan.classList.remove('hidden');
        this.submitButton.removeAttribute('disabled');
        console.error('Server error:', response.status);
      }
    } catch (error) {
      this.formSpan.textContent = 'Something went wrong. Try again';
      this.formSpan.classList.remove('hidden');
      console.error('x3:', error);
    }
  }

  private resetForm() {
    this.form.reset();

    const errors = this.screen.querySelectorAll('.form-error');

    errors.forEach((el) => {
      el.textContent = '';
      el.classList.add('hidden');
    });

    this.submitButton.setAttribute('disabled', '');
  }

  getScreen() {
    return this.screen;
  }

  onOpen() {
    this.resetForm();
  }
}
