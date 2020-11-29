class vignette2Intro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>VIGNETTE 2</h2>
        <h1>ANNE</h1>
      </div>
    `;
  }
}

customElements.define("v2-intro", vignette2Intro);
