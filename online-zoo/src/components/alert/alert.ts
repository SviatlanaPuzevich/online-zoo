export class Alert {
  constructor(private message: string) {}

  render(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'alert alert--error';

    el.innerHTML = `
      <div class="alert__content">
        ${this.message}
      </div>
      <button class="alert__close">×</button>
    `;

    const close = el.querySelector('.alert__close') as HTMLButtonElement;

    close.addEventListener('click', () => {
      el.remove();
    });

    return el;
  }
}
