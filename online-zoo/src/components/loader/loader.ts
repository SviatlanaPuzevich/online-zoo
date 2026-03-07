export class Loader {
  render(): HTMLElement {
    const el = document.createElement('div');
    el.className = 'loader__container';
    el.innerHTML = `
<div class="loader__text">Loading...</div>
    <div class="loader"></div>
`;
    return el;
  }
}
