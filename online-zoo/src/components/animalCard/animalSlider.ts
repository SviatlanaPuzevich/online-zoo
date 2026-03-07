
export class AnimalSlider {
  private track: HTMLElement;
  private prev: HTMLButtonElement;
  private next: HTMLButtonElement;

  private currentColumn = 0;
  private cardsPerRow: number = 0;
  private columnWidth: number = 0;
  private visibleColumns = 0;
  private maxScroll: number = 0;
  private maxIndex = 0;

  constructor(root: HTMLElement) {
    this.track = root.querySelector('.animal-slider__track')!;
    this.prev = root.querySelector('.slider-btn-prev')!;
    this.next = root.querySelector('.slider-btn-next')!;

    this.setUp();
    this.init();
  }

  private setUp() {
    const cards = Array.from(this.track.getElementsByClassName('animal-card'));
    this.cardsPerRow = Math.ceil(cards.length / this.getRowsCount());
    if (!cards || cards.length === 0) {
      const controls = this.track.querySelector(
        '.animal-slider__buttons',
      ) as HTMLElement;
      controls.classList.add('animal-slider__buttons--hidden');
      return;
    }

    const cardWidth = cards[0]!.getBoundingClientRect().width;
    const style = window.getComputedStyle(this.track);
    const gap = parseFloat(style.gap) || 0;
    this.columnWidth = cardWidth + gap;
    this.visibleColumns = Math.floor(this.track.clientWidth / this.columnWidth);

    this.maxIndex = this.cardsPerRow - this.visibleColumns;
    this.maxScroll = this.track.scrollWidth - this.track.clientWidth;
  }

  private init() {
    this.prev.addEventListener('click', () => {
      this.moveBack();
    });

    this.next.addEventListener('click', () => {
      this.moveForward();
    });

    window.addEventListener('resize', () => {
      this.setUp();

      this.track.scrollTo({
        left: this.currentColumn * this.columnWidth,
      });
    });

  }

  private moveForward() {
    if (this.currentColumn < this.maxIndex) {
      this.currentColumn++;
    } else {
      this.currentColumn = 0;
    }

    this.track.scrollTo({
      left: this.currentColumn * this.columnWidth,
      behavior: 'smooth',
    });
  }

  private moveBack() {
    if (this.currentColumn > 0) {
      this.currentColumn--;
      this.track.scrollTo({
        left: this.currentColumn * this.columnWidth,
        behavior: 'smooth',
      });
    } else {
      this.currentColumn = this.maxIndex;
      this.track.scrollTo({
        left: this.maxScroll,
        behavior: 'smooth',
      });
    }
  }

  private getRowsCount() {
    const positions = new Set<number>();
    const cards = Array.from(this.track.children) as HTMLElement[];
    cards.forEach((el: HTMLElement) => {
      positions.add(el.offsetTop);
    });
    return positions.size;
  }
}
