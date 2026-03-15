import { PopupContent } from '../../../types/types';
import { validateAmount } from '../../../utils/validator';
import { PaymentController } from '../../../controllers/paymentController';

const fixedDonation = new Set<number>([10, 20, 30, 40, 50, 80, 100]);

export class BillingScreen implements PopupContent {
  private screen: HTMLElement;
  private amountInput: HTMLInputElement;
  private amountError: HTMLElement;
  private amountButton: HTMLButtonElement;
  private fixedAmountButtons: HTMLButtonElement[];

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
    const { amount } = this.paymentController.getState();
    this.fixedAmountButtons.forEach((btn) => {
      const value = Number(btn.dataset.amount);
      btn.classList.toggle('inactive', value === amount);
    });

    if (fixedDonation.has(amount)) {
      this.amountButton.classList.add('inactive');
      this.amountInput.value = '';
      this.amountInput.disabled = true;
    } else {
      this.amountButton.classList.remove('inactive');
      this.amountInput.value = String(amount);
      this.amountInput.disabled = false;
    }
  }

  private setUp() {
    this.fixedAmountButtons = Array.from(
      this.screen.querySelectorAll<HTMLButtonElement>('[data-amount]'),
    );

    this.amountInput = this.screen.querySelector(
      '#billing-amount-input',
    ) as HTMLInputElement;
    this.amountButton = this.screen.querySelector(
      '#billing-amount-button',
    ) as HTMLButtonElement;
    this.amountError = this.screen.querySelector(
      '#billing-amount-error',
    ) as HTMLSpanElement;

    this.nextButton = this.screen.querySelector(
      '#billing-next',
    ) as HTMLButtonElement;
  }

  private init() {
    this.setValuesFromState();

    this.amountInput.addEventListener('blur', () => {
      const text = validateAmount(this.amountInput.value);
      if (text) {
        this.amountError.classList.remove('hidden');
        this.amountError.textContent = text;
      } else {
        this.amountError.classList.add('hidden');
        this.amountError.textContent = '';
      }
    });

    this.amountInput.addEventListener('focus', () => {
      const data = this.amountInput.value;
      if (validateAmount(data)) {
        this.amountInput.value = '';
        this.amountError.classList.add('hidden');
      }
    });

    this.fixedAmountButtons.forEach((btn) => {
      btn.addEventListener('click', () => this.handleFixedClick(btn));
    });

    this.amountButton.addEventListener('click', () => this.handleCustomClick());

    this.amountInput.addEventListener('input', () => this.handleInput());

    this.nextButton.addEventListener('click', () => this.updateState());
  }

  private handleFixedClick(button: HTMLButtonElement) {
    const value = Number(button.dataset.amount);

    this.fixedAmountButtons.forEach((btn) => {
      btn.classList.add('inactive');
    });

    button.classList.remove('inactive');

    this.amountButton.classList.add('inactive');
    this.amountInput.disabled = true;
    this.amountInput.value = '';

    this.paymentController.update({ amount: value });

    this.updateNextState();
  }

  private handleCustomClick() {
    this.fixedAmountButtons.forEach((btn) => {
      btn.classList.add('inactive');
    });

    this.amountButton.classList.remove('inactive');

    this.amountInput.disabled = false;
    this.amountInput.focus();

    this.updateNextState();
  }

  private handleInput() {
    const value = this.amountInput.value;

    const error = validateAmount(value);

    if (error) {
      this.amountError.textContent = error;
      this.amountError.classList.remove('hidden');
    } else {
      this.amountError.textContent = '';
      this.amountError.classList.add('hidden');
    }

    this.updateNextState();
  }

  private updateNextState() {
    const activeFixed = this.fixedAmountButtons.find(
      (btn) => !btn.classList.contains('inactive'),
    );

    const customActive = !this.amountButton.classList.contains('inactive');

    if (activeFixed) {
      this.nextButton.disabled = false;
      return;
    }

    if (customActive && !validateAmount(this.amountInput.value)) {
      this.nextButton.disabled = false;
      return;
    }

    this.nextButton.disabled = true;
  }

  private updateState() {
    const activeFixed = this.fixedAmountButtons.find(
      (btn) => !btn.classList.contains('inactive'),
    );

    let amount: number | null = null;

    if (activeFixed) {
      amount = Number(activeFixed.dataset.amount);
    } else if (!validateAmount(this.amountInput.value)) {
      amount = Number(this.amountInput.value);
    }

    if (amount) {
      this.paymentController.update({ amount });
    }
  }

  private resetForm() {
    this.amountInput.value = '';
    this.amountError.textContent = '';

    this.amountInput.disabled = true;

    this.fixedAmountButtons.forEach((btn) => {
      btn.classList.add('inactive');
    });

    this.amountButton.classList.add('inactive');

    this.nextButton.disabled = true;
  }

  getScreen() {
    return this.screen;
  }

  onOpen() {
    this.resetForm();
  }
}
