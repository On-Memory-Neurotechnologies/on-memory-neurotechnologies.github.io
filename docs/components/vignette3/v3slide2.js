class vignette3Slide2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Now that Rob has started treatment with memory neurotechnology and has shown improvement in his
              ability to form new memories, his family is unsure whether they should mention the car accident to
              Rob.
              <br /><br />
              His adult children don’t want to hide the fact that such a significant event happened in their
              father’s past. However, they are worried that talking about the accident in front of Rob as
              reintroducing the memory could be confusing for him and restart his process of dealing with the
              grief all over again.
            </p>
        </div>
      `;
  }
}

customElements.define("v3-slide2", vignette3Slide2);
