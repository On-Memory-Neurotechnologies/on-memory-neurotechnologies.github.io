class vignette6Intro extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>VIGNETTE 6</h2>
        <h1>MATTHEW</h1>
      </div>
    `;
  }
}

customElements.define("v6-intro", vignette6Intro);
