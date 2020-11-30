class vignette1Question2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="grid">
          <div class="paragraph-middle">
          <i>
            <strong>Middle Stage AD: </strong>Symptoms start becoming more noticeable. More assistance will be needed to help the person living with Alzheimer's accomplish daily tasks.
            </i>
          <br/>
            <p>
              Knowing that the device cannot completely stop cognitive decline, would you advocate for yourself or
              a loved one to receive treatment for 
                <strong>middle stage</strong>
              dementia with memory neurotechnology?
            </p>

            <br />

            <form class="yes-or-no">
              <button id="yes-v1q2" type='button' checked>Yes</button>
              <button id="no-v1q2" type='button'>No</button>
            </form>
          </div>
        </div>
      `;
  }
}

customElements.define("v1-q2", vignette1Question2);
