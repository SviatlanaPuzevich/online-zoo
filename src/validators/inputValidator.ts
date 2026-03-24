export function validatePassword(password: string): string | null {
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

export function validateConfirmation(password: string) {

  return function(confirmation: string) {
    if (!password || !confirmation) {
      return 'Confirmation is required';
    }

    if (password !== confirmation) {
      return 'Password doesn\'t match';
    }
    return null;
  };
}


export function validateEmail(email: string): string | null {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return 'Email is required';
  }

  if (!regex.test(email)) {
    return 'Invalid email format';
  }

  return null;
}

export function validateLogin(login: string): string | null {
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

export function validateName(login: string): string | null {
  const regex = /^[A-Za-z0-9 ]+$/;

  const regex2 = /^[a-zA-Z]/;

  if (!login) {
    return 'Name is required';
  }

  if (!regex.test(login)) {
    return 'Name must contain only latin letters and numbers';
  }

  if (!regex2.test(login)) {
    return 'Name must starts with latin letter';
  }

  if (login.length < 3) {
    return 'Name must be at least 3 characters';
  }

  return null;
}

export function validateAmount(value: string): string | null {
  if (!value) {
    return 'Amount is required';
  }

  const regex = /^\d+(\.\d+)?$/;

  if (!regex.test(value)) {
    return 'Amount must be a valid number';
  }

  const numberValue = Number(value);

  if (numberValue <= 0) {
    return 'Amount must be greater than 0';
  }

  return null;
}

export function validateCardNumber(cardNumber: string): string | null {
  const regex = /^\d{16}$/;

  if (!cardNumber) {
    return 'Card number is required';
  }

  if (!regex.test(cardNumber)) {
    return 'Card number must contain exactly 16 digits';
  }

  return null;
}

export function validateExpirationDate(value: string): string | null {
  if (!value) {
    return 'Expiration date is required';
  }

  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  if (!regex.test(value)) {
    return 'Expiration date must be in MM/YY format';
  }

  const [monthStr, yearStr] = value.split('/');
  const month = Number(monthStr);
  const year = Number(`20${yearStr}`);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return 'Card has expired';
  }

  return null;
}

export function validateCVV(cvv: string): string | null {
  const regex = /^\d{3}$/;

  if (!cvv) {
    return 'CVV is required';
  }

  if (!regex.test(cvv)) {
    return 'CVV must be exactly 3 digits';
  }

  return null;
}

export function bindInputValidation(
  input: HTMLInputElement,
  error: HTMLElement,
  validator: (value: string) => string | null,
) {
  input.addEventListener('blur', () => validateInput(input, error, validator));

  input.addEventListener('focus', () =>
    clearNotValidData(input, error, validator),
  );
}

function validateInput(
  input: HTMLInputElement,
  errorSpan: HTMLElement,
  fnValidate: (arg0: string) => string | null,
) {
  const text = fnValidate(input.value);
  if (text) {
    input.classList.add('error-input');
    errorSpan.classList.remove('hidden');
    errorSpan.textContent = text;
  } else {
    errorSpan.classList.add('hidden');
    errorSpan.textContent = '';
  }
}

function clearNotValidData(
  input: HTMLInputElement,
  errorSpan: HTMLSpanElement,
  validateFn: (arg0: string) => string | null,
) {
  const data = input.value;
  if (validateFn(data)) {
    input.classList.remove('error-input');
    errorSpan.classList.add('hidden');
  }
}