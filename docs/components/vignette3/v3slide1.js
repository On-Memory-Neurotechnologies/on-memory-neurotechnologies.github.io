class vignette3Slide1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Rob started treatment with memory neurotechnology to treat his Alzheimer’s symptoms last month. Five
              years before his diagnosis, Rob was in a car accident and was determined to be at fault for hitting
              a pedestrian.
              <br /><br />
              He dealt with many feelings of grief following this incident but through conversations with his
              family, began to accept what had happened. However, the progression of his AD resulted in his
              forgetting about this car accident.
            </p>
        </div>
      `;
  }
}

customElements.define("v3-slide1", vignette3Slide1);
