import { PaymentState, StateController, User } from '../types/types';

export class PaymentController implements StateController<PaymentState> {
  private state: PaymentState = this.initialize();

  reset() {
    this.state = this.initialize();
  }

  update(partial: Partial<PaymentState>) {
    Object.assign(this.state, partial);
  }

  getState(): PaymentState {
    return this.state;
  }

  private initialize() {
    const user: User = JSON.parse(localStorage.getItem('user') || 'null');
    const card = JSON.parse(localStorage.getItem('card') || 'null');

    return  {
      name: user?.name ?? '',
      email: user?.email ?? '',
      amount: 10,
      petId: undefined,
      petName: '',
      cardNumber: card?.cardNumber ?? '',
      expDate: card?.cardNumber ?? '',
    };

  }
}
