class vignette5Slide3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              When Joseph and Jill ask Amanda if she would like her dementia to be treated with memory
              neurotechnology, her answer varies day to day. Sometimes she seems very enthusiastic about the idea
              of receiving an implant but other days, she seems uncomfortable and skeptical of the treatment.
            </p>
        </div>
      `;
  }
}

customElements.define("v5-slide3", vignette5Slide3);
