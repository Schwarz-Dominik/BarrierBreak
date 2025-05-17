import { css, LitElement } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';

export class AccessibilityModule extends LitElement {
  static styles = css`
      :host {
          display: flex;
          gap: 0.5rem;
      }

      *, button, option {
          font-size: var(--font-size-base, 1rem);
          font-family: var(--font-family-base, system-ui, sans-serif), serif;
          color: var(--text-color, #000);
          background: var(--bg-color, #fff);
          flex-grow: 1;
      }
  `;

  title: string;
  tag: string;
  @property({ type: JSON })
  settings = {};

  constructor(title: string, tag: string) {
    super();
    this.title = title;
    this.tag = tag;
  }

  getTag(settings: {}) {
    //this.settings = settings;
    return html`<${unsafeStatic(this.tag)} settings="${settings}"></${unsafeStatic(this.tag)}>`;
  }
}