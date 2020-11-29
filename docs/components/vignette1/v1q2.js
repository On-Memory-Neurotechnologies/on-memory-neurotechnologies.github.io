class vignette1Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Knowing that the device cannot completely stop cognitive decline, would you advocate for yourself or
              a loved one to receive treatment for [middle stage] dementia with memory neurotechnology?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v1q2" checked>
              <label for="yes-v1q2">Yes</label>
              <input type="radio" name="choice" id="no-v1q2">
              <label for="no-v1q2">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v1-q2", vignette1Question2);
