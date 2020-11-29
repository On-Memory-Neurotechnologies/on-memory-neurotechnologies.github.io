class vignette6Slide1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Matthew has Alzheimer’s disease and his symptoms are aligned with early-stage cognitive decline. He
              is considering using memory neurotechnology as a treatment but hasn’t yet decided whether it’s the
              right decision for him.
              <br /><br />
              Matthew is afraid of losing his identity and personality through the memory loss that comes with
              Alzheimer’s. This is his primary motivation for considering memory neurotechnology as a treatment.
            </p>
        </div>
      `;
  }
}

customElements.define("v6-slide1", vignette6Slide1);
