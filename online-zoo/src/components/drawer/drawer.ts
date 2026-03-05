class Drawer {
  private collapseButton: HTMLElement;
  private drawer: HTMLElement;
  private drawerBadge: HTMLElement | null;
  private drawerToggleIcon: HTMLElement | null;
  private iconWrappers: NodeListOf<HTMLElement>;
  private circleWrappers: NodeListOf<HTMLElement>;

  constructor(root: HTMLElement) {
    const collapseButton = root.querySelector<HTMLElement>('#collapseBtn');
    const drawer = root.querySelector<HTMLElement>('#drawer');

    if (!collapseButton || !drawer) {
      throw new Error('Drawer: elements not found');
    }

    this.collapseButton = collapseButton;
    this.drawer = drawer;
    this.drawerBadge = root.querySelector<HTMLElement>('#drawer-badge');
    this.drawerToggleIcon = root.querySelector<HTMLElement>('#drawerToggleIcon');
    this.iconWrappers = root.querySelectorAll<HTMLElement>('#drawer .drawer__icon-wrap');
    this.circleWrappers = root.querySelectorAll<HTMLElement>('#drawer .drawer__circle');

    this.init();
  }

  private init(): void {
    this.collapseButton.addEventListener('click', () => this.toggle());
  }

  private toggle(): void {
    this.collapseButton.classList.toggle('drawer__collapse--expanded');
    this.drawer.classList.toggle('drawer__list--expanded');

    this.drawerBadge?.classList.toggle('drawer__badge--visible');
    this.drawerToggleIcon?.classList.toggle('drawer__left-icon--expanded');

    this.circleWrappers.forEach(circle => {
      circle.classList.toggle('drawer__circle--collapsed');
    });

    this.iconWrappers.forEach(icon => {
      if (icon.classList.contains('drawer__icon-wrap--active')) {
        icon.classList.toggle('drawer__icon-wrap--active--collapsed');
      } else {
        icon.classList.toggle('drawer__icon-wrap--collapsed');
      }
    });
  }
}


const root = document.body;
new Drawer(root);