import { AccessibilityModule } from './accessibility-module.ts';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('font-size-module')
export class FontSizeModule extends AccessibilityModule {
  constructor() {
    super(
      'Schriftgröße',
      'font-size-module'
    );
  }

  protected render(): unknown {
    return html`
      <button @click=${() => this.adjustFontSize(-.1)}>-</button>
      <button @click=${() => this.adjustFontSize(.1)}>+</button>
    `;
  }

  adjustFontSize(delta: number) {
    const current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size-base')) || 1;
    const newValue = Math.min(Math.max(current + delta, 0.5), 3);
    document.documentElement.style.setProperty('--font-size-base', `${newValue}rem`);
  }
}