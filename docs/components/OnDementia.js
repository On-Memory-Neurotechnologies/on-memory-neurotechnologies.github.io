class OnDementia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h2>PART 1</h2>
      <h1>Dementia</h1>
    `;
  }
}

customElements.define("on-dementia", OnDementia);
