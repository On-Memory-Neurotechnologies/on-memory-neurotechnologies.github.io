class vignetteGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="vignette-grid">
        <div class="vignette-col">
          <button onclick="chosenVignette = 0; checkConsent()">Christopher and Jessica</button></button>
          <button onclick="chosenVignette = 1; checkConsent()">Anne</button>
        </div>
        <div class="vignette-col">
          <button onclick="chosenVignette = 2; checkConsent()">Rob</button>
          <button onclick="chosenVignette = 3; checkConsent()">Dolly</button>
        </div>
        <div class="vignette-col">
          <button onclick="chosenVignette = 4; checkConsent()">Amanda and Joseph</button>
          <button onclick="chosenVignette = 5; checkConsent()">Matthew</button>
        </div>
      </div>
      `;
  }
}

customElements.define("vignette-grid", vignetteGrid);
