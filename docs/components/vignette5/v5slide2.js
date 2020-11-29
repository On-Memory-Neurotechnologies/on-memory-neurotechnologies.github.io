class vignette5Slide2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Before Amanda was diagnosed with Alzheimer’s, she and her family had not thought much about what
              might happen should she or Joseph suffer memory loss. So, Amanda has not written an advance
              directive addressing the decision of whether to pursue treatment with memory neurotechnology.
            </p>
        </div>
      `;
  }
}

customElements.define("v5-slide2", vignette5Slide2);
