import { MenuItem } from '../../types/types';
import { SideMenu } from '../../components/sideMenu/sideMenu';
import { Loader } from '../../components/loader/loader';
import { ApiService } from '../../service/service';
import { Alert } from '../../components/alert/alert';
import { AnimalFactSection } from '../../components/animalFact/animalFact';

// =========side menu==========
const menuItems: MenuItem[] = [
  { label: 'About', href: '../../../index.html' },
  { label: 'Map', href: '../map/index.html' },
  { label: 'Zoos', href: 'index.html' },
  { label: 'Contact Us', href: '../contacts/index.html' },
  {
    label: 'Design',
    href: 'figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1',
  },
];

const sideMenuContainer = document.getElementById('side-menu') as HTMLElement;

const menu = new SideMenu(sideMenuContainer, menuItems, 2);

menu.render();

// ==========get parameter==========
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
if (!id) {
  throw new Error('id parameter is missing');
}

// ================load cameras images===========

(function loadCamerasImagesById(id: number) {
  const links = [
    `../../../assets/images/zoos/${id}/mainCam.png`,
    `../../../assets/images/zoos/${id}/cam1.png`,
    `../../../assets/images/zoos/${id}/cam2.png`,
    `../../../assets/images/zoos/${id}/cam3.png`,
  ];
  const images = Array.from(document.querySelectorAll('.video__link > img'));
  for (let i = 0; i < images.length; i++) {
    images[i]!.setAttribute('src', links[i]!);
  }
})(id);

async function initAnimalFact() {
  const factContainer = document.getElementById('fact-container') as HTMLElement;
  const loader = new Loader().render();
  factContainer.appendChild(loader);
  try {
    const animalFact = await ApiService.getAnimalFact(id);
    loader.remove();
    const animalFactSection = new AnimalFactSection(factContainer, animalFact);
    animalFactSection.render();

  } catch (err) {
    loader.remove();
    const alert = new Alert(
      'Something went wrong. Please, refresh the page',
    ).render();
    factContainer.prepend(alert);
  }
}

initAnimalFact();
