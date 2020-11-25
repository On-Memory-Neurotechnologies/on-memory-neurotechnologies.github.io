class OnDementia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <section id="dementia-header" class="header-page">
      <h2>PART 1</h2>
      <h1>Dementia</h1>
    </section>
    `;
  }
}

customElements.define("on-dementia", OnDementia);
