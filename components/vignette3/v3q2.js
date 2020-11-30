class vignette3Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              If Rob’s accident happened after he was diagnosed with Alzheimer’s disease
              but before he received the implant, does this change things?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v3q2" checked>
              <label for="yes-v3q2">Yes</label>
              <input type="radio" name="choice" id="no-v3q2">
              <label for="no-v3q2">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v3-q2", vignette3Question2);
