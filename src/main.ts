import { Dropdown } from './components/dropdown/dropdown';
import { PopupStepper } from './components/popup/popupStepper';
import { BasicPopup } from './components/popup/basicPopup';
import { LoginScreen } from './components/popup/login/loginScreen';
import { RegistrationScreen } from './components/popup/login/registerScreen';
import { LoginElement } from './components/header/login';

document
  .querySelectorAll<HTMLElement>('.dropdown')
  .forEach((el) => new Dropdown(el));

document.addEventListener('click', () => {
  document
    .querySelectorAll('.dropdown')
    .forEach((d) => d.classList.remove('open'));
});

const loginDiv = document.querySelector('.user__container') as HTMLElement;

const loginElement = new LoginElement(loginDiv);
loginElement.render();




const loginPopup = new BasicPopup('Login/Registration', 'login-popup');
const loginScreen = new LoginScreen();
const registrationScreen = new RegistrationScreen();
loginPopup.setContent([loginScreen, registrationScreen]);
new PopupStepper('.login-group__screen');

