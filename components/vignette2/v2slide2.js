class vignette2Slide2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              One thing Anne really likes about the implant is the app that comes with it. Similar to the app she
              uses to track her fitness, the app for her memory neurotechnology tracks when and why the implant
              makes decisions.
              <br /><br />
              As someone who values her health and staying in tune with her body, Anne says that the ability to
              monitor what her implant is doing has helped her adjust to this new part of herself.
            </p>
        </div>
      `;
  }
}

customElements.define("v2-slide2", vignette2Slide2);
