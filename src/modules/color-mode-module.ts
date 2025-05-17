import { AccessibilityModule } from './accessibility-module.ts';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('color-mode-module')
export class ColorModeModule extends AccessibilityModule {
  constructor() {
    super(
      'Farbmodus',
      'color-mode-module'
    );
  }

  render() {
    return html`
      <select @change=${this.changeColorScheme}>
        <option value="default">Standard</option>
        <option value="red-blind">Rot Schwäche</option>
        <option value="green-blind">Grün Schwäche</option>
        <option value="blue-blind">Blau Schwäche</option>
        <option value="color-weak">Farb Schwach</option>
        <option value="high-contrast">Hoher Kontrast</option>
      </select>
    `;
  }

  changeColorScheme(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    console.log(this.settings);
    // @ts-ignore
    const variables: {} = this.settings['color-mode-module'].variants[value].variables;
    for (const [key, val] of Object.entries(variables)) {
      //@ts-ignore
      if (val) document.documentElement.style.setProperty(key, val);
    }
    console.log(value);
  }
}