import {Dropdown} from "../components/dropdown/dropdown";
import { PopupStepper } from '../components/popup/popupStepper';

document.querySelectorAll<HTMLElement>('.dropdown')
    .forEach(el => new Dropdown(el))

document.addEventListener('click', () => {
  document
    .querySelectorAll('.dropdown')
    .forEach((d) => d.classList.remove('open'));
});

new PopupStepper('.popup__screen');