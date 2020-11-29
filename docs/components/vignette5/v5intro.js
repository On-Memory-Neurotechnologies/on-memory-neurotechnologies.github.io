class vignette5Intro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>VIGNETTE 5</h2>
        <h1>AMANDA and JOSEPH</h1>
      </div>
    `;
  }
}

customElements.define("v5-intro", vignette5Intro);
