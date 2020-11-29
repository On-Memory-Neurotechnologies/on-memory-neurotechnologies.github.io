class vignette1Intro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>VIGNETTE 1</h2>
        <h1>CHRISTOPHER and JESSICA</h1>
      </div>
    `;
  }
}

customElements.define("v1-intro", vignette1Intro);
