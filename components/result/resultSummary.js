class resultsSummary extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>Part 4</h2>
        <h1>Your Results</h1>
      </div>
    `;
  }
}

customElements.define("result-summary", resultsSummary);
