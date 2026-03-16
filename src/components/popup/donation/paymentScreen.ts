import { PopupContent } from '../../../types/types';
import {
  bindInputValidation,
  validateCardNumber,
  validateCVV,
} from '../../../utils/validator';
import { PaymentController } from '../../../controllers/paymentController';

export class PaymentScreen implements PopupContent {
  private screen: HTMLElement;

  private creditCardInput: HTMLInputElement;
  private creditCardError: HTMLElement;

  private cvvInput: HTMLInputElement;
  private cvvError: HTMLElement;

  private saveCardCheckbox!: HTMLInputElement;

  private completeButton: HTMLButtonElement;
  private backButton: HTMLButtonElement;

  constructor(private paymentController: PaymentController) {
    this.screen = this.render();
    this.setUp();
    this.init();
  }

  private render(): HTMLElement {
    const screen = document.createElement('div');
    screen.classList.add('popup__screen');
    screen.classList.add('donation__screen');

    screen.innerHTML = `
                <div class="donation__divider popup__text">
                    Payment Information:
                </div>
                <div class="donation__content">
                    <div class="popup-payment__data">

                        <div class="form-group__credit">
                            <div class="form-group form-group--error">
                                <label for="payment-credit-card">
                                    <span class="required">*</span> Credit Card Number
                                </label>

                                <input class="form-group__input" type="number" id="payment-credit-card"
                                       required>

                                <span class="form-error" id="payment-credit-card-error"></span>
                            </div>

                            <div class="form-group form-group--error">
                                <label for="payment-cvv">
                                    <span class="required">*</span> CVV Number
                                </label>

                                <input class="form-group__input" type="number" id="payment-cvv"
                                       required>
                                <span class="form-error" id="payment-cvv-error"></span>
                            </div>
                        </div>


                        <div class="form-group">
                            <div>
                                <span class="required">*</span> Expiration Date
                            </div>
                            <div class="donation__date">
                                <div class="dropdown">
                                    <input type="hidden" name="">
                                    <button class="dropdown__trigger">
                                        <span class="dropdown__value">Month</span>
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
                                        <a href="#">January</a>
                                        <a href="#">February</a>
                                        <a href="#">March</a>
                                        <a href="#">April</a>
                                        <a href="#">May</a>
                                        <a href="#">June</a>
                                        <a href="#">July</a>
                                        <a href="#">August</a>
                                        <a href="#">September</a>
                                        <a href="#">October</a>
                                        <a href="#">November</a>
                                        <a href="#">December</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropdown__trigger">
                                        <span class="dropdown__value">Year</span>
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
                                        <a href="#">2026</a>
                                        <a href="#">2027</a>
                                        <a href="#">2028</a>
                                        <a href="#">2029</a>
                                        <a href="#">2030</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="donation__monthly"><label class="custom-checkbox">
                            <span class="checkbox-text">Save card info for future donations</span>
                            <input type="checkbox" id="save-card-checkbox">
                            <span class="checkbox-box"></span>
                        </label>
                        </div>

                    </div>

                    <div class="donation__nav">

                        <a class="popup-payment__back prev_popup_screen" id="payment-back">Back</a>

                        <div class="circle__container">
                            <div class="circle circle--active"></div>
                            <div class="circle circle--active"></div>
                            <div class="circle circle--active"></div>
                        </div>

                    </div>
                    <button class="button button--primary" id="payment-complete-button" disabled>complete donation
                        <svg class="button__icon" width="25" height="22" viewBox="0 0 25 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                                  fill="currentColor"/>
                        </svg>
                    </button>
                </div>
    `;
    return screen;
  }

  private setValuesFromState() {}

  private setUp() {
    this.creditCardInput = this.screen.querySelector(
      '#payment-credit-card',
    ) as HTMLInputElement;
    this.creditCardError = this.screen.querySelector(
      '#payment-credit-card-error',
    ) as HTMLSpanElement;

    this.cvvInput = this.screen.querySelector(
      '#payment-cvv',
    ) as HTMLInputElement;
    this.cvvError = this.screen.querySelector(
      '#payment-cvv-error',
    ) as HTMLSpanElement;

    this.backButton = this.screen.querySelector(
      '#payment-back',
    ) as HTMLButtonElement;

    this.completeButton = this.screen.querySelector(
      '#payment-complete-button',
    ) as HTMLButtonElement;

    this.saveCardCheckbox = this.screen.querySelector(
      '#save-card-checkbox',
    ) as HTMLInputElement;
  }

  private init() {
    bindInputValidation(
      this.creditCardInput,
      this.creditCardError,
      validateCardNumber,
    );
    bindInputValidation(this.cvvInput, this.cvvError, validateCVV);

    this.completeButton.addEventListener('click', () => {});

    this.backButton.addEventListener('click', () => this.saveState());

    this.syncCheckboxFromStorage();
    this.saveCardCheckbox.addEventListener('change', () => {
      if (!this.saveCardCheckbox.checked) {
        localStorage.removeItem('savedCard');
      }
    });
  }


  private saveState() {
    const cardNumber = Number(this.creditCardInput.value);

    if (cardNumber) {
      this.paymentController.update({ cardNumber });
    }

    if (this.saveCardCheckbox.checked) {
      localStorage.setItem(
        'savedCard',
        JSON.stringify({
          cardNumber: this.paymentController.getState().cardNumber,
          expiry: this.paymentController.getState().expDate,
        }),
      );
    }

  }

  private syncCheckboxFromStorage() {
    const savedCard = localStorage.getItem('savedCard');
    this.saveCardCheckbox.checked = !!savedCard;
  }

  private resetForm() {
    this.creditCardInput.value = '';
    this.creditCardError.textContent = '';

    this.cvvInput.value = '';
    this.cvvError.textContent = '';

    this.completeButton.disabled = true;
  }

  getScreen() {
    return this.screen;
  }

  onOpen() {
    this.resetForm();
    this.setValuesFromState();
  }
}
