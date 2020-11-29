class vignette4Slide1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Dolly was diagnosed with Alzheimer’s disease when her memory decline began interfering with her
              ability to remember basic daily activities such as eating regular meals and getting dressed in the
              morning. <br /><br />
              Before her diagnosis, Dolly provided after-school care for her 6 year old granddaughter, Melanie,
              but she had to stop helping with childcare due to her memory problems.
            </p>
        </div>
      `;
  }
}

customElements.define("v4-slide1", vignette4Slide1);
