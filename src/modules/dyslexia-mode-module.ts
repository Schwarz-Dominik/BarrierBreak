import { AccessibilityModule } from './accessibility-module.ts';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('font-family-module')
export class DyslexiaModeModule extends AccessibilityModule {
  @property({ type: Boolean }) isToggled = false;

  constructor() {
    super(
      'Dyslexia Modus',
      'font-family-module'
    );
  }

  render() {
    return html`
      <button @click=${this.setFontFamily}>${this.isToggled ? 'Deaktivieren' : 'Aktivieren'}</button>
    `;
  }

  setFontFamily() {
    console.log(this.settings);
    this.isToggled = !this.isToggled;
    const value = this.isToggled ? '"OpenDyslexic", Arial, sans-serif' : 'Arial, sans-serif';
    document.documentElement.style.setProperty('--font-family-base', value);
  }
}