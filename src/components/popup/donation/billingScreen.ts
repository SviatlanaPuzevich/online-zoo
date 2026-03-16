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
    private paymentController: PaymentController,
  ) {
    this.screen = this.render();
    this.setUp();
    this.init();
  }

  private render(): HTMLElement {
    const screen = document.createElement('div');
    screen.classList.add('popup__screen');
    screen.classList.add('popup__screen--active');
    screen.classList.add('donation__screen');

    screen.innerHTML = `
                <div class="donation__divider popup__text">
                    Donation information:
                </div>
                <div class="donation__content" id="billing-screen">
                    <p><span class="required">*</span> Choose your donation amount:
                    </p>
                    <div class="donation__buttons">
                        <button class="button button--secondary donation-item inactive" data-amount="10">$10</button>
                        <button class="button button--secondary donation-item inactive" data-amount="20">$20</button>
                        <button class="button button--secondary donation-item inactive" data-amount="30">$30</button>
                        <button class="button button--secondary donation-item inactive" data-amount="50">$50</button>
                        <button class="button button--secondary donation-item inactive" data-amount="80">$80</button>
                        <button class="button button--secondary donation-item inactive" data-amount="100">$100</button>
                    </div>
                    <div class="donation__other">
                        <button class="button button--secondary donation__buttons--big inactive" id="billing-amount-button"><span>other</span><span
                                class="mobile-invisible"> amount</span></button>
                        <div class="form-group form-group--error">
                        <label for="billing-amount-input"></label>
                            <input class="donation__input" type="text" id="billing-amount-input" disabled>
                      
                        <span class="form-error" id="billing-amount-error"></span>
                        </div>
                    </div>
                    <div class="donation__fav">
                        <button class="button button--secondary donation__buttons--big donation__amount-btn">
                            for
                            special pet
                        </button>
                        <div class="dropdown">
                            <button class="dropdown__trigger">
                                <span class="dropdown__value">Choose your favourite</span>
                                <span class="dropdown__arrow">
                            <svg width="17" height="10" viewBox="0 0 17 10">
                                <path d="M0.359375 0.359375L8.11695 8.35938L16.3594 0.359375"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"/>
                            </svg>
                                </span>
                            </button>

                            <div class="dropdown__menu">
                                <a href="#">Lukas the Panda</a>
                                <a href="#">Andy the Lemur</a>
                                <a href="#">Glen the Gorilla</a>
                                <a href="#">Mike the Alligator</a>
                                <a href="#">Sam &amp; Lora the Eagles</a>
                                <a href="#">Liz the Koala</a>
                                <a href="#">Shake the Lion</a>
                                <a href="#">Senja the Tiger</a>
                            </div>
                        </div>
                    </div>

                    <div class="donation__monthly"><label class="custom-checkbox">
                        <span class="checkbox-text">Make this a monthly recurring gift</span>
                        <input type="checkbox">
                        <span class="checkbox-box"></span>
                    </label>
                    </div>
                    <div class="donation__nav">

                        <button class="button button--secondary next_popup_screen" id="billing-next">Next
                            <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                      fill="currentColor"/>
                            </svg>
                        </button>

                        <div class="circle__container">
                            <div class="circle circle--active"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
    `;
    return screen;
  }

  private setValuesFromState() {
    const { amount } = this.paymentController.getState();


    this.fixedAmountButtons.forEach((btn) => {
      const value = Number(btn.dataset.amount);
      btn.classList.toggle('inactive', value !== amount);
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
    this.amountError = this.screen.querySelector(
      '#billing-amount-error',
    ) as HTMLSpanElement;

    this.amountButton = this.screen.querySelector(
      '#billing-amount-button',
    ) as HTMLButtonElement;

    this.nextButton = this.screen.querySelector(
      '#billing-next',
    ) as HTMLButtonElement;
  }

  private init() {

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
    this.setValuesFromState();
  }
}
