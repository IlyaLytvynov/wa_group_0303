import './lamp.scss';

export class Lamp {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.isActive = false;
    this.render();
  }

  activate() {
    this.isActive = true;
    this.container.classList.add('lamp_active');
  }

  deactivate() {
    this.isActive = false;
    this.container.classList.remove('lamp_active');
  }

  toggle() {
    if(this.isActive) {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  render() {
    this.container = document.createElement('div');
    this.lighter = document.createElement('div');
    this.button = document.createElement('button');

    this.lighter.classList.add('lamp__lighter');
    this.button.classList.add('lamp__button');
    this.button.textContent = 'on/off';

    this.button.addEventListener('click', () => this.toggle());

    this.container.classList.add('lamp');

    this.container.appendChild(this.lighter);
    this.container.appendChild(this.button);

    this.rootElement.appendChild(this.container);
  }
}