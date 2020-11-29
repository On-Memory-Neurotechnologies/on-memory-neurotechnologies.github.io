class vignette1Slide3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Jessica started treatment with memory neurotechnology when her Alzheimer’s symptoms were in the
              early stages. She responded well to treatment and for a while, she was back to her old self. Now,
              years after her implantation surgery, her memory is failing her again.
            </p>
        </div>
      `;
  }
}

customElements.define("v1-slide3", vignette1Slide3);
