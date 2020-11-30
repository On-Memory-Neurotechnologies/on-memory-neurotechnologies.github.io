class vignette1Slide1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Christopher and Jessica are both members of the support group. Both use memory neurotechnology to
              treat the symptoms of Alzheimer’s disease. However, both of them still have memory problems and need
              daily support from family and caregivers.
            </p>
        </div>
      `;
  }
}

customElements.define("v1-slide1", vignette1Slide1);
