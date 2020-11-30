class vignette4Question4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              If you or your loved one pursued treatment with memory neurotechnology, in what contexts might you
              be concerned that the device would malfunction?
            </p>
            <br />
            <form>
              <textarea name="description" id="answer-v4q4" checked></textarea>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v4-q4", vignette4Question4);
