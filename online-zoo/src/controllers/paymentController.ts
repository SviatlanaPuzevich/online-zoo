import { PaymentState, User } from '../types/types';

export class PaymentController {
  private state: PaymentState = {};

  reset() {
    const user: User = JSON.parse(localStorage.getItem('user') || 'null');
    const card = JSON.parse(localStorage.getItem('card') || 'null');

    this.state = {
      name: user?.name ?? '',
      email: user?.email ?? '',
      amount: 10,
      petId: undefined,
      petName: '',
      cardNumber: card?.cardNumber ?? '',
      expDate: card?.cardNumber ?? '',
    };
  }

  update(partial: Partial<PaymentState>) {
    Object.assign(this.state, partial);
  }

  getState() : PaymentState {
    return this.state;
  }
}
