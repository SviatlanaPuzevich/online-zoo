import { Notification } from '../components/notification/notification';

export const showSuccess = (amount: number, pet: string) => {
  new Notification(
    `Thank you for your donation of $${amount} to ${pet}!`,
    'success',
  );
};

export const showError = () => {
  new Notification('Something went wrong. Please, try again later.', 'error');
};


