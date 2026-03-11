import { PopupContent } from '../../types/types';

export class LoginScreen implements PopupContent {
  private screen: HTMLElement;
  private loginInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private loginError: HTMLElement;
  private passwordError: HTMLElement;
  private form: HTMLFormElement;
  private submitButton: HTMLButtonElement;
  private formSpan: HTMLElement;

  constructor() {
    this.screen = this.render();
    this.setUp();
    this.init();
  }

  private render(): HTMLElement {
    const screen = document.createElement('div');
    screen.classList.add('popup__screen');
    screen.classList.add('popup__screen--active');
    screen.classList.add('login-group__screen');

    screen.innerHTML = `

                <div class="login__nav">
                        <button class="button button--secondary">Login         
                        </button>
                        <button class="button button--secondary next_popup_screen tab--inactive">Registration</button>
                    </div>
                <div class="login__content">
                    <form class="popup-payment__form" >
                    <span class="form-error hidden" id="form-span">Incorrect login or password</span>
                        <div class="form-group form-group--error">
                            <label for="name">
                                <span class="required">*</span>Login
                            </label>

                            <input class="form-group__input" type="text" id="login" name="login" placeholder="Enter your login"
                                   required>

                            <span class="form-error hidden" id="login-error"></span>
                        </div>

                        <div class="form-group form-group--error">
                            <label for="email">
                                <span class="required">*</span> Password
                            </label>
                            <input class="form-group__input" type="password" id="password" name="password" placeholder="Enter Password"
                                   required>

                            <span class="form-error hidden" id="password-error"></span>
                        </div>
                        
                        <button type="submit" class="button--secondary button form__button" id="login-submit">
                            Sign In
                        </button>
                    </form>
                   
                </div>
    `;
    return screen;
  }

  private setUp() {
    this.loginInput = this.screen.querySelector('#login') as HTMLInputElement;
    this.loginError = this.screen.querySelector(
      '#login-error',
    ) as HTMLSpanElement;

    this.passwordInput = this.screen.querySelector(
      '#password',
    ) as HTMLInputElement;
    this.passwordError = this.screen.querySelector(
      '#password-error',
    ) as HTMLSpanElement;

    this.submitButton = this.screen.querySelector(
      '#login-submit',
    ) as HTMLButtonElement;

    this.form = this.screen.querySelector('form') as HTMLFormElement;

    this.formSpan = this.screen.querySelector('#form-span') as HTMLSpanElement;
  }

  private init() {
    this.bindValidation(this.loginInput, this.loginError, this.validateLogin);
    this.bindValidation(
      this.passwordInput,
      this.passwordError,
      this.validatePassword,
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


  private validatePassword(password: string): string | null {
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!password) {
      return 'Password is required';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    if (!regex.test(password)) {
      return 'Password must contain at least 1 special character';
    }

    return null;
  }

  private validateLogin(login: string): string | null {
    const regex = /^[A-Za-z0-9]+$/;

    const regex2 = /^[a-zA-Z]/;

    if (!login) {
      return 'Login is required';
    }

    if (!regex.test(login)) {
      return 'Login must contain only latin letters and numbers';
    }

    if (!regex2.test(login)) {
      return 'Login must starts with latin letter';
    }

    if (login.length < 3) {
      return 'Login must be at least 3 characters';
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
    const passwordValue = this.passwordInput.value;

    this.formSpan.classList.add('hidden');

    if (
      !this.validateLogin(loginValue) &&
      !this.validatePassword(passwordValue)
    ) {
      this.submitButton.removeAttribute('disabled');
    } else {
      this.submitButton.setAttribute('disabled', '');
    }
  }

  private async submitForm() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        'https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login',
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
        console.log(data);

        const { access_token, user } = data.data;
        localStorage.setItem('token', access_token);
        localStorage.setItem('user', JSON.stringify(user));

        window.location.assign('index.html');
      } else {
        this.formSpan.classList.remove('hidden');
        console.error('Server error:', response.status);
      }
    } catch (error) {
      this.formSpan.classList.remove('hidden');
      console.error('x3:', error);
    }
  }

  private resetForm() {
    this.form.reset();

    this.loginError.textContent = '';
    this.passwordError.textContent = '';

    this.loginError.classList.add('hidden');
    this.passwordError.classList.add('hidden');
    this.formSpan.classList.add('hidden');

    this.submitButton.setAttribute('disabled', '');
  }

  getScreen() {
    return this.screen;
  }

  onOpen() {
    this.resetForm();
  }
}
