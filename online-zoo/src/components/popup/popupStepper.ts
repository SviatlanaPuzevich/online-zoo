export class PopupStepper {
  private screens: NodeListOf<HTMLElement>;
  private currentStep: number = 0;

  constructor(screenSelector: string) {
    this.screens = document.querySelectorAll<HTMLElement>(screenSelector);
    this.init();
  }

  private init(): void {
    document.addEventListener('click', this.handleClick.bind(this));
  }

  private handleClick(e: MouseEvent): void {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    if (target.classList.contains('next_popup_screen')) {
      this.next();
    }

    if (target.classList.contains('prev_popup_screen')) {
      this.prev();
    }
  }

  private next(): void {
    if (this.currentStep < this.screens.length - 1) {
      this.toggleScreen(this.currentStep, this.currentStep + 1);
      this.currentStep++;
    }
  }

  private prev(): void {
    if (this.currentStep > 0) {
      this.toggleScreen(this.currentStep, this.currentStep - 1);
      this.currentStep--;
    }
  }

  private toggleScreen(from: number, to: number): void {
    this.screens.item(from).classList.remove('popup__screen--active');
    this.screens.item(to).classList.add('popup__screen--active');
  }
}



