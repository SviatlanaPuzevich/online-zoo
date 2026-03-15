import { PopupContent } from '../../../types/types';
import { validateEmail, validateName } from '../../../utils/validator';
import { PaymentController } from '../../../controllers/paymentController';

export class InfoScreen implements PopupContent {
  private screen: HTMLElement;
  private nameInput: HTMLInputElement;
  private emailInput: HTMLInputElement;
  private nameError: HTMLElement;
  private emailError: HTMLElement;

  private backButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;

  constructor(
    selector: string,
    private paymentController: PaymentController,
  ) {
    this.screen = document.querySelector(selector) as HTMLElement;
    this.setUp();
    this.init();
  }

  private setValuesFromState() {
    const state = this.paymentController.getState();
    this.nameInput.value = state.name;
    this.emailInput.value = state.email;
  }

  private setUp() {
    this.nameInput = this.screen.querySelector('#info-name-input') as HTMLInputElement;
    this.nameError = this.screen.querySelector(
      '#info-name-error',
    ) as HTMLSpanElement;

    this.emailInput = this.screen.querySelector(
      '#info-email-input',
    ) as HTMLInputElement;
    this.emailError = this.screen.querySelector(
      '#info-email-error',
    ) as HTMLSpanElement;

    this.backButton = this.screen.querySelector(
      '#info-back',
    ) as HTMLButtonElement;

    this.nextButton = this.screen.querySelector(
      '#info-next',
    ) as HTMLButtonElement;
  }

  private init() {
    this.setValuesFromState();

    this.bindValidation(this.nameInput, this.nameError, validateName);
    this.bindValidation(this.emailInput, this.emailError, validateEmail);
    this.nameInput.addEventListener('input', () => {
      this.inputHandle();
    });
    this.emailInput.addEventListener('input', () => {
      this.inputHandle();
    });

    this.backButton.addEventListener('click', () => this.updateState());
    this.nextButton.addEventListener('click', () => this.updateState());
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

  private updateState() {
    this.paymentController.update({
      name: this.nameInput.value,
      email: this.emailInput.value,
    });
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

  private inputHandle() {
    const nameValue = this.nameInput.value;
    const emailValue = this.emailInput.value;

    this.nextButton.disabled =
      !validateName(nameValue) && !validateEmail(emailValue);
  }

  private resetForm() {
    this.emailInput.textContent = '';
    this.nameInput.textContent = '';

    this.emailError.classList.add('hidden');
    this.nameError.classList.add('hidden');

    this.nextButton.disabled = true;
  }

  getScreen() {
    return this.screen;
  }

  onOpen() {
    this.resetForm();
  }
}
