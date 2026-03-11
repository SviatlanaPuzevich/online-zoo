import { PopupContentInput } from '../../types/types';

export class BasicPopup {
  private content: PopupContentInput;
  private popup: HTMLElement;

  constructor(
    private title: string,
    private popupId: string,
  ) {
    this.render();
    this.init();
  }

  private render() {
    const popup = document.createElement('div');
    popup.className = 'popup donation__popup';
    popup.id = this.popupId;
    popup.setAttribute('popover', '');

    popup.innerHTML = `
    <div class="popup__content">
        <div class="popup__body popup__layout text-center">
            <div class="popup-header--accent">
                <h2 class="popup__title">${this.title}</h2>
                 <button class="popup__close" popovertarget="${this.popupId}" popovertargetaction="hide" >
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M13.2261 14.4991L0 27.4026L1.63183 28.9946L14.8579 16.0911L28.0879 28.9984L29.7197 27.4064L16.4897 14.4991L29.7195 1.59203L28.0876 0L14.8579 12.907L1.63211 0.00380707L0.000274658 1.59584L13.2261 14.4991Z"
                          fill="white"/>
                </svg>
            </button>
            </div>

                <div class="popup__inner">
                                         
                </div>
        </div>
    </div>
    `;

    this.popup = popup;
    document.body.appendChild(popup);
  }

  private init() {
    this.popup.addEventListener('toggle', (e) => {
      // if (e.newState === 'closed') {
      //   if ('onOpen' in this.content) {
      //     this.content?.onOpen?.();
      //   }
      // }
      //
      // if (e.newState === 'open') {
      //   if ('onClose' in this.content) {
      //     this.content?.onClose?.();
      //   }
      // }

      const contents = Array.isArray(this.content)
        ? this.content
        : [this.content];

      if (e.newState === 'open') {
        contents.forEach((c) => {
          if ('onOpen' in c) {
            c?.onOpen?.();
          }
        });
      }

      if (e.newState === 'closed') {
        contents.forEach((c) => {
          if ('onClose' in c) {
            c.onClose?.();
          }
        });
      }
    });
  }

  private normalizeContent(content: PopupContentInput): HTMLElement[] {
    this.content = content;
    if (content instanceof HTMLElement) return [content];

    if (Array.isArray(content)) {
      return content.map((c) => c.getScreen());
    }

    return [content.getScreen()];
  }

  setContent(content: PopupContentInput): void {
    const container = this.popup.querySelector('.popup__inner');
    if (!container) return;

    this.normalizeContent(content).forEach((el) => container.appendChild(el));
  }

  open() {
    this.popup.showPopover?.();
    if ('onOpen' in this.content) {
      this.content?.onOpen?.();
    }
  }

  close() {
    this.popup.hidePopover?.();
    if ('onClose' in this.content) {
      this.content?.onClose?.();
    }
  }
}
