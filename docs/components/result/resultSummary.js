class resultsSummary extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header-page">
        <h2>Part 4</h2>
        <h1>Results Summary Display</h1>
      </div>
    `;
    console.log(userId);
  }
}

customElements.define("result-summary", resultsSummary);
