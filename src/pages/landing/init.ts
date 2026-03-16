import { ApiService } from '../../service/service';
import { ReviewCardList } from '../../components/reviewCard/reviewCardList';
import { AnimalCardList } from '../../components/animalCard/animalCardList';
import { Loader } from '../../components/loader/loader';
import { MenuItem } from '../../types/types';
import { SideMenu } from '../../components/sideMenu/sideMenu';
import { AnimalSlider } from '../../components/animalCard/animalSlider';
import { ReviewSlider } from '../../components/reviewCard/reviewSlider';
import { Alert } from '../../components/alert/alert';
import { PaymentController } from '../../controllers/paymentController';
import { BillingScreen } from '../../components/popup/donation/billingScreen';
import { InfoScreen } from '../../components/popup/donation/infoScreen';
import { BasicPopup } from '../../components/popup/basicPopup';
import { PopupStepper } from '../../components/popup/popupStepper';
import { PaymentScreen } from '../../components/popup/donation/paymentScreen';


// ========== side menu ===================

const menuItems: MenuItem[] = [
  { label: 'About', href: 'index.html' },
  { label: 'Map', href: './src/pages/map/index.html' },
  { label: 'Zoos', href: './src/pages/zoos/index.html?id=1' },
  { label: 'Contact Us', href: './src/pages/contacts/index.html' },
  {
    label: 'Design',
    href: 'figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1',
  },
];

const sideMenuContainer = document.getElementById('side-menu') as HTMLElement;
const menu = new SideMenu(sideMenuContainer, menuItems, 0);
menu.render();



// =====================animal slider==========================

const animalSlider = document.querySelector('#animal-slider') as HTMLElement;

async function initAnimalCards() {
  const container = document.querySelector('#animal-cards') as HTMLElement;
  const loader = new Loader().render();
  container.appendChild(loader);
  try {
    const animals = await ApiService.getAnimals();
    loader.remove();
    const list = new AnimalCardList(container, animals);
    list.render();

    new AnimalSlider(animalSlider);

  } catch (err) {
    loader.remove();

    const alert = new Alert(
      'Something went wrong. Please, refresh the page',
    ).render();
    animalSlider.prepend(alert);
  }
}

// =====================review slider==========================

async function initReviewCards() {
  const reviewSlider = document.querySelector('#reviews-slider') as HTMLElement;
  const container = document.querySelector('#reviews-wrapper') as HTMLElement;
  const loader = new Loader().render();
  container.appendChild(loader);
  try {
    const reviews = await ApiService.getReviews();
    loader.remove();
    const list = new ReviewCardList(container, reviews);
    list.render();

    new ReviewSlider(reviewSlider);

  } catch (err) {
    loader.remove();
    const alert = new Alert(
      'Something went wrong. Please, refresh the page',
    ).render();
    reviewSlider.prepend(alert);
  }
}

// ============================== payment popup=============================/
const paymentController = new PaymentController();
const billingScreen = new BillingScreen(paymentController);
const infoScreen = new InfoScreen(paymentController);
const paymentScreen = new PaymentScreen(paymentController);
const donationPopup = new BasicPopup('Make your donation', 'donation-popup', paymentController);
donationPopup.setContent([billingScreen, infoScreen, paymentScreen]);
new PopupStepper('.donation__screen');



//======================donation buttons============================/
const donateButtons = document.querySelectorAll<HTMLButtonElement>(
  '.donate-card__button',
);
donateButtons.forEach((button) => {
  button.setAttribute('popovertarget', 'donation-popup');
});

initAnimalCards();

initReviewCards();
