class vignette4Slide3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Dolly and her daughter, Shannon, decided to try treatment with memory neurotechnology in the hopes
              that Dolly would once again be able to provide care for Melanie. Dolly’s doctors informed both Dolly
              and Shannon that there was a small probability that the device would malfunction at some point
              during the course of treatment.
            </p>
        </div>
      `;
  }
}

customElements.define("v4-slide3", vignette4Slide3);
