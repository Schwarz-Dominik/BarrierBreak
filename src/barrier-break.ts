import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AccessibilityModule } from './modules/accessibility-module.ts';
import { FontSizeModule } from './modules/font-size-module.ts';
import { ColorModeModule } from './modules/color-mode-module.ts';
import { DyslexiaModeModule } from './modules/dyslexia-mode-module.ts';
import { HighContrastModule } from './modules/high-contrast-module.ts';

@customElement('barrier-break')
export class BarrierBreak extends LitElement {
  static styles = css`
      *, option {
          font-size: var(--font-size-base, 1rem);
          font-family: var(--font-family-base, system-ui, sans-serif), serif;
          color: var(--text-color, #000);
          background: var(--bg-color, #fff);
      }
      
      :host {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          z-index: 10000;
      }

      .fab-button {
          position: fixed;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          border: var(--border);
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background-color 0.2s ease-in-out;
          bottom: 1rem;
          right: 1rem;
      }

      .fab-button:hover {
          background-color: #0056b3;
      }

      .modules-container {
          position: fixed;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          max-height: 80vh; /* oder z.B. 500px */
          overflow-y: auto;
          border-radius: 0.5rem;
          padding: 1rem;
          background: var(--bg-color, white);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          bottom: 5rem;
          right: 1rem;
      }
      
      .module-box div {
          display: flex;
          gap: 0.5rem;
          align-items: center;
      }
  `;

  @property({ type: JSON })
  settings = {};

  modules: AccessibilityModule[] = [
    new FontSizeModule(),
    new ColorModeModule(),
    new DyslexiaModeModule(),
    new HighContrastModule(),
  ];

  showMenu = true;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="modules-container" style="visibility: ${this.showMenu ? "visible" : "collapse"}">
        ${this.modules.map(el => html`
          <div class="module-box">
            <p>${el.title}</p>
            ${el.getTag(this.settings)}
          </div>`)}
      </div>

      <button @click=${this.toggleMenu} class="fab-button" aria-label="Barrierefreiheit öffnen">
        ♿️
      </button>
    `;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.requestUpdate();
  }
}