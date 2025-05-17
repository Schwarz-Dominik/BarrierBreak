import { AccessibilityModule } from './accessibility-module.ts';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('high-contrast-module')
export class HighContrastModule extends AccessibilityModule {
  @property({ type: Boolean }) isToggled = false;

  constructor() {
    super(
      'High Kontrast Modus',
      'high-contrast-module'
    );
  }

  render() {
    return html`
      <button @click=${this.toggleHighContrast}>${this.isToggled ? 'Deaktivieren' : 'Aktivieren'}</button>
    `;
  }

  toggleHighContrast() {
    this.isToggled = !this.isToggled;
    document.documentElement.style.setProperty('--bg-color', this.isToggled ? '#000' : '#fff');
    document.documentElement.style.setProperty('--text-color', this.isToggled ? '#ff0' : '#000');
    document.documentElement.style.setProperty('--link-color', this.isToggled ? '#f0f' : '#06c');
    document.documentElement.style.setProperty('--border', this.isToggled ? '2px solid #ffc' : '1px solid #ccc');
  }
}