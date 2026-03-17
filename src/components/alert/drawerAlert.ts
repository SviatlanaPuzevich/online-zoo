export class DrawerAlert {
  constructor(
    private message: string
  ) {}

  render() {
    const el = document.createElement('li');
    el.classList.add('drawer__item');
    el.classList.add('drawer__item--active');

    el.innerHTML = `
      <a class="drawer__link" href="#">
                                
                                <p class="drawer__text">${this.message}</p>
                            </a>
    `;
    return el;
  }
}
