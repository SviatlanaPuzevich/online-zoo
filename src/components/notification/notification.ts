export type NotificationType = 'success' | 'error';

export class Notification {
  private el: HTMLElement;

  constructor(
    private message: string,
    private type: NotificationType,
  ) {
    this.el = this.render();
    document.body.appendChild(this.el);

    this.show();
  }

  private render(): HTMLElement {
    const el = document.createElement('div');
    el.className = `notification notification--${this.type}`;
    el.textContent = this.message;
    return el;
  }

  private show() {
    setTimeout(() => {
      this.el.classList.add('notification--hide');

      setTimeout(() => {
        this.el.remove();
      }, 500);
    }, 2500);
  }
}
