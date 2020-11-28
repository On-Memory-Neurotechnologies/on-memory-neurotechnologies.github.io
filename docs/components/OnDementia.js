class OnDementia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>PART 1</h2>
        <h1>On Dementia</h1>
      </div>
    `;
  }
}

customElements.define("on-dementia", OnDementia);
