import { MenuItem } from '../../types/types';
import { SideMenu } from '../../components/sideMenu/sideMenu';

const menuItems: MenuItem[] = [
  { label: 'About', href: '../../../index.html' },
  { label: 'Map', href: 'index.html' },
  { label: 'Zoos', href: '../zoos/index.html' },
  { label: 'Contact Us', href: '../contacts/index.html' },
  {
    label: 'Design',
    href: 'figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=0%3A1',
  },
];

const sideMenuContainer = document.getElementById('side-menu') as HTMLElement;

const menu = new SideMenu(sideMenuContainer, menuItems, 1);

menu.render();
