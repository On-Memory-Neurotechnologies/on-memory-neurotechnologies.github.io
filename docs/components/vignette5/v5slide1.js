class vignette5Slide1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Amanda and Joseph are a married couple who has been together for 37 years. Amanda has mid-stage
              cognitive decline due to Alzheimer’s disease and Joseph has no memory problems. <br /><br />
              Neither Amanda or Joseph currently receives treatment with memory neurotechnology but they, with
              their only daughter Jill, are attending the support group to learn more about the implant as a
              treatment option for Amanda.            
            </p>
        </div>
      `;
  }
}

customElements.define("v5-slide1", vignette5Slide1);
