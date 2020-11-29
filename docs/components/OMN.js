class OMN extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>PART 3</h2>
        <h1>On Memory Neurotechnologies</h1>
      </div>
    `;
  }
}

customElements.define("on-memory-neurotechnologies", OMN);
