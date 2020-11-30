class resultsV6 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h2>Vignette 6</h2>
            <p>
              You are more concerned with losing identity / agency due to a memory
              prosthesis than opposite.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-6", resultsV6);
