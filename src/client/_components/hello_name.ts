import { customElement, property } from '../../../deps/lit/decorators.ts';
import { LitElement, TemplateResult, html } from '../../../deps/lit.ts'

@customElement('hello-name')
export class HelloName extends LitElement {

  @property()
  name = 'Somebody';

  render() : TemplateResult {
    return html`
      <link rel="stylesheet" href="./_components/hello_name.css">
      <span class="hello-name">
        Hello, ${this.name}!
        <p class="blue-text">Blue Text</p>
        <slot>
      </span>
    `;
  }
}
