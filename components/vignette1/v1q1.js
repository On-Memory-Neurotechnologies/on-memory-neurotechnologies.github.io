class vignette1Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
            Knowing that the device cannot completely stop cognitive decline, would you advocate for yourself or
            a loved one to receive treatment for [early stage] dementia with memory neurotechnology?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v1q1" checked>
              <label for="yes-v1q1">Yes</label>
              <input type="radio" name="choice" id="no-v1q1">
              <label for="no-v1q1">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v1-q1", vignette1Question1);
