export class Dropdown {
  private root: HTMLElement;
  private trigger: HTMLElement;
  private value: HTMLElement;
  private options: NodeListOf<HTMLAnchorElement>;

  constructor(root: HTMLElement) {
    this.root = root;
    this.trigger = root.querySelector('.dropdown__trigger')!;
    this.value = root.querySelector('.dropdown__value')!;
    this.options = root.querySelectorAll('.dropdown__menu a');

    this.init();
  }

  private init() {
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    this.options.forEach((option) => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        this.select(option);
      });
    });
  }

  private toggle() {
    document.querySelectorAll('.dropdown').forEach((d) => {
      if (d !== this.root) {
        d.classList.remove('open');
      }
    });

    this.root.classList.toggle('open');
  }

  private select(option: HTMLAnchorElement) {
    this.value.textContent = option.textContent ?? '';

    this.options.forEach((o) => o.classList.remove('selected'));

    option.classList.add('selected');

    this.root.classList.remove('open');
  }
}
