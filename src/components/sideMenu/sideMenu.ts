import { MenuItem } from '../../types/types';

export class SideMenu {
  constructor(
    private container: HTMLElement,
    private items: MenuItem[],
    private activeIndex: number,
  ) {}

  render() {
    const links = this.items
      .map((item: MenuItem, index) => {
        const active = index === this.activeIndex ? 'active' : '';

        return `
        <li>
          <a class="${active}" href="${item.href}">
            ${item.label}
          </a>
        </li>
      `;
      })
      .join('');

    this.container.innerHTML = `
    <div class="side-menu__container">
      <button class="close-btn" popovertarget="side-menu" popovertargetaction="hide">
            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2261 14.4991L0 27.4026L1.63183 28.9946L14.8579 16.0911L28.0879 28.9984L29.7197 27.4064L16.4897 14.4991L29.7195 1.59203L28.0876 0L14.8579 12.907L1.63211 0.00380707L0.000274658 1.59584L13.2261 14.4991Z"
                      fill="white"/>
            </svg>
        </button>

      <nav class="side-nav">
        <ul>
          ${links}
        </ul>
      </nav>
    </div>
    `;
  }
}
