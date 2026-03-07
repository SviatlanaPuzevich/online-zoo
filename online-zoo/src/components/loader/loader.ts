export class Loader {
  render(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'loader';
    return el;
  }
}
