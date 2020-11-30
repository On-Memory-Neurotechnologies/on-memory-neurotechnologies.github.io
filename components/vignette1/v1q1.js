class vignette1Question1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
          <i>
            <strong>Early Stage AD: </strong>Symptoms are mild. A person at this stage is fully aware of their condition and only needs minimal assistance, if requested.
            </i>
          <br/>
            <p>
            Knowing that the device cannot completely stop cognitive decline, would you advocate for yourself or
            a loved one to receive treatment for <strong>early stage</strong> dementia with memory neurotechnology?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-v1q1" type='button' checked>Yes</button>
              <button id="no-v1q1" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v1-q1", vignette1Question1);
