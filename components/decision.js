class decision extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="grid">
          <p class="paragraph-middle">
              About a week later, Dr. Singh confirms that Pat is in good physical health and is a candidate for surgery to implant the memory prosthesis in the hippocampal region of her brain
              <br /><br />
              After talking it through with her family, Pat ultimately decides to have a memory prosthesis implanted.
          </p>
      </div>
      `;
  }
}

customElements.define("decision-page", decision);
