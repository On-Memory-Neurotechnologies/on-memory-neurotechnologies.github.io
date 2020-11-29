class vignette4Slide2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Dolly expressed that the loss of her ability to care for Melanie independently was one of the most
              distressing aspects of her Alzheimer’s diagnosis. This loss was also hard on Shannon who relied on
              Dolly for childcare while at work. Now, Shannon is responsible both for Melanie’s after school care
              and also providing care for Dolly.            
            </p>
        </div>
      `;
  }
}

customElements.define("v4-slide2", vignette4Slide2);
