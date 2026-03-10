import { Dropdown } from '../components/dropdown/dropdown';
import { PopupStepper } from '../components/popup/popupStepper';
import { BasicPopup } from '../components/popup/basicPopup';
import { LoginScreen } from '../components/popup/loginScreen';

document
  .querySelectorAll<HTMLElement>('.dropdown')
  .forEach((el) => new Dropdown(el));

document.addEventListener('click', () => {
  document
    .querySelectorAll('.dropdown')
    .forEach((d) => d.classList.remove('open'));
});

const loginButton = document.getElementById('login-button');

new PopupStepper('.popup__screen');



const loginPopup = new BasicPopup('Login/Register', 'login-popup');
const loginContent = new LoginScreen();
loginPopup.setContent(loginContent);

loginButton?.setAttribute('popovertarget', 'login-popup');
