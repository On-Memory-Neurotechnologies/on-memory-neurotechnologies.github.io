class vignette1Slide2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Christopher started treatment with memory neurotechnology when he was in mid- to later-stage
              cognitive decline. The implant improved his short term memory for a while but he was not as
              responsive to treatment as his family had hoped he would be. This may be due to the fact that
              Christopher’s Alzheimer’s was relatively advanced at the time of implantation. His memory has now
              receded to where it was before he got the implant.
            </p>
        </div>
      `;
  }
}

customElements.define("v1-slide2", vignette1Slide2);
