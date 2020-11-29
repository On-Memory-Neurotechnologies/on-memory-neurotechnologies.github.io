class vignette4Question4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              If you or your loved one pursued treatment with memory neurotechnology, in what contexts might you
              be concerned that the device would malfunction?
            </p>

            <form class="paragraph-middle">
              <input type="text" name="description" id="answer-v4q4" checked>
            </form>
        </div>
      `;
  }
}

customElements.define("v4-q4", vignette4Question4);
