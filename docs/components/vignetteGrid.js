class vignetteGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
            [show grid with names of the people in the vignettes:<br/>
              Christopher and Jessica<br/>
              Anne<br/>
              Rob<br/>
              Dolly<br/>
              Amanda and Joseph<br/>
              Matthew]
            </p>
        </div>
      `;
  }
}

customElements.define("vignette-grid", vignetteGrid);
