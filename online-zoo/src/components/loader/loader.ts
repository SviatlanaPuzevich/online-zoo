export class Loader {
  render(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'loader__container';
    const loader = document.createElement('div');
    loader.className = 'loader';
    container.appendChild(loader);
    return container;
  }
}
