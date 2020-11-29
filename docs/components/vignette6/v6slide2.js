class vignette6Slide2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              On the other hand, Matthew and his family have somewhat adapted to the changes in Matthew’s
              cognitive function. Matthew worries that if he were to suddenly get better through treatment with
              memory neurotechnologies, he would feel strangely. He wonders if he would feel that he was really
              himself anymore, or just the device.
            </p>
        </div>
      `;
  }
}

customElements.define("v6-slide2", vignette6Slide2);
