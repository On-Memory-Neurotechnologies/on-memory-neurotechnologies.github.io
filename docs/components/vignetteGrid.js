class vignetteGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              <button onclick="chosenVignette = 0; checkConsent()">Christopher and Jessica</button></button><br/>
              <button onclick="chosenVignette = 1; checkConsent()">Anne</button><br/>
              <button onclick="chosenVignette = 2; checkConsent()">Rob</button><br/>
              <button onclick="chosenVignette = 3; checkConsent()">Dolly</button><br/>
              <button onclick="chosenVignette = 4; checkConsent()">Amanda and Joseph</button><br/>
              <button onclick="chosenVignette = 5; checkConsent()">Matthew</button>
            </p>
        </div>
      `;
  }
}

customElements.define("vignette-grid", vignetteGrid);
