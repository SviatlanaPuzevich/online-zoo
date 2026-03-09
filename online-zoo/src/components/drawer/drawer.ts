import { AnimalItem } from '../../types/types';

export class Drawer {
  private collapseButton: HTMLElement;
  private drawerBadge: HTMLElement | null;
  private drawerToggleIcon: HTMLElement | null;
  private iconWrappers: NodeListOf<HTMLElement>;
  private circleWrappers: NodeListOf<HTMLElement>;
  private animalList: HTMLUListElement;
  private downButton: HTMLElement;

  private currentGroup = 1;
  private visibleCount = 3;

  constructor(
    private root: HTMLElement,
    private data: AnimalItem[],
    private activeId: number,
  ) {
    const collapseButton = root.querySelector<HTMLElement>('#collapseBtn');
    const animalList = root.querySelector('#drawer-list') as HTMLUListElement;
    this.downButton = root.querySelector('#drawer-down-button') as HTMLElement;

    if (!collapseButton || !this.downButton) {
      throw new Error('Drawer: elements not found');
    }

    this.collapseButton = collapseButton;
    console.log(collapseButton);
    this.animalList = animalList;
    this.drawerBadge = root.querySelector<HTMLElement>('#drawer-badge');
    this.drawerToggleIcon =
      root.querySelector<HTMLElement>('#drawerToggleIcon');
    this.iconWrappers = root.querySelectorAll<HTMLElement>(
      '#drawer .drawer__icon-wrap',
    );
    this.circleWrappers = root.querySelectorAll<HTMLElement>(
      '#drawer .drawer__circle',
    );

    this.init();
  }

  renderList() {
    this.animalList.appendChild(this.renderActiveItem());

    for (let i = 0; i < this.data.length; i++) {
      const visible = i < this.visibleCount ;
      this.animalList.appendChild(this.renderItem(this.data[i]!, visible));
    }
  }

  private renderItem(item: AnimalItem, visible: boolean) {
    const el = document.createElement('li');
    el.classList.add('drawer__item');
    if (!visible) {
      el.classList.add('hidden');
    }

    el.innerHTML = `
     <a class="drawer__link" href="index.html?id=${item.petId}">
                                <div class="drawer__circle drawer__circle--collapsed">
                                    <div class="drawer__icon-wrap drawer__icon-wrap--collapsed">
                                        <svg class="drawer__icon">
                                            <use href="/assets/icons/zoos/sprite.svg#${item.id}-d-icon"></use>
                                        </svg>
                                    </div>
                                </div>
                                <p class="drawer__text">${item.text}</p>
                            </a>
    `;
    return el;
  }

  private renderActiveItem() {
    const item = this.data.find((item) => item.petId === this.activeId);
    const el = document.createElement('li');
    el.classList.add('drawer__item');
    el.classList.add('drawer__item--active');

    if (item) {
      const index = this.data.findIndex((item) => item.id === this.activeId);
      this.data.splice(index, 1);
      el.innerHTML = `
    <a class="drawer__link" href="index.html?id=${item.petId}">
                                <div class="drawer__circle drawer__circle--collapsed">
                                    <div class="drawer__icon-wrap drawer__icon-wrap--active drawer__icon-wrap--active--collapsed">
                                        <svg class="drawer__icon">
                                            <use href="/assets/icons/zoos/sprite.svg#${item.id}-d-icon"></use>
                                        </svg>
                                    </div>
                                </div>
                                <p class="drawer__text">${item.text}</p>
                            </a>
    `;
    }

    return el;
  }

  private init(): void {
    this.collapseButton.addEventListener('click', (e) =>  {
      console.log('listener');
      e.preventDefault();
      this.toggleLeftRight();
    });
    this.downButton.addEventListener('click', (e) => {
      this.showNext()
      e.preventDefault();
    });
  }


  private toggleLeftRight(): void {
    console.log("expand")
    this.collapseButton.classList.toggle('drawer__collapse--expanded');
    this.root.classList.toggle('drawer--expanded');

    this.drawerBadge?.classList.toggle('drawer__badge--visible');
    this.drawerToggleIcon?.classList.toggle('drawer__left-icon--expanded');

    this.circleWrappers.forEach((circle) => {
      circle.classList.toggle('drawer__circle--collapsed');
    });

    this.iconWrappers.forEach((icon) => {
      if (icon.classList.contains('drawer__icon-wrap--active')) {
        icon.classList.toggle('drawer__icon-wrap--active--collapsed');
      } else {
        icon.classList.toggle('drawer__icon-wrap--collapsed');
      }
    });
  }

  private showNext(): void {
    const liArray = Array.from(this.animalList.children) as HTMLLIElement[];

    const start = this.currentGroup * this.visibleCount + 1;
    const end = start + this.visibleCount;

    liArray.forEach((el, index) => {
      if (index !== 0) {
        el.classList.add('hidden');
      }
    });

    for (let i = start; i < end; i++) {
      if (liArray[i]) {
        liArray[i]?.classList.remove('hidden');
      }
    }

    this.currentGroup++;

    if (start >= this.data.length) {
      this.currentGroup = 1;

      for (let i = 1; i <= this.visibleCount; i++) {
        liArray[i]?.classList.remove('hidden');
      }
    }
  }
}
