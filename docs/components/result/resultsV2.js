class resultsV2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <h2>Vignette 2</h2>
            <p>
            You would / not want a user interface [and be able to see these things.]
            <br /><br />
            X percent of people agreed with you.
            </p>
          </div>
        </div>
      `;
  }
}

customElements.define("result-2", resultsV2);
