class vignette4Intro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>VIGNETTE 4</h2>
        <h1>DOLLY</h1>
      </div>
    `;
  }
}

customElements.define("v4-intro", vignette4Intro);
