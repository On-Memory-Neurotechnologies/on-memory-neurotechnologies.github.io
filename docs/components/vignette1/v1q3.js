class vignette1Question3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
            <p class="paragraph-middle">
              Knowing that the device cannot completely stop cognitive decline, would you advocate for yourself or
              a loved one to receive treatment for [late stage] dementia with memory neurotechnology?
            </p>

            <form class="paragraph-middle">	
              <input type="radio" name="choice" id="yes-v1q3" checked>
              <label for="yes-v1q3">Yes</label>
              <input type="radio" name="choice" id="no-v1q3">
              <label for="no-v1q3">No</label>
            </form>
        </div>
      `;
  }
}

customElements.define("v1-q3", vignette1Question3);
