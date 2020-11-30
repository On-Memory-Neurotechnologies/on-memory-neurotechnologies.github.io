class vignette3Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
            <p>
              If Rob’s accident happened after he was diagnosed with Alzheimer’s disease
              but before he received the implant, <strong>does this change things?</strong>
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-v3q2" type='button' checked>Yes</button>
              <button id="no-v3q2" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v3-q2", vignette3Question2);
