class vignette3Intro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>VIGNETTE 3</h2>
        <h1>ROB</h1>
      </div>
    `;
  }
}

customElements.define("v3-intro", vignette3Intro);
